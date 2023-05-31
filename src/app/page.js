import Image from 'next/image'
import Link from 'next/link';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export  default async function Home() {


  const events = await prisma.event.findMany({})

  return (
    <main>

      <h1 className="text-3xl mb-3"> SnapIT 2.0</h1>



        <div>
          <h2 className="text-2xl mb-3">Events</h2>
          <ul class="list-disc">
          {events.map((event) =>
            (<li>
            <Link href={`/${event.id}`}>{event.name}</Link></li>)
          )}
          </ul>
        </div>
      </main>
  )
}
