import Image from 'next/image'

import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()
import EventListItem  from './components/eventitem'


export  default async function Home() {





  const events = await prisma.event.findMany({})

  return (
    <main className="bg-siblue ">




        <div className='h-1/2 flex flex-col justify-between'>
          <h2 className="text-5xl mb-3 text-black">Events</h2>
          <ul className="flex ">
          {events.map((event) =>
            (
              <EventListItem event={event} />
            )
          )}

          </ul>
        <Link className="bg-amber-600 my-5 p-3 rounded shadow-xl text-center font-bold" href="event/create">Event erstellen</Link>

        </div>
      </main>
  )
}
