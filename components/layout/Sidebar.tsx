"use client"
import { Menu } from "@/constants/menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Sidebar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Mobile menu button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-primary text-black hover:bg-opacity-90 transition-all"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <section className={`
                fixed md:relative
                h-screen
                bg-foreground
                flex flex-col justify-between
                transition-all duration-300 ease-in-out
                z-40
                
                w-full sm:w-80 md:w-64
                
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                md:translate-x-0
                md:static
                md:ml-4
            `}>
                <div>
                    <h1 className="bg-primary text-black text-xl sm:text-2xl font-bold px-4 py-2 text-center rounded-lg mt-4 mx-4 md:mx-auto md:w-56">
                        ECHO
                    </h1>
                    <div className="mt-8 px-4">
                        <ul className="space-y-2">
                            {
                                Menu.map((item) => (
                                    <li key={item.path} className="w-full sm:w-72 md:w-56">
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`
                                                block
                                                bg-slate-700/20
                                                font-bold
                                                cursor-pointer
                                                text-white/75
                                                px-4 py-2
                                                rounded
                                                text-sm sm:text-base
                                                md:mx-auto
                                                hover:text-white/90
                                                transition-colors
                                                ${pathname === item.path ? "active" : ""}
                                            `}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* bottom  */}
                <div className="mb-5 cursor-pointer px-4">
                    <hr className="text-white/50 md:w-56 md:mx-auto mt-auto" />
                    <div className="flex flex-row gap-3 sm:gap-4 items-center mt-2">
                        <div className="shrink-0">
                            <span className="bg-primary rounded-full text-black p-2 inline-block text-xs sm:text-sm">JM</span>
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-white text-base sm:text-lg md:text-xl truncate">Jean M.</h2>
                            <p className="text-white/50 text-xs sm:text-sm truncate">Menusier</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar