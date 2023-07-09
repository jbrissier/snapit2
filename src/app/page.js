import Image from 'next/image'

import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"
const prisma = new PrismaClient()
import EventListItem  from './components/eventitem'
import Well from './components/well';
import { SignIn, SignOut } from "./components/actions"

export  default async function Home() {



  const session = await getServerSession(authOptions)

  const events = await prisma.event.findMany({})

  if (session === null) {
    return <main className='bg-white text-black p-10 rounded-lg'><SignIn></SignIn></main>

  }


  return (
    <main className="w-full flex justify-center">
      <div className="absolute top-5 right-5">

          <SignOut></SignOut>
      </div>

      <Well className='flex mt-20 md:mt-0 m-5 md:m-0 flex-col w-full md:w-1/2'>






          <h2 className="text-5xl mb-3 text-black">Events</h2>
          <hr className='my-5 bg-slate-600'/>
          <ul className="flex justify-stretch flex-col gap-3">
          {events.map((event, ix) =>
            (
              <EventListItem key={ix} event={event} />
              )
              )}

          </ul>
        <Link className="bg-amber-600 my-5 rounded shadow-xl text-center font-bold" href="event/create">Event erstellen</Link>

        </Well>
      </main>
  )
}
