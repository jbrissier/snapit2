import {ImageViewer} from '../../components/imageviewer'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
export default async function ImageViewerPage({params}){

    //TODO: load images



  return <div className="">
      <ImageViewer eventId={params.eventid}/>
    </div>





}

