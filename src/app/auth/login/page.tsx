'use client';

import { useLayoutAdminContext } from "@/app/contexts/admin/AdminContext";
import { JoshepAlvarez } from "@/components/Ui/JoshepAlvarez";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SignIn() {

  const { isLoged } = useLayoutAdminContext()

  if (isLoged != false) (
    redirect('/')
  )

  return (
    <section className="m-8 flex gap-4 justify-center items-center">

      <div className="w-1/2 mt-24">

        <div className="text-center">
          <JoshepAlvarez size="text-[64px]" />
        </div>

        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2 text-base font-bold">
          <div className="mb-1 flex flex-col gap-6">
            <label htmlFor="email">Correo:</label>
            <input
              id="email"
              type="email"
              placeholder="name@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-white"
            />

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar Sesión
          </button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <span className="font-medium text-gray-900">
              <a href="#" className="hover:underline">Recuperar Contraseña</a>
            </span>
          </div>

          {/* <div className="space-y-4 mt-8">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Iniciar con Google</span>
            </button>
          </div> */}

          <div className="text-center text-gray-600 font-medium mt-4">
            ¿No tienes cuenta?
            <Link href="/auth/sign-up" className="text-gray-900 ml-1 hover:underline">
              Crear Cuenta
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
