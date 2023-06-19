"use server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { cookies, headers } from "next/headers";
const prisma = new PrismaClient()

export const getServerActionSession = () => {
    const req = {
        headers: Object.fromEntries(headers()),
        cookies: Object.fromEntries(
            cookies()
                .getAll()
                .map(c => [c.name, c.value]),
        ),
    } ;
    const res = {
        getHeader() {
            /* empty */
        },
        setCookie() {
            /* empty */
        },
        setHeader() {
            /* empty */
        },
    } ;
    return getServerSession(req, res ); // authConfig is your [...nextAuth] route config
}
export async  function deleteEvent(eventId) {
    console.log("delete event")
    const session = await getServerActionSession();
    if (!session) {
        console.log("not authorized")
        return redirect("/")
    }
    const prisma = new PrismaClient()
    await prisma.event.delete({ where: { id: eventId }, include: { Image: true }})
    console.log("delete")
    revalidatePath("/")

}