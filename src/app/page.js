import Image from 'next/image'

import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()
import EventListItem  from './components/eventitem'
import Well from './components/well';


export  default async function Home() {





  const events = await prisma.event.findMany({})

  return (
    <main className="bg-siblue w-full flex justify-center">



      <Well className='flex flex-col w-full md:w-1/2'>

          <h2 className="text-5xl mb-3 text-black">Events</h2>
          <hr className='my-5 bg-slate-600'/>
          <ul className="flex justify-stretch flex-col gap-3">
          {events.map((event) =>
            (
              <EventListItem event={event} />
              )
              )}

          </ul>
        <Link className="bg-amber-600 my-5 p-3 rounded shadow-xl text-center font-bold" href="event/create">Event erstellen</Link>

        </Well>
      </main>
  )
}
