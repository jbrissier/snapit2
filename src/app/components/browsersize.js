"use client"

import { useEffect } from "react"

export default function BrowserSize(){

    const documentHeight = () => {
        console.log("documentHeight")
        const doc = document.documentElement
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
    }

    useEffect(() => {
        window.addEventListener("resize", documentHeight)
        documentHeight()

    }, [])

    return null
}