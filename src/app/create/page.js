'use client'

import { handleSubmit } from './actions'
import { useTransition, useState } from 'react';

export default function PageWithoutJSbasedForm({}) {

    const [data, setData] = useState({})
    let [isPending, startTransition] = useTransition();
    async function foo(data) {

        // startTransition(() => {
        //     handleSubmit(data)
        // })


        const foo = await handleSubmit(data)
        console.log('component', foo)
        setData(foo)
    }

    return (

        <form action={foo} method="post">
            <pre>{JSON.stringify(data, null, " ")}</pre>
            <label htmlFor="first">First Name</label>

            <label htmlFor="last">Image ID</label>
            <input type="text" id="id" name="id" required className="border p-4" />

            <button type="submit" className="bg-orange-500 border">Submit</button>
        </form>
    );
}