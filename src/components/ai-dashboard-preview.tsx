'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export default function AIDashboardPreview() {
    return (
        <div className="bg-illustration ring-border-illustration relative overflow-hidden shadow-xl shadow-black/10 ring-1">
            <div className="flex h-[550px]">
                {/* Left Sidebar */}
                <aside className="w-48 border-r flex flex-col bg-muted/30">
                    {/* Logo */}
                    <div className="h-12 border-b flex items-center px-3">
                        <div className="flex items-center gap-1.5">
                            <div className="size-5 rounded bg-foreground flex items-center justify-center">
                                <svg className="size-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-xs">Zavata</span>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <nav className="flex-1 p-2 space-y-0.5">
                        <NavItem label="Dashboard" active />
                        <NavItem label="Content Hub" badge="12" />
                        <NavItem label="Campaigns" badge="3" />
                        <NavItem label="Analytics" />
                        
                        <div className="pt-3 pb-1">
                            <div className="text-[10px] font-medium text-muted-foreground px-2 mb-1">AI ENGINES</div>
                            <NavItem label="GEO Optimizer" small />
                            <NavItem label="Data Sources" small badge="5" />
                        </div>
                        
                        <div className="pt-3 pb-1">
                            <div className="text-[10px] font-medium text-muted-foreground px-2 mb-1">CHANNELS</div>
                            <NavItem label="LinkedIn" small />
                            <NavItem label="Twitter" small />
                            <NavItem label="Blog" small />
                            <NavItem label="Email" small />
                            <NavItem label="YouTube" small />
                        </div>
                    </nav>
                    
                    {/* User */}
                    <div className="h-12 border-t flex items-center px-2 gap-2">
                        <div className="size-6 rounded-full bg-foreground flex items-center justify-center text-background text-[10px] font-medium">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-medium truncate">John Doe</div>
                            <div className="text-[9px] text-muted-foreground truncate">Founder</div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col bg-background">
                    {/* Header */}
                    <header className="h-12 border-b flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground">Auto-sync active</span>
                            <div className="size-1.5 rounded-full bg-foreground animate-pulse" />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="flex-1 p-4 space-y-3">
                        {/* Cross-Post Preview */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xs font-semibold">Ready to Cross-Post</h2>
                                <span className="text-[9px] text-muted-foreground">From: Meeting Notes</span>
                            </div>
                            <div className="bg-card ring-foreground/10 rounded-lg p-3 shadow-sm ring-1 mb-2">
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="size-4 rounded bg-muted flex items-center justify-center">
                                        <svg className="size-2.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] leading-relaxed">Just shipped our new AI-powered analytics dashboard! 🚀 Real-time insights across all your marketing channels.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    <PostTarget platform="LinkedIn" />
                                    <PostTarget platform="Twitter" />
                                    <PostTarget platform="Blog" />
                                </div>
                            </div>
                        </div>

                        {/* A/B Testing */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-card ring-foreground/10 rounded-lg p-3 shadow-sm ring-1">
                                <h3 className="text-xs font-semibold mb-2">Landing Page A/B Test</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="size-1.5 rounded-full bg-foreground" />
                                            <span className="text-[10px]">Version A</span>
                                        </div>
                                        <span className="text-[10px] font-semibold">4.2%</span>
                                    </div>
                                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-foreground rounded-full" style={{ width: '42%' }} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="size-1.5 rounded-full bg-muted-foreground" />
                                            <span className="text-[10px]">Version B</span>
                                        </div>
                                        <span className="text-[10px] font-semibold">6.8%</span>
                                    </div>
                                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-muted-foreground rounded-full" style={{ width: '68%' }} />
                                    </div>
                                    <p className="text-[9px] text-muted-foreground mt-2">Version B converting 62% better</p>
                                </div>
                            </div>

                            <div className="bg-card ring-foreground/10 rounded-lg p-3 shadow-sm ring-1">
                                <h3 className="text-xs font-semibold mb-2">Investor Update Draft</h3>
                                <div className="space-y-1.5 mb-2">
                                    <SourceBadge icon="meeting" label="Q4 Board Meeting" />
                                    <SourceBadge icon="slack" label="#product channel" />
                                    <SourceBadge icon="analytics" label="Revenue Dashboard" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-muted-foreground">Auto-generated</span>
                                    <button className="text-[10px] font-medium px-2 py-1 rounded bg-foreground text-background">Review</button>
                                </div>
                            </div>
                        </div>

                        {/* Performance Graph */}
                        <div className="bg-card ring-foreground/10 rounded-lg p-3 shadow-sm ring-1">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xs font-semibold">Cross-Platform Reach</h3>
                                <span className="text-[9px] text-muted-foreground">Last 7 days</span>
                            </div>
                            <div className="h-24 flex items-end justify-between gap-1">
                                <Bar height={45} label="Mon" />
                                <Bar height={52} label="Tue" />
                                <Bar height={38} label="Wed" />
                                <Bar height={68} label="Thu" />
                                <Bar height={71} label="Fri" />
                                <Bar height={82} label="Sat" />
                                <Bar height={95} label="Sun" active />
                            </div>
                            <div className="mt-2 pt-2 border-t grid grid-cols-3 gap-2">
                                <Metric label="Total Reach" value="847K" />
                                <Metric label="Engagement" value="12.4%" />
                                <Metric label="Posts" value="47" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

function NavItem({ 
    label, 
    active = false, 
    badge,
    small = false
}: { 
    label: string
    active?: boolean
    badge?: string
    small?: boolean
}) {
    return (
        <button 
            className={cn(
                "w-full flex items-center gap-1.5 px-2 rounded-lg text-[11px] font-medium transition-colors",
                small ? "py-1" : "py-1.5",
                active 
                    ? "bg-foreground text-background" 
                    : "text-muted-foreground hover:bg-background/50"
            )}
        >
            <span className="flex-1 text-left">{label}</span>
            {badge && (
                <span className={cn(
                    "text-[9px] px-1 py-0.5 rounded font-semibold",
                    active ? "bg-background/20 text-background" : "bg-muted text-foreground"
                )}>
                    {badge}
                </span>
            )}
        </button>
    )
}

function PostTarget({ platform }: { platform: string }) {
    const icons = {
        'LinkedIn': (
            <svg className="size-2.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        'Twitter': (
            <svg className="size-2.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        ),
        'Blog': (
            <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    }
    
    return (
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted">
            {icons[platform as keyof typeof icons]}
            <span className="text-[9px] font-medium">{platform}</span>
        </div>
    )
}

function SourceBadge({ icon, label }: { icon: string; label: string }) {
    const icons = {
        meeting: (
            <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        slack: (
            <svg className="size-2.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
            </svg>
        ),
        analytics: (
            <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
    
    return (
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-muted">
            {icons[icon as keyof typeof icons]}
            <span className="text-[9px]">{label}</span>
        </div>
    )
}

function Bar({ height, label, active = false }: { height: number; label: string; active?: boolean }) {
    return (
        <div className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end justify-center" style={{ height: '80px' }}>
                <div 
                    className={cn(
                        "w-full rounded-t transition-all",
                        active ? "bg-foreground" : "bg-muted"
                    )}
                    style={{ height: `${height}%` }}
                />
            </div>
            <span className="text-[9px] text-muted-foreground">{label}</span>
        </div>
    )
}

function Metric({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <div className="text-[9px] text-muted-foreground">{label}</div>
            <div className="text-xs font-semibold">{value}</div>
        </div>
    )
}
