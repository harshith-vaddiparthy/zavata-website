import { Gemini } from '@/components/logos'
import ClaudeAI from '@/components/logos/claude'
import OpenAI from '@/components/logos/open-ai'
import VSCode from '@/components/logos/vs-code'
import { Vercel } from '@/components/logos/vercel'
import { cn } from '@/lib/utils'
import IntelliJIDEA from '@/components/logos/intellij'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cloudflare } from '@/components/logos/cloudflare'

export default function IntegrationsSection() {
    return (
        <div className="relative px-4 sm:px-6 md:px-12">
            {/* Square decorators - 8 total */}
            <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
            <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
            
            <div className="relative border-x">
                <div className="bg-muted @container py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-balance text-3xl font-semibold md:text-5xl md:tracking-tight">Powerful MCP Integrations</h2>
                            <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Pull content from meeting notes (Fireflies, Otter, Granola), Slack conversations, web scraping, newsletters, and more to fuel your marketing automation.</p>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild>
                                <Link href="#">Explore Integrations</Link>
                            </Button>
                        </div>
                        <div className="@max-xl:max-w-xs @xl:grid-cols-9 relative mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-4">
                            <div
                                aria-hidden
                                className="mask-radial-to-85% absolute inset-x-0 inset-y-4 m-auto bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-[size:12px_12px] opacity-5"
                            />
                            <div
                                aria-hidden
                                className="mask-radial-to-85% translate-[0.5px] absolute inset-x-6 inset-y-4 m-auto bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-25 [background-size:24px_24px]"
                            />

                            <IntegrationsGroup
                                label="Meeting Notes"
                                className="@max-xl:row-start-3">
                                <div className="grid grid-cols-2 gap-2">
                                    <IntegrationCard>
                                        <IntelliJIDEA />
                                    </IntegrationCard>

                                    <IntegrationCard>
                                        <VSCode />
                                    </IntegrationCard>
                                </div>
                            </IntegrationsGroup>

                            <div
                                aria-hidden
                                className="@max-xl:hidden"
                            />

                            <IntegrationsGroup
                                label="AI Video & Content"
                                className="@max-xl:col-span-4 @max-xl:w-3/4 @max-xl:row-start-1 @max-xl:place-self-center col-span-3">
                                <div className="grid grid-cols-3 gap-2">
                                    <IntegrationCard>
                                        <OpenAI />
                                    </IntegrationCard>
                                    <IntegrationCard>
                                        <ClaudeAI />
                                    </IntegrationCard>
                                    <IntegrationCard>
                                        <Gemini />
                                    </IntegrationCard>
                                </div>
                            </IntegrationsGroup>

                            <div
                                aria-hidden
                                className="@max-xl:hidden"
                            />

                            <IntegrationsGroup label="Distribution">
                                <div className="grid grid-cols-2 gap-2">
                                    <IntegrationCard>
                                        <Cloudflare className="!w-7" />
                                    </IntegrationCard>
                                    <IntegrationCard>
                                        <Vercel />
                                    </IntegrationCard>
                                </div>
                            </IntegrationsGroup>
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

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-background ring-foreground/10 flex aspect-square size-full rounded-lg border border-transparent shadow ring-1 *:m-auto *:size-5', className)}>{children}</div>
}

const IntegrationsGroup = ({ children, label, className }: { children?: React.ReactNode; label?: string; className?: string }) => {
    return (
        <div className={cn('ring-foreground/5 relative z-20 col-span-2 row-span-2 grid grid-rows-subgrid gap-1.5 self-center rounded-2xl border border-transparent bg-zinc-50 p-2 shadow ring-1', className)}>
            <span className="text-muted-foreground block self-center text-balance text-center text-sm">{label}</span>
            {children}
        </div>
    )
}