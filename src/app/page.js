import Image from 'next/image'

import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()
import EventListItem  from './components/eventitem'


export  default async function Home() {





  const events = await prisma.event.findMany({})

  return (
    <main>

      <h1 className="text-3xl mb-3"> SnapIT 2.0</h1>



        <div>
          <h2 className="text-2xl mb-3">Events</h2>
          <ul className="list-disc">
          {events.map((event) =>
            (<li>
              <EventListItem event={event} />

            </li>)
          )}

          </ul>
        <div><Link href="event/create">create Event</Link></div>

        </div>
      </main>
  )
}
