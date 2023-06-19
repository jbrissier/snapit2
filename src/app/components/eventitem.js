"use client";
import Link from 'next/link';
import { deleteEvent } from '../actions.js';

import { useTransition } from 'react'



export default  function Event({ event }) {

    const [isPending, startTransition] = useTransition()
    return <div><Link href={`/${event.id}`}>{event.name}</Link> <button className='bg-orange-200 p-3 rounded shadow' onClick={() => startTransition(() => deleteEvent(event.id))}>Löschen</button> </div>

}
