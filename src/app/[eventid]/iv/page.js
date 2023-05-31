import {ImageViewer} from '../../components/imageviewer'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
export default async function ImageViewerPage(){

    //TODO: load images

  const images = await prisma.image.findMany()

  const imageUrls = images.map((image)=>image.url)

  return <div className="">
      <ImageViewer images={imageUrls}/>
    </div>





}

