'use client';

import { useEffect, useState } from "react";





export function  ImageViewer({eventId, time=4000}) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {

      if(eventId == null) return;


      const interval = setInterval(() => {
        fetch(`/api/${eventId}/`)
          .then(response => response.json())
          .then(data => setImageUrl(data.image.url));

      }, time);

      return () => clearInterval(interval);

    }, []);


    const styleParams = {backgroundImage: imageUrl?`url(${imageUrl})`:'', backgroundSize: "cover"}


    return <div className="w-screen h-screen" style={styleParams}>
      {setImageUrl}
    </div>;
  }