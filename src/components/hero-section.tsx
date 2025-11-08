import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroHeader from "@/components/header"
import { cn } from '@/lib/utils'
import LogoCloud from "@/components/logo-cloud"
import FeaturesSection from "@/components/features-11"
import HowItWorksSeven from "@/components/how-it-works-7"
import IntegrationsSection from "@/components/integrations-9"
import Footer from "@/components/footer"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main
                role="main"
                className="overflow-x-hidden">
                <div className="mx-auto max-w-6xl border-x">
                    <section id="home">
                        <div className="relative border-b px-3 pb-10 pt-24 md:pb-20 md:pt-36">
                            <div>
                                <div className="relative mx-auto w-fit bg-gray-950/5 p-2">
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1 top-1 size-[3px] rounded-full bg-gray-950/20"></div>
                                    <div
                                        aria-hidden="true"
                                        className="absolute right-1 top-1 size-[3px] rounded-full bg-gray-950/20"></div>
                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-1 left-1 size-[3px] rounded-full bg-gray-950/20"></div>
                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-1 right-1 size-[3px] rounded-full bg-gray-950/20"></div>
                                    <div className="relative flex h-fit items-center gap-2 rounded-full bg-white px-3 py-1 shadow">
                                        <span className="text-title text-sm">Raising Pre-Seed funding</span>
                                        <span className="block h-3 w-px bg-gray-200"></span>
                                        <Link
                                            href="#"
                                            className="text-primary text-sm">
                                            Read
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
                                <h1 className="text-foreground text-balance text-4xl font-medium sm:text-5xl lg:text-6xl">GTM Stack for One Person Unicorns</h1>
                                <p className="text-muted-foreground mx-auto mb-8 mt-4 max-w-xl text-balance text-lg">AI agents handle your entire marketing stack - from strategy and content to distribution and optimization.</p>
                                <div className="flex items-center justify-center gap-4">
                                    <Button asChild>
                                        <Link href="#">Get Started Free</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline">
                                        <Link href="#">See it in action</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="border-b">
                            <div className="relative px-4 sm:px-6 md:px-12">
                                <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
                                <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
                                <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
                                <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
                                <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
                                <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
                                <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
                                <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
                                <div className="bg-linear-to-b to-foreground/[0.025] relative border-x">
                                    <div className="absolute inset-0">
                                    <Image
                                        className="size-full"
                                        src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171585/oxy-main_aimf7b.png"
                                        alt="Zavata AI Marketing Platform"
                                        width={1280}
                                        height={720}
                                        sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                    />
                                </div>
                                <Image
                                    className="mix-blend-multiply"
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/oxy-nav_qqwzss.png"
                                    alt="Zavata Dashboard"
                                    width={1280}
                                    height={720}
                                    sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="border-b">
                        <LogoCloud />
                    </div>
                    <div className="border-b">
                        <FeaturesSection />
                    </div>
                    <div className="border-b">
                        <HowItWorksSeven />
                    </div>
                    <div className="border-b">
                        <IntegrationsSection />
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}

const SquareDecorator = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className={cn('bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1', className)}
        />
    )
}