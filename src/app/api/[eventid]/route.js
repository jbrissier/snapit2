import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request,{params}) {

    const eventId = params.eventid

  const images = await prisma.image.findMany({ where: {eventId:eventId, published: true }, select: {event: true, id: true, url: true}})

  return NextResponse.json({ images: images, eventid: request.nextUrl.searchParams, params });
}