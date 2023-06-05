
import { NextResponse } from 'next/server';

export  async function POST(req, res) {
    // Get data submitted in request's body.
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);



    // Found the name.
    // Sends a HTTP success code
    return NextResponse.json({ body: body });
}