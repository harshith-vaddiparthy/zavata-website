import { CheckCircle, ArrowRight } from 'lucide-react'
import Slack from '@/components/logos/slack'
import Notion from '@/components/logos/notion'
import Gmail from '@/components/logos/gmail'

export const IntegrationsIllustration = () => (
    <div
        aria-hidden
        className="bg-foreground/5 group rounded-2xl">
        <div className="flex items-center justify-between px-6 py-2.5 text-sm font-medium">
            <span>Company Knowledge Base</span>
            <span className="text-muted-foreground text-xs">Live sync</span>
        </div>
        <div className="relative">
            <div className="bg-card ring-foreground/10 relative overflow-hidden rounded-2xl border border-transparent px-4 py-3 shadow-md shadow-black/5 ring-1">
                <DataSourceCard
                    icon={<Notion className="size-5" />}
                    source="Notion"
                    preview="Meeting notes: Discussed Q1 goals, increase engagement by 40%..."
                    timestamp="2 min ago"
                    status="synced"
                />
                <DataSourceCard
                    icon={<Slack className="size-5" />}
                    source="Slack"
                    preview="#marketing: Let's highlight the new video feature in our launch..."
                    timestamp="5 min ago"
                    status="synced"
                />
                <DataSourceCard
                    icon={<Gmail className="size-5" />}
                    source="Gmail"
                    preview="Newsletter feedback: Users love the new analytics dashboard..."
                    timestamp="12 min ago"
                    status="synced"
                />
            </div>
        </div>
    </div>
)

const DataSourceCard = ({ 
    icon, 
    source, 
    preview, 
    timestamp,
    status 
}: { 
    icon: React.ReactNode; 
    source: string; 
    preview: string;
    timestamp: string;
    status: 'synced' | 'syncing';
}) => {
    return (
        <div className="border-foreground/5 group/card relative flex items-start gap-3 border-b py-3 last:border-b-0">
            <div className="bg-muted/50 flex size-10 shrink-0 items-center justify-center rounded-lg">
                {icon}
            </div>
            <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium">{source}</h3>
                    <div className="flex items-center gap-1 text-xs">
                        {status === 'synced' ? (
                            <>
                                <CheckCircle className="size-3" />
                                <span>Synced</span>
                            </>
                        ) : (
                            <span className="animate-pulse">Syncing...</span>
                        )}
                    </div>
                </div>
                <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">{preview}</p>
                <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-[10px]">{timestamp}</span>
                    <ArrowRight className="text-foreground/20 size-3 opacity-0 transition-opacity group-hover/card:opacity-100" />
                </div>
            </div>
        </div>
    )
}