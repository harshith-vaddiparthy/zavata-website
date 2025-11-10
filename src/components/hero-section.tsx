import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroHeader from "@/components/header"
import { cn } from '@/lib/utils'
// import LogoCloud from "@/components/logo-cloud"
import FeaturesSection from "@/components/features-11"
import IntegrationsSection from "@/components/integrations-10"
import HowItWorksSeven from "@/components/how-it-works-7"
import Footer from "@/components/footer"
import AIDashboardPreview from "@/components/ai-dashboard-preview"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main
                role="main"
                className="relative isolate overflow-x-clip">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/3 via-blue-400/1 to-transparent pointer-events-none" />
                <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-blue-400/6 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -z-10 top-[800px] -right-[150px] sm:-right-[100px] md:right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-blue-300/3 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -z-10 top-[1500px] -left-[150px] sm:-left-[100px] md:left-0 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-blue-400/4 rounded-full blur-3xl pointer-events-none" />
                <div className="mx-auto max-w-6xl border-x relative">
                    <section id="home">
                        <div className="relative border-b px-4 sm:px-6 pb-10 pt-24 md:pb-20 md:pt-36">
                            <div className="mx-auto max-w-3xl text-center">
                                <h1 className="text-foreground text-balance text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl px-2">The Growth Stack for<br />One Person Unicorns</h1>
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
                        <IntegrationsSection />
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