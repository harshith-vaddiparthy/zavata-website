import { Gemini, GooglePaLM, MediaWiki } from '@/components/logos'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
        <section className="bg-background">
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div
                        aria-hidden
                        className="space-y-3">
                        <div className="flex flex-row-reverse justify-center gap-3">
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
                        <div className="flex flex-row-reverse justify-center gap-3">
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
                        <div className="flex justify-center gap-3">
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
                        <div className="flex justify-center gap-3">
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
                    <div className="mx-auto mt-12 max-w-lg text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Infinite Content</h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance">Connect your workspace, knowledge base, and communication tools. Zavata learns your story, generates authentic content, and distributes it everywhere so you can focus on building while marketing runs itself.</p>

                        <Button
                            variant="outline"
                            size="sm"
                            asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-background ring-foreground/10 flex aspect-square size-11 rounded-full border border-transparent shadow-md ring-1 *:m-auto *:size-5', className)}>{children}</div>
}