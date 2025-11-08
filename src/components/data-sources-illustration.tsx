export const DataSourcesIllustration = () => (
    <div
        aria-hidden
        className="before:bg-background before:z-1 mask-b-from-65% before:bg-card after:bg-card before:border-border-illustration after:border-border-illustration group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:bottom-0 before:top-4 before:rounded-2xl before:border after:absolute after:inset-x-8 after:bottom-0 after:top-2 after:rounded-2xl after:border after:opacity-75">
        <div className="bg-card border-border-illustration relative z-10 rounded-2xl border p-4 text-xs shadow-lg duration-300">
            <div className="mb-3 text-sm font-semibold">Connected Sources</div>
            <div className="space-y-2">
                <div className="bg-illustration flex items-center gap-2 rounded-md border p-2">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 size-6 rounded-md flex items-center justify-center text-white">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium">Slack</div>
                        <div className="text-muted-foreground text-xs">24 conversations</div>
                    </div>
                    <div className="bg-green-500/10 text-green-600 rounded-full px-2 py-0.5 text-xs font-medium">Active</div>
                </div>
                <div className="bg-illustration flex items-center gap-2 rounded-md border p-2">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 size-6 rounded-md flex items-center justify-center text-white">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium">Meeting Notes</div>
                        <div className="text-muted-foreground text-xs">12 documents</div>
                    </div>
                    <div className="bg-green-500/10 text-green-600 rounded-full px-2 py-0.5 text-xs font-medium">Active</div>
                </div>
            </div>
        </div>
    </div>
)

