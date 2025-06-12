"use client";
import { ReactLenis, useLenis } from 'lenis/react'


export default function page() {

    const lenis = useLenis((lenis) => {
        console.log(lenis)
    })

    return (
        <div>
            <ReactLenis root />
            <section className='w-2xl bg-amber-400'>

            </section>
        </div>
    )
}
