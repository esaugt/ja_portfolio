"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { JoshepAlvarez } from "../Ui/JoshepAlvarez";

interface Props {
    isScrolled: boolean
}
export const Navbar = ({ isScrolled }: Props) => {
    const [open, setOpen] = useState(true); // Abierto por defecto en desktop
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDesktopMenu = () => setOpen((prev) => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);


    useEffect(() => {
        if (!isMobileMenuOpen) return

        const handleScroll = () => {
            if (window.scrollY > 60) {
                setTimeout(() => {
                    setIsMobileMenuOpen(false)
                }, 250) // 150ms delay after scroll past threshold
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isMobileMenuOpen])


    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 bg-background shadow-sm 
                    ${isScrolled ? 'h-16' : 'h-0'} overflow-hidden`}
            >
                <div className="flex items-center justify-between h-full px-6">
                    {/* Sección izquierda: Logo */}
                    <div className="flex items-center justify-start w-1/3">
                        <Link href="/">
                            <JoshepAlvarez size="text-xl" />
                        </Link>
                    </div>

                    {/* Sección centro: Menú Desktop */}
                    <div className="hidden md:flex items-center justify-center w-1/3">
                        <nav
                            className={`flex gap-6 transition-all duration-400 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <Link href="/about/">
                                <span className="px-4 py-2 hover:bg-gray-100 text-base rounded cursor-pointer">
                                    Sobre Mi
                                </span>
                            </Link>
                            <Link href="/contact/">
                                <span className="px-4 py-2 hover:bg-gray-100 text-base rounded cursor-pointer">
                                    Contacto
                                </span>
                            </Link>
                            <Link href="/links/">
                                <span className="px-4 py-2 hover:bg-gray-100 text-base rounded cursor-pointer bg-background">
                                    Enlaces
                                </span>
                            </Link>
                        </nav>
                    </div>

                    {/* Sección derecha: botón hamburguesa y botón desktop */}
                    <div className="flex items-center justify-end gap-4 w-1/3">
                        {/* Botón hamburguesa */}
                        <button
                            onClick={toggleMobileMenu}
                            className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden group"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col justify-center items-start w-full h-full">
                                <span
                                    className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out 
                                        ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}
                                />
                                <span
                                    className={`block h-0.5 w-6 bg-black my-0.5 transition-all duration-300 ease-in-out 
                                        ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <span
                                    className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out 
                                        ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'}`}
                                />
                            </div>
                        </button>

                        {/* Botón desktop */}
                        <button
                            onClick={toggleDesktopMenu}
                            className="hidden md:inline-block text-sm text-black font-medium px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                        >
                            {open ? 'x' : 'Mostrar'}
                        </button>
                    </div>
                </div>
            </header>



            {/* Mobile Dropdown Menu */}
            <nav
                className={`
                        md:hidden fixed top-16 left-0 w-full bg-white text-black border-t border-b z-40 overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${isScrolled ? 'visible' : 'invisible'}
                        ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
            >
                <ul className="flex flex-col px-6 py-4 shadow-md transition-opacity duration-300">
                    <li>
                        <Link href="/about/">
                            <span className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                Sobre Mi
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact/">
                            <span className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                Contacto
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/links/">
                            <span className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                Enlaces
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

