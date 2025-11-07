import { IntegrationsIllustration } from "@/components/integrations-illustration"
import { Zap, Sparkles, Lock, Cpu } from 'lucide-react'
import { InvoiceIllustration } from "@/components/invoice-illustration"
import { cn } from '@/lib/utils'

export default function FeaturesSection() {
    return (
        <div className="relative px-4 sm:px-6 md:px-12">
            <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
            <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
            
            <div className="relative border-x py-16">
                <div className="@container">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="@4xl:grid-cols-4 relative grid grid-cols-2 overflow-hidden">
                            <div className="@4xl:col-span-2 @4xl:border-r col-span-full row-span-2 grid grid-rows-subgrid border-b">
                                <div className="p-8">
                                    <div className="max-w-84 mx-auto w-full">
                                        <InvoiceIllustration />
                                    </div>
                                </div>
                                <div className="mx-auto max-w-sm px-8 pb-8 text-center">
                                    <h3 className="text-balance font-semibold">Multi-Channel Content Creation</h3>
                                    <p className="text-muted-foreground mt-3">Automatically generate social media posts, videos, newsletters, and blog articles from your company data.</p>
                                </div>
                            </div>
                            <div className="@4xl:col-span-2 relative col-span-full row-span-2 grid grid-rows-subgrid border-b">
                                <div className="p-8">
                                    <div className="@4xl:px-8 mx-auto max-w-sm">
                                        <IntegrationsIllustration />
                                    </div>
                                </div>
                                <div className="relative z-10 mx-auto max-w-sm px-8 pb-8 text-center">
                                    <h3 className="text-balance font-semibold">Smart MCP Integrations</h3>
                                    <p className="text-muted-foreground mt-3">Pull content from meeting notes, Slack, web scraping, and more to fuel your marketing automation.</p>
                                </div>
                            </div>

                            <div className="space-y-3 border-r p-8">
                                <div className="flex items-center gap-2">
                                    <Zap className="text-foreground size-4" />
                                    <h3 className="text-sm font-medium">Auto-Distribution</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Content automatically published to LinkedIn, Twitter, blogs, and all your channels.</p>
                            </div>
                            <div className="space-y-2 p-8 @4xl:border-r">
                                <div className="flex items-center gap-2">
                                    <Cpu className="text-foreground size-4" />
                                    <h3 className="text-sm font-medium">Video Generation</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Create marketing videos using Sora API and other video generation tools.</p>
                            </div>
                            <div className="space-y-2 border-r p-8">
                                <div className="flex items-center gap-2">
                                    <Lock className="text-foreground size-4" />
                                    <h3 className="text-sm font-medium">Brand Consistency</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Maintain your brand voice and style across all generated content.</p>
                            </div>
                            <div className="space-y-2 p-8">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="text-foreground size-4" />
                                    <h3 className="text-sm font-medium">AI-Powered</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Advanced AI transforms company data into engaging marketing content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
