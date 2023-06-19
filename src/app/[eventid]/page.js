import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import Button  from '../components/button.js';
const prisma = new PrismaClient()

import QRCode from "react-qr-code";
export default async function ImageViewerPage({ params }) {

    // show event informations

    const event = await prisma.event.findUnique({ where: { id: params.eventid } })

    if (!event) {
        return <div>Event not found</div>
    }


    return <div className="flex flex-col bg-white  shadow-2xl p-4 rounded w-full lg:w-1/3 ">
        <div className="text-black text-2xl mb-4">
            {event.name} | ID: {event.id}

        </div>

        <div className="flex justify-between gap-4 items-start">

        <div className="flex flex-col w-full">

        <Link href={`/${event.id}/iv`}>
            <Button className="my-2">show Images</Button>
        </Link>
        <Link href={`/${event.id}/up`}>
            <Button>upload Images</Button>
        </Link>
        </div>
        <div>

        <QRCode value={`https://snapit2.vercel.app/${event.id}`} bg/>
        </div>
        </div>
    </div>





}

