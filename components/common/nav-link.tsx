'use client';
import Link from "next/link"
import {cn} from '@/lib/utils'
import { usePathname } from "next/navigation";



export default function NavLink({
    href, 
    children,
    className
}: {
    href: string,
     children: React.ReactNode,
     className?: string
    }) {
        const pathName=usePathname()
        const isActive=pathName===href|| pathName.startsWith(href)
    return (
        <Link href={href} className={
            cn('transition-colors duration-200  hover:text-rose-900 text-sm', 
            className,
            isActive && 'text-rose-500'
            )}>
            {children}</Link>
    )
}