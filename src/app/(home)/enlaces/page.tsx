
import { JoshepAlvarez } from '@/components/Ui/JoshepAlvarez';
import Link from 'next/link';


export default function Home() {

  return (
    <>

      <div className='flex items-center justify-center min-h-screen dark:bg-slate-800'>
        <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-8">

          <button type='button' className='break-inside bg-[#D20939] rounded-xl p-4 mb-4 w-full'>
            <div className='flex-col justify-center space-x-1'>
              <svg width='56' height='56' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d="M3 10H4C4.93188 10 5.39782 10 5.76537 10.1522C6.25542 10.3552 6.64477 10.7446 6.84776 11.2346C7 11.6022 7 12.0681 7 13C7 13.9319 7 14.3978 6.84776 14.7654C6.64477 15.2554 6.25542 15.6448 5.76537 15.8478C5.39782 16 4.93188 16 4 16H3M19 6V5C19 3.89543 18.1046 3 17 3H15C13.8954 3 13 3.89543 13 5V6M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20ZM17 13C17 14.6569 15.6569 16 14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13Z"
                  stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill='white' />
              </svg>
              <div className='text-base font-bold text-white'>
                <JoshepAlvarez />
              </div>
              <br />
              <span className='text-base font-normal text-white'>Fotógrafo</span>
            </div>
          </button>


          <Link type='button' href={'https://www.tiktok.com/@joshepalvarez?is_from_webapp=1&sender_device=pc'} target='_blank'
            className='flex break-inside border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white rounded-xl'>
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-[24px] h-[24px] text-white"
                  fill="currentColor"
                >
                  <g fillRule="nonzero">
                    <g transform="scale(5.12,5.12)">
                      <path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z" />
                    </g>
                  </g>
                </svg>

                <span className='font-medium mb-[-3px]'>TikTok</span>
              </div>
            </div>
          </Link>


          <Link type='button' href={'https://www.instagram.com/soyjoshep_alvarez/'} target='_blank'
            className='flex break-inside border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white rounded-xl'>
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-[24px] h-[24px] text-white"
                  fill="currentColor"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>

                <span className='font-medium mb-[-2px]'>Instagram</span>
              </div>
            </div>
          </Link>


          <Link type='button' href={'https://www.facebook.com/JoshepAlvarez26'} target='_blank'
            className='flex break-inside border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white rounded-xl'>
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path fill='currentColor'
                    d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z' />
                </svg>
                <span className='font-medium mb-[-2px]'>Facebook</span>
              </div>
            </div>
          </Link>


          {/* <button type='button'
            className='flex break-inside bg-[#2ea44f] text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full'>
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path fill='currentColor'
                    d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
                <span className='font-medium'>Continue with Github</span>
              </div>
            </div>
          </button> */}
        </div>
      </div>


    </>
  );
}


