'use server'

const prisma = new PrismaClient()
import _  from 'lodash'
import { PrismaClient } from '@prisma/client'
import fs from 'fs';
import path from 'path'
import crypto from 'crypto'

import { useSearchParams } from 'next/navigation'


export async  function handleSubmit(data) {
    console.log('submitting form',  data, arguments)


    const eventid = data.get("eventid")

    const im = data.get('image')


    const ext = path.extname(im.name) // returns '.png'
    const uuid = crypto.randomUUID()
    // save image to disk

    const imageData = await im.arrayBuffer()
    const uploadPath = `./public/${eventid}/${uuid}${ext}`

    await fs.mkdirSync(`./public/${eventid}`, { recursive: true })
    fs.writeFileSync(uploadPath, Buffer.from(imageData))

    console.log(im, im.name)

    // save image to db
    const dbImage = await prisma.image.create({data:{
        url: `/${eventid}/${uuid}${ext}`,
        eventId: _.toString(eventid)
    }})




    const image = await prisma.image.findFirst({where: { id: _.toInteger(data.get("id")) }})
    return {image:dbImage}
}


export async function submitImage(data) {
    console.log('submitting image', data)
}