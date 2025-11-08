import { cn } from '@/lib/utils'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import LinkedIn from '@/components/logos/linkedin'
import Twitter from '@/components/logos/twitter'
import YouTube from '@/components/logos/youtube'
import { Globe } from 'lucide-react'

export const InvoiceIllustration = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className="relative">
            <div className={cn('mask-b-from-65% before:bg-background before:border-border after:border-border after:bg-background/50 before:z-1 group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:bottom-0 before:top-4 before:rounded-2xl before:border after:absolute after:inset-x-9 after:bottom-0 after:top-2 after:rounded-2xl after:border', className)}>
                <div className="bg-illustration ring-border-illustration relative z-10 overflow-hidden rounded-2xl p-6 text-sm shadow-xl shadow-black/10 ring-1">
                    <div className="mb-4 flex items-start justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-muted-foreground">Generated 2 min ago</span>
                            </div>
                            <div className="mt-2 text-base font-semibold">Product Launch Campaign</div>
                            <div className="flex items-center gap-1 text-xs font-medium">
                                <CheckCircle2 className="size-3" />
                                12 assets ready
                            </div>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-foreground/5 px-2 py-1 text-xs font-medium border">
                            <Sparkles className="size-3" />
                            AI
                        </div>
                    </div>

                    <div className="space-y-2">
                        <ContentCard 
                            icon={<LinkedIn className="size-5" />}
                            platform="LinkedIn"
                            preview="🚀 Excited to announce our new AI-powered dashboard..."
                            status="scheduled"
                        />
                        <ContentCard 
                            icon={<Twitter className="size-4" />}
                            platform="Twitter"
                            preview="Just shipped: AI analytics that actually make sense 🎯"
                            status="draft"
                        />
                        <ContentCard 
                            icon={<YouTube className="size-5" />}
                            platform="YouTube"
                            preview="Product Demo: 2:34 video"
                            status="rendering"
                        />
                        <ContentCard 
                            icon={<Globe className="size-4 text-orange-600" />}
                            platform="Blog"
                            preview="Why We Built This: The Future of Marketing..."
                            status="draft"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContentCard = ({ icon, platform, preview, status }: { 
    icon: React.ReactNode; 
    platform: string; 
    preview: string;
    status: 'scheduled' | 'draft' | 'rendering';
}) => {
    return (
        <div className="bg-background/80 border-foreground/10 flex items-start gap-2 rounded-lg border p-2">
            <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded">
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                    <div className="text-xs font-medium">{platform}</div>
                    <div className="rounded-full border bg-foreground/5 px-1.5 py-0.5 text-[10px] font-medium">
                        {status}
                    </div>
                </div>
                <div className="text-muted-foreground mt-0.5 truncate text-xs">{preview}</div>
            </div>
        </div>
    )
}