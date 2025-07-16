'use client';

import { useEffect } from "react";
import { useLayoutContext } from "../../../context/home/HomeContext";
import { useAppContext } from "@/context/app_context/AppContext";

export default function ContacPage() {
    const { setForceScrolled } = useLayoutContext()

    useEffect(() => {
        setForceScrolled(true)
    }, [setForceScrolled])

    const {isLoggedIn}=useAppContext()
    console.log("Está Logeado:",isLoggedIn)
    return (
        <>
            <div className="flex mt-32 justify-start">
                <div className="mx-auto w-full max-w-lg mt-16">
                    <h1 className="text-4xl font-medium">Galegría</h1>

                </div>
            </div>
        </>
    )
}
