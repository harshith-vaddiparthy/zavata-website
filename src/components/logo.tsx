import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            className={cn('text-foreground h-5 w-auto', className)}
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Z icon */}
            <g>
                <path
                    d="M20 40 L140 40 L20 160 L140 160"
                    stroke={uniColor ? 'currentColor' : 'url(#paint_logo)'}
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
                <circle
                    cx="140"
                    cy="40"
                    r="8"
                    fill={uniColor ? 'currentColor' : 'url(#paint_logo)'}
                />
            </g>
            {/* Zavata text */}
            <g transform="translate(180, 100)" fill="currentColor">
                <text
                    x="0"
                    y="0"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="72"
                    fontWeight="600"
                    letterSpacing="-2">
                    Zavata
                </text>
            </g>
            <defs>
                <linearGradient
                    id="paint_logo"
                    x1="80"
                    y1="40"
                    x2="80"
                    y2="160"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop
                        offset="1"
                        stopColor="#8b5cf6"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            className={cn('size-5', className)}
            viewBox="0 0 160 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 40 L140 40 L20 160 L140 160"
                stroke={uniColor ? 'currentColor' : 'url(#paint_logo_icon)'}
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <circle
                cx="140"
                cy="40"
                r="8"
                fill={uniColor ? 'currentColor' : 'url(#paint_logo_icon)'}
            />
            <defs>
                <linearGradient
                    id="paint_logo_icon"
                    x1="80"
                    y1="40"
                    x2="80"
                    y2="160"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop
                        offset="1"
                        stopColor="#8b5cf6"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}