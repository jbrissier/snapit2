import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import moment from 'moment'
import _ from 'lodash'
const prisma = new PrismaClient()

const IMAGE_SHOW_PERIOD = 60 // seconds



export async function GET(request, { params }) {

  const eventId = params.eventid
  const showPeriod = moment().add(IMAGE_SHOW_PERIOD, 'seconds').toDate()
  console.log(showPeriod, new Date())
  // get the last image that has not been shown yet
  let image = await prisma.image.findFirst(
    {
      where: { eventId: eventId, OR: [{ showTime: null }, { showTime: { gte: new Date() } }] },
      orderBy: { uploadTime: 'asc'}
    }
    )
    // update the showTime
    if(image != null && image.showTime == null) {
      await prisma.image.update({
        where: { id: image.id },
        data: { showTime: showPeriod }
      })
    }

    // if no image found, pick a random one
    if(image == null) {

    const images_count = await prisma.image.count({ where: { eventId: eventId } })
    const random_count = _.random(0, images_count - 1)
    console.log("random pick", random_count)
    image = await prisma.image.findFirst({where: { eventId: eventId }, skip: random_count})

  }

  return NextResponse.json({ image: image });
}