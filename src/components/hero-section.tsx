import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroHeader from "@/components/header"
import { cn } from '@/lib/utils'
// import LogoCloud from "@/components/logo-cloud"
import FeaturesSection from "@/components/features-11"
import HowItWorksSeven from "@/components/how-it-works-7"
import Footer from "@/components/footer"
import AIDashboardPreview from "@/components/ai-dashboard-preview"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main
                role="main"
                className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/3 via-blue-400/1 to-transparent pointer-events-none" />
                <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/6 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -z-10 top-[800px] right-0 w-[600px] h-[600px] bg-blue-300/3 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -z-10 top-[1500px] left-0 w-[700px] h-[700px] bg-blue-400/4 rounded-full blur-3xl pointer-events-none" />
                <div className="mx-auto max-w-6xl border-x relative">
                    <section id="home">
                        <div className="relative border-b px-4 sm:px-6 pb-10 pt-24 md:pb-20 md:pt-36">
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
                                            href="mailto:hi@harshith.io?subject=Interest%20in%20Zavata%20Pre-seed&body=Hi%20Harshith%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20Zavata's%20pre-seed%20round.%20I'd%20love%20to%20discuss%20the%20opportunity.%0A%0ABest%20regards"
                                            className="text-primary text-sm inline-flex items-center gap-1 hover:underline transition-all group">
                                            Email
                                            <svg className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
                                <h1 className="text-foreground text-balance text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl px-2">GTM Stack for<br />One Person Unicorns</h1>
                                <p className="text-muted-foreground mx-auto mb-8 mt-4 max-w-xl text-balance text-base sm:text-lg px-4">AI agents handle your entire marketing stack - from strategy and content to distribution and optimization.</p>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
                                    <Button asChild className="w-full sm:w-auto">
                                        <Link href="#">Launching soon</Link>
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
                                    <AIDashboardPreview />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <div className="border-b">
                        <LogoCloud />
                    </div> */}
                    <div className="border-b">
                        <FeaturesSection />
                    </div>
                    <div className="border-b">
                        <HowItWorksSeven />
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