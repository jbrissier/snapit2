import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next"
import moment from 'moment'
import { authOptions } from "../../../pages/api/auth/[...nextauth]"
import _ from 'lodash'
const prisma = new PrismaClient()
const IMAGE_SHOW_PERIOD = 10 // seconds



export async function GET(req, { params }) {

  const eventId = params.eventid
  const session = await getServerSession(authOptions)
  const showPeriod = moment().add(IMAGE_SHOW_PERIOD, 'seconds').toDate()
  console.log(showPeriod, new Date())
  console.log("session", session)
  // get the last image that has not been shown yet
  let image = await prisma.image.findFirst(
    {
      where: { eventId: eventId, OR: [{ showTime: null }, { showTime: { gte: new Date() } }] },
      orderBy: { uploadTime: 'asc'}
    }
    )
    // update the showTime
    if(session && image != null && image.showTime == null) {
      await prisma.image.update({
        where: { id: image.id },
        data: { showTime: showPeriod }
      })
    }

    // if no image found, pick a random one
    if(session == null || image == null) {

    const images_count = await prisma.image.count({ where: { eventId: eventId } })

    if (images_count == 0) {
      return NextResponse.json({ image: null });
    }

    const random_count = _.random(0, images_count - 1)
    console.log("random pick", random_count)
    image = await prisma.image.findFirst({where: { eventId: eventId }, skip: random_count})

  }

  return NextResponse.json({ image: image });
}