
import { JoshepAlvarez } from '@/components/Ui/JoshepAlvarez';
import Image from 'next/image';

export default function Home() {

  return (
    <>


      {/* Primera sección: Nombre centrado */}



      <section className="relative h-screen flex items-center justify-center">
        <Image src={'/pictures/joshep_2.png'} alt='Fondo de Landing joshep ALvarez' layout='fill' objectFit='cover' className='z-0' />
        <div className='z-10 m-2'>

          <JoshepAlvarez size='text-5xl' textColor='text-white' />
        </div>
      </section>



      {/* Sección de contenido extra */}
      <section className="relative h-screen bg-gray-100 p-8">

        <div className="carousel sm:w-full lg:w-1/2 aspect-[3/4]">
          <div id="slide1" className="carousel-item relative w-full">
            <Image alt="Joshep Carrusel 1" src="/pictures/joshep_1.png"
              className="object-cover" fill />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image alt="Joshep Carrusel 2"
              src="/pictures/joshep_2.png"
              className="object-cover" fill />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image alt="Joshep Carrusel 3" src="/pictures/joshep_3.png"
              className="object-cover" fill />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image alt="Joshep Carrusel 4" src="/pictures/joshep_4.png"
              className="object-cover" fill />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}


