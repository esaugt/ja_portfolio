"use client";
import { ReactLenis } from 'lenis/react'
import Image from 'next/image';


export default function page() {


    return (
        <div>
            <ReactLenis root />
            <section className='w-2xl'>
                <div className="py-16 bg-white">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <Image src="/pictures/jsohep_1.png" alt="image" loading="lazy" fill />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
