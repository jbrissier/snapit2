"use client";
import Link from 'next/link';
import { deleteEvent } from '../actions.js';

import { useTransition } from 'react'




export default function Event({ event }) {

    const [isPending, startTransition] = useTransition()
    return <div className='bg-white p-3 rounded-md w-full flex justify-between items-center'>
        <Link className='text-black font-bold mr-4' href={`/${event.id}`}>{event.name}</Link>
        <button className='bg-amber-600  p-3 rounded shadow-xl text-center font-bold' onClick={() => startTransition(() => deleteEvent(event.id))}>
            <img src="delete-bin-7-line.svg" className="w-4 h-4 text-black"></img>
        </button> </div>

}
