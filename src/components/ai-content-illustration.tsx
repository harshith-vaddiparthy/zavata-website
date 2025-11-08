export const AIContentIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative w-3/4 select-none">
            <div className="relative w-full space-y-2 py-4">
                <div className="absolute inset-y-0 left-0 w-px bg-[length:1px_4px] bg-repeat-y opacity-15 [background-image:linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)]"></div>

                <div className="pl-5">
                    <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="text-muted-foreground text-xs">Now</div>
                        <div className="flex items-center gap-1">
                            <div className="animate-pulse bg-gradient-to-r from-purple-500 to-indigo-500 size-2 rounded-full"></div>
                            AI Generating
                        </div>
                    </div>
                </div>
                <div className="border-border-illustration relative -mx-5 flex flex-col gap-1.5 rounded-xl border bg-white/5 p-2 text-xs shadow-md backdrop-blur">
                    <div className="before:border-primary before:bg-background before:ring-background relative ml-7 mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="flex items-center gap-1.5">
                            <svg className="size-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Social Posts
                        </div>
                    </div>
                    <div className="ml-7 text-xs text-muted-foreground">LinkedIn, Twitter, Facebook</div>
                </div>
                <div className="pl-5">
                    <div className="text-foreground before:border-muted-foreground before:bg-background before:ring-background relative mt-0.5 inline-flex items-center gap-2 text-sm font-medium before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:ring">
                        <div className="flex items-center gap-1.5">
                            <svg className="size-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Blog Article
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

