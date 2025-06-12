"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
    isScrolled: boolean
}
export const Navbar = ({ isScrolled }: Props) => {
    const [open, setOpen] = useState(true); // Abierto por defecto en desktop
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDesktopMenu = () => setOpen((prev) => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 bg-white shadow-sm ${isScrolled ? 'h-16' : 'h-0'
                    } overflow-hidden`}
            >
                <div className="flex items-center justify-between h-full px-6">
                    <h1 className="text-xl font-semibold">Joshep Álvarez</h1>



                    {/* Mobile Menu Button (hamburguesa) */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-sm font-medium px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                        {isMobileMenuOpen ? 'Cerrar' : 'Menú'}
                    </button>

                    {/* Desktop Menu - Horizontal */}
                    <nav
                        className={`hidden md:flex gap-6 transition-all duration-400 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                    >
                        <Link href="/aboutme/">
                            <span className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                Sobre Mi
                            </span>
                        </Link>
                        <Link href="/contact/">
                            <span className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                Contacto
                            </span>
                        </Link>
                    </nav>
                    {/* Desktop Toggle Button (hidden in mobile) */}
                    <button
                        onClick={toggleDesktopMenu}
                        className="hidden md:inline-block text-sm font-medium px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                        {open ? 'x' : 'Mostrar'}
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && isScrolled && (
                <nav className="md:hidden fixed top-16 left-0 w-full bg-white border-t border-b z-40">
                    <ul className="flex flex-col px-6 py-4 shadow-md">
                        <li>
                            <Link href="/aboutme/">
                                <span className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                    Sobre Mi
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto/">
                                <span className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                    Contacto
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

