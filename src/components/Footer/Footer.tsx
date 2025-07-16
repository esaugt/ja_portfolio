import Link from "next/link"
import { JoshepAlvarez } from "../Ui/JoshepAlvarez"

export const Footer = () => {
    return (
        <footer className="bg-background">
            <div className="container px-6 py-4 mx-auto text-base">

                {/* Contenedor principal horizontal */}
                <div className="flex items-center justify-between">

                    {/* Sección izquierda - Logo y descripción */}
                    <div className="flex flex-col items-center">
                        <Link href="/">
                            <JoshepAlvarez />
                        </Link>
                        <p className="text-[.6rem]">Fotógrafo Profesional</p>
                    </div>

                    {/* <div className="flex-shrink-0">
                        <button className="flex items-center justify-center px-2 py-2 text-sm tracking-wide capitalize transition-colors duration-300 transform border rounded-md dark:border-gray-400 dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                            <span className="mx-1">Ver más</span>
                        </button>
                    </div> */}

                    {/* Sección derecha - Copyright */}
                    <div className="flex items-center">
                        <p className="text-sm">© Copyright 2025. Todos los Derechos Reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
