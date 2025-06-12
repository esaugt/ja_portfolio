'use client';

import { Navbar } from '@/components/Navbar/Navbar';
import { JoshepAlvarez } from '@/components/Ui/JoshepAlvarez';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Navbar sticky */}
      <Navbar isScrolled={isScrolled} />


      {/* Primera sección: Nombre centrado */}
      <section className="h-screen flex items-center justify-center">
        <JoshepAlvarez size='text-6xl' fontType='font-bold' />
      </section>

      {/* Sección de contenido extra */}
      <section className="h-screen bg-gray-100 p-8">
        <p className="text-xl">Aquí empieza el contenido después del scroll...</p>
      </section>
    </>
  );
}


