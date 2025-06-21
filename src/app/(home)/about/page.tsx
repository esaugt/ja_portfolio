"use client";
import { useLayoutContext } from '@/app/contexts/home/HomeContext';
import { ReactLenis } from 'lenis/react'
import Image from 'next/image';
import { useEffect } from 'react';


export default function About() {

    const { setForceScrolled } = useLayoutContext()

    useEffect(() => {
        setForceScrolled(true)
    }, [setForceScrolled])

    return (
        <div className='h-full'>
            <ReactLenis root />
            <section className='w-2xl'>
                <div className="py-24 bg-white">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <Image src="/pictures/jsohep_1.png" alt="image" loading="lazy" fill />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Joshep Álvarez</h2>
                                <p className="mt-6 text-gray-600">Hola, soy Joshep Álvarez, apasionado por la fotografía y estudiante producción multimedia.</p>
                                <p className="mt-4 text-gray-600">Es fascinante el arte que podemos expresar mediante la fotografía, el video y la música.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-2xl'>
                <div className="py-16 bg-white">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">


                    </div>
                </div>
            </section>
        </div>
    )
}
