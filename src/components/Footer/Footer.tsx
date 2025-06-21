import { JoshepAlvarez } from "../Ui/JoshepAlvarez"

export const Footer = () => {
    return ( 
        <footer className="bg-background">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="#">
                        <JoshepAlvarez size="text-3xl"/>
                    </a>

                    <p className="max-w-md mx-auto mt-1 text-base text-xs">Fotógrafo Profesional</p>

                    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                        <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                            <span className="mx-1">Ver más</span>
                        </button>
                    </div>
                </div>

                <hr className="mt-2" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-base">© Copyright 2025. Todos los Derechos Reservados.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">

                        <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                        <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
