import { Gemini, GooglePaLM, MediaWiki } from '@/components/logos'
import { cn } from '@/lib/utils'
import OpenAI from '@/components/logos/open-ai'
import { Cloudflare } from '@/components/logos/cloudflare'
import { Linear } from '@/components/logos/linear'
import { Vercel } from '@/components/logos/vercel'
import ClaudeAI from '@/components/logos/claude'
import VisualStudioCode from '@/components/logos/vs-code'
import { 
    SiSlack, 
    SiNotion, 
    SiIntercom, 
    SiHubspot, 
    SiSalesforce, 
    SiGoogleanalytics,
    SiJira,
    SiGithub,
    SiLinkedin,
    SiX,
    SiGmail,
    SiYoutube,
    SiSupabase,
    SiReplit
} from 'react-icons/si'
import { Calendar } from 'lucide-react'

export default function IntegrationsSection() {
    return (
        <div className="relative px-4 sm:px-6 md:px-12">
            {/* Square Decorators - 8 total */}
            <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
            <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
            <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
            <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
            <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />

            {/* Content with vertical borders */}
            <div className="relative border-x py-16 md:py-20">
                <div
                    aria-hidden
                    className="space-y-3 sm:space-y-4 px-4 sm:px-6 py-4">
                    <div className="flex flex-row-reverse justify-center gap-3 sm:gap-4 flex-wrap">
                        <IntegrationCard>
                            <SiSlack className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiNotion className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiIntercom className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiHubspot className="size-6" />
                        </IntegrationCard>
                    </div>
                    <div className="flex flex-row-reverse justify-center gap-3 sm:gap-4 flex-wrap">
                        <IntegrationCard>
                            <SiSalesforce className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiGoogleanalytics className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiJira className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiGithub className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Calendar className="size-6" />
                        </IntegrationCard>
                    </div>
                    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                        <IntegrationCard>
                            <SiLinkedin className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiX className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiGmail className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiYoutube className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <SiSupabase className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Linear className="size-6" />
                        </IntegrationCard>
                    </div>
                    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                        <IntegrationCard>
                            <SiReplit className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Vercel className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <VisualStudioCode className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Cloudflare className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <OpenAI className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <ClaudeAI className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Gemini className="size-6" />
                        </IntegrationCard>
                    </div>
                </div>
                
                <div className="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-lg text-center px-4">
                    <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">Infinite Content</h2>
                    <p className="text-muted-foreground mt-3 sm:mt-4 text-balance text-sm sm:text-base">Connect your workspace, knowledge base, and communication tools. Zavata learns your story, generates authentic content, and distributes it everywhere so you can focus on building while marketing runs itself.</p>
                </div>
            </div>
        </div>
    )
}

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-background ring-foreground/10 flex aspect-square size-9 sm:size-10 md:size-11 rounded-full border border-transparent shadow-md ring-1 *:m-auto *:size-4 sm:*:size-5', className)}>{children}</div>
}

const SquareDecorator = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className={cn(
                'bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5',
                'border border-transparent shadow-sm ring-1',
                className
            )}
        />
    )
}