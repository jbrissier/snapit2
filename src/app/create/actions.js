'use server'

const prisma = new PrismaClient()
import _ from 'lodash'
import { PrismaClient } from '@prisma/client'

export async  function handleSubmit(data) {
    console.log('submitting form', data.get("id"))
    const image = await prisma.image.findFirst({where: { id: _.toInteger(data.get("id")) }})
    return {image}
}
