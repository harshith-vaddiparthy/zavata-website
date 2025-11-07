import { MemoryUsageIllustration } from "@/components/memory-usage-illustration"
import { CampaignIllustration } from "@/components/campaign-illustration"
import { cn } from '@/lib/utils'
import { PollIllustration } from "@/components/poll-illustration"

export default function HowItWorksSeven() {
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
            
            <div className="relative border-x">
                <div className="@container py-16 md:py-20">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="@4xl:text-left text-center">
                            <h2 className="text-foreground text-3xl font-semibold">How Zavata Works</h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">
                                From data collection to content distribution, Zavata handles your entire <span className="text-foreground">marketing workflow</span> automatically.
                            </p>
                        </div>
                        <div className="@max-4xl:max-w-sm relative mx-auto mt-12">
                            <div className="@4xl:grid-cols-3 grid overflow-hidden">
                                <div className="@4xl:border-r row-span-2 grid grid-rows-subgrid p-8">
                                    <div
                                        aria-hidden
                                        className="relative flex flex-col justify-end">
                                        <Counter number={1} />
                                        <CampaignIllustration />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold">Gather Inputs</h3>
                                        <p className="text-muted-foreground mt-2">Connect meeting notes, Slack conversations, web data, and newsletters via MCP integrations.</p>
                                    </div>
                                </div>
                                <div className="@4xl:border-r row-span-2 grid grid-rows-subgrid p-8">
                                    <div
                                        aria-hidden
                                        className="relative flex flex-col justify-end">
                                        <Counter number={2} />
                                        <div className="relative">
                                            <div className="bg-linear-to-br/increasing from-primary absolute inset-1/3 m-auto aspect-video rounded-full to-indigo-500 blur-3xl"></div>
                                            <div className="mask-y-from-55% mask-r-from-55% absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2px_2px]"></div>
                                            <PollIllustration />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-foreground font-semibold">AI Content Creation</h3>
                                        <p className="text-muted-foreground mt-2">Generate social posts, videos, newsletters, blog articles, and investor updates automatically.</p>
                                    </div>
                                </div>
                                <div className="row-span-2 grid grid-rows-subgrid p-8">
                                    <div
                                        aria-hidden
                                        className="relative flex flex-col justify-center">
                                        <Counter number={3} />
                                        <MemoryUsageIllustration />
                                    </div>

                                    <div className="@4xl:mt-0 mt-8">
                                        <h3 className="text-foreground font-semibold">Automated Distribution</h3>
                                        <p className="text-muted-foreground mt-2">Content automatically posted to LinkedIn, Twitter, blogs, and all your marketing channels.</p>
                                    </div>
                                </div>
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

const Counter = ({ number }: { number: number }) => <div className="text-foreground mask-y-from-55% mask-x-from-55% @4xl:absolute top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full font-mono text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35">{number}</div>