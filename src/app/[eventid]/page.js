import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import Button  from '../components/button.js';
import { ShareLink, ShowImages } from '../components/Link.js';
const prisma = new PrismaClient()

import QRCode from "react-qr-code";
import UploadImage from '../components/upload.js';
export default async function ImageViewerPage({ params }) {

    // show event informations

    const event = await prisma.event.findUnique({ where: { id: params.eventid } })

    if (!event) {
        return <div>Event not found</div>
    }


    return <div className="flex md:justify-start justify-center w-full h-full">

    <div className="flex flex-col w-full lg:w-1/2 justify-between  h-full gap-4 p-4">

        <div className='mt-10'>
            <img src="/logo.png" className="w-1/2 mx-auto" alt="logo" />
        </div>

        <UploadImage params={params}></UploadImage>
        <div class="flex flex-col gap-3">
            <h1 className='text-center text-3xl font-bold my-3'>{event.name}</h1>
           <ShareLink href={`/${event.id}/iv`}></ShareLink>
            <ShowImages href={`/${event.id}/iv`}></ShowImages>
        </div>
    </div>

    </div>





}

