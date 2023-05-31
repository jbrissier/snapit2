'use client';

import { useEffect, useState } from "react";





export function  ImageViewer({images, time=4000}) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
  
      const interval = setInterval(() => {
      
        setIndex((index)=>{

            if ((index +1) >= images.length) {
                return 0;
            }
            return index + 1;

        });
      }, time);
      
      return () => clearInterval(interval);
    
    }, []);


    const styleParams = {backgroundImage: `url(${images[index]})`, backgroundSize: "cover"}
  
  
    return <div className="w-screen h-screen" style={styleParams}>
  
    
    </div>;
  }