"use client"
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsBugFill } from 'react-icons/bs'

const NavBar = () => {

    const currentPath = usePathname();

    const links = [
        {
            id: 1,
            label: "Dashboard",
            href: "/"
        },
        {
            id: 2,
            label: "Issues",
            href: "/issues"
        }
    ]
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><BsBugFill /></Link>
            <ul className='flex space-x-6'>
                {links.map((link, i) =>
                    <li>
                        <Link
                            key={i}
                            className={classNames({
                                'text-zinc-900': link.href === currentPath,
                                'text-zinc-500': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })}
                            href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar