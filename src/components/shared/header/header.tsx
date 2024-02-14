'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Listado', href: '/listado' },
    { name: 'Acerca de Mi', href: '/about-me' }
]

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const pathname = usePathname();

    return(
        <header className="text-gray-700 body-font border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
                    <Image
                        src="/logo.webp"
                        alt="Grupo Social Logo"
                        width={180}
                        height={37}
                    />
                </a>
                <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    {links.map((link) => {
                        return (
                            <Link key={link.name} href={link.href} className={`mr-5 hover:text-gray-900 ${pathname === link.href ? 'text-blue-700 border-b-2 border-blue-500': ''} `}>{link.name}</Link>
                        )
                    })}
                </nav>
                <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 md:hidden" onClick={toggleMenu}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className={`md:hidden absolute top-0 right-0 bg-white w-full mt-16 z-20 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="container mx-auto px-4">
                        <nav className="flex flex-col w-full">
                            {links.map((link) => {
                                return (
                                    <Link key={link.name} href={link.href} className={`py-2 text-gray-700 hover:text-gray-900 ${pathname === link.href ? 'text-blue-700': ''} `}>{link.name}</Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
                <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Inicia Sesión
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}