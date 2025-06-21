'use client';

import { useEffect } from "react";
import { useLayoutContext } from "../../contexts/home/HomeContext";

export default function ContacPage() {
    const { setForceScrolled } = useLayoutContext()

    useEffect(() => {
        setForceScrolled(true)
    }, [setForceScrolled])

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
