'use client'

import { handleSubmit, submitImage } from './actions'
import { useTransition, useState, useRef } from 'react';

export default function PageWithoutJSbasedForm({params}) {

    const [data, setData] = useState({})
    const timer = useRef()
    async function uploadImage(data) {

        const upload = await handleSubmit(data)
        setData(upload)

        if(timer.current) clearTimeout(timer)

        timer.current = setTimeout(() => {
            setData({})
        }, 2000);


    }

    return (
        <div>
            <div>

            {data.image && <div class="text-2xl"> Dein Bild wird gleich angezeit</div>}
            </div>
        <form action={uploadImage} method="post">
            <pre>{JSON.stringify(params, null, " ")}</pre>
            <input type="file" accept='image/*' name="image" className="border-red-100 border" formAction={submitImage} />
            <input type="hidden" name="eventid" value={params.eventid} />
            <button type="submit" className="bg-orange-500 border">Bild hochladen</button>
        </form>
        </div>
    );
}