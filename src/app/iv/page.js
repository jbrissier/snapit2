import {ImageViewer} from './imageviewer'


export default function ImageViewerPage(){

    //TODO: load images

    const images = [
      "https://picsum.photos/200",
      "https://picsum.photos/400",
      "https://picsum.photos/600",
      "https://picsum.photos/800"]
    
    
    

  return <div className="">
      <ImageViewer images={images}/>
    </div>





}

