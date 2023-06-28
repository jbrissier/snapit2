
'use client'

import { handleSubmit, submitImage } from '../[eventid]/up/actions'
import { useTransition, useState, useRef } from 'react';





export default function PageWithoutJSbasedForm({ params }) {

    const [data, setData] = useState({})
    const [state, setState] = useState('upload')
    const timer = useRef()
    const upload = useRef()
    const form = useRef()

    async function uploadImage(data) {

        setState('uploaded')
        const upload = await handleSubmit(data)
        setData(upload)

        if (timer.current) clearTimeout(timer)

        timer.current = setTimeout(() => {
            setData({})
            setState('upload')
        }, 2000);



    }

    function uploadfile(){
        upload.current.click()
    }
    function uploadForm(){
        console.log("click")
        form.current.click()

    }

    var img = "/uploadcloud.svg"
    switch (state) {
        case 'uploaded':
           img = "/uploadcloud_done.svg"
           break;



    }



    return (
        <div>
            <form action={uploadImage} method="post" >
                <img src={img} className="w-3/4 mx-auto pointer-cursor" alt="logo" onClick={() => uploadfile()} />

                <input ref={upload} type="file" accept='image/*' name="image" className="border-red-100 border hidden" onChange={()=>uploadForm()} />
                <input type="hidden" name="eventid" value={params.eventid} />
                <button type="submit" className="bg-orange-500 border hidden" ref={form}>Bild hochladen</button>

            </form>
        </div>
    );
}