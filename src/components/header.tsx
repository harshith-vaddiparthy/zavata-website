'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import React from 'react'
import { cn } from '@/lib/utils'

export default function HeaderOne() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            role="banner"
            {...(isScrolled && { 'data-scrolled': true })}
            className="fixed inset-x-0 top-0 z-50">
            <div className={cn('border-foregroud/5 absolute inset-x-0 top-0 z-50 border-b transition-all duration-300', 'in-data-scrolled:border-b in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur')}>
                <div className="mx-auto max-w-6xl border-x px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-center py-4 lg:py-5">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}