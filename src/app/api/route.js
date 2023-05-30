import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const images = await prisma.image.findMany({where:{published: true}})

  return NextResponse.json({ images: images });
}