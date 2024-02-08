'use client'
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Listado', href: '/listado' },
    { name: 'Acerca de Mi', href: '/aboutme' }
]

export const Header = () => {
    const pathname = usePathname()
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
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {links.map((link) => {
                        return (
                            <Link key={link.name} href={link.href} className={`mr-5 hover:text-gray-900 ${pathname === link.href ? 'text-blue-700 border-b-2 border-blue-500': ''} `}>{link.name}</Link>
                        )
                    })}
                </nav>
                <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}