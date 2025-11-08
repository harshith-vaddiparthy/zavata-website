export const DistributionIllustration = () => (
    <div
        aria-hidden
        className="mask-r-from-55% mask-l-from-85% -mx-8 -mb-8 flex flex-col justify-end border-b px-8 pb-8 pt-4">
        <div className="space-y-3">
            <span className="text-foreground block text-sm font-medium">Publishing Status</span>
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-500 size-1.5 rounded-full"></div>
                        <span className="text-muted-foreground">LinkedIn</span>
                    </div>
                    <span className="text-green-600 text-xs font-medium">Posted</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-400 size-1.5 rounded-full"></div>
                        <span className="text-muted-foreground">Twitter</span>
                    </div>
                    <span className="text-green-600 text-xs font-medium">Posted</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-500 size-1.5 rounded-full"></div>
                        <span className="text-muted-foreground">Blog</span>
                    </div>
                    <span className="text-yellow-600 text-xs font-medium">Scheduled</span>
                </div>
            </div>
            <div className="before:bg-linear-to-r before:z-1 bg-muted after:bg-linear-to-r after:blur-xs relative my-1.5 h-1.5 rounded-full before:absolute before:inset-0 before:w-4/5 before:rounded-full before:from-green-400 before:to-green-600 after:absolute after:inset-0 after:w-4/5 after:from-green-400 after:to-green-600 after:opacity-50" />
            <div className="text-muted-foreground text-xs">80% channels published</div>
        </div>
    </div>
)

