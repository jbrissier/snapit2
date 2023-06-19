
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next"
var newEvent = {}

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
        const event = await prisma.event.create({data: {name: event_name, description: event_name}})
        redirect(`/${event.id}`)
    }


    return (
        <form action={ createEvent} className='flex flex-col gap-3 mt-5'>


                <h2 className="text-2x">Neues Event erstellen</h2>
                <input type="text" name="name" className='p-4 border shadow' />
                <input type="submit" value="Event erstellen" className="bg-orange-500 border" />
        </form>


    )


}