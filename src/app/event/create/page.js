
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

import Well from '@/app/components/well'
import Button from '@/app/components/button'


export default async function CreateEvent({ params }) {

    async function createEvent(data) {
        'use server'
        const session = await getServerSession();
        if (!session) {
            console.log("not authorized")
            return redirect("/")
        }

        const prisma = new PrismaClient()
        const event_name = data.get("name")

        if (event_name == "") {
            session.data["error"] = "foo"
            return

        }


        const event = await prisma.event.create({data: {name: event_name, description: event_name}})
        redirect(`/${event.id}`)
    }


    const session = await getServerSession();

    const error = session.data


    return (
        <Well className='md:w-1/2 w-full'>
            {error && <div className="bg-red-500 text-white p-3 rounded shadow-xl">{error}</div>}
            <pre>{JSON.stringify(error, null, " ")}</pre>
            <form action={ createEvent} className='flex flex-col gap-3 mt-5'>


                    <h2 className="text-2xl">Neues Event erstellen</h2>
                    <hr/>
                    <input type="text" name="name"  className='p-4 border shadow' placeholder='Name'/>
                    <Button>
                    <input type="submit" value="Event erstellen" className="" />
                    </Button>
            </form>
        </Well>


    )


}