'use client';
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ReactElement, ReactNode } from "react";
import { LayoutProvider, useLayoutContext } from "../contexts/home/HomeContext";

type Props = {
    children: ReactElement
}



export default function HomeLayout({ children }: Props) {
    return (
        <LayoutProvider>
            <LayoutContent>{children}</LayoutContent>
        </LayoutProvider>
    )
}

function LayoutContent({ children }: { children: ReactNode }) {
    const { isScrolled } = useLayoutContext()

    return (
        <main className="min-h-screen">
            <Navbar isScrolled={isScrolled} />
            {children}
            <Footer />
        </main>
    )
}