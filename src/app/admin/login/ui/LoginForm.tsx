"use client";

// import { useEffect } from 'react';
// import { useFormState, useFormStatus } from "react-dom";
import { useFormStatus } from "react-dom";

// import { authenticate } from "@/actions/auth/login"
// import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';
// import { useRouter } from 'next/navigation';

export const LoginForm = () => {


    // const router = useRouter();
    // const [state, dispatch] = useFormState(authenticate, undefined);

    // useEffect(() => {
    //     if (state === 'Success') {
    //         // redireccionar
    //         // router.replace('/');
    //         window.location.replace('/');
    //     }

    // }, [state]);



    return (
        // <form action={dispatch} className="flex flex-col">
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
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {/* {state === "CredentialsSignin" && (
                    <div className="flex flex-row mb-2">
                        <IoInformationOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">
                            Credenciales no son correctas
                        </p>
                    </div>
                )} */}
            </div>

            <LoginButton />


            {/* <Link href="/auth/new_account" className="btn-secondary text-center">
                Crear una nueva cuenta
            </Link> */}
        </form>
    );
};

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={clsx(
                "mt-6 w-full py-2 rounded-lg transition text-white",
                pending ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            )}
            disabled={pending}
        >
            Ingresar
        </button>
    );
}
