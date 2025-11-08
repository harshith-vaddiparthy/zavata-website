import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-xl font-mono font-semibold tracking-tight', className)}>
            Zavata
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-xl font-mono font-semibold', className)}>
            Z
        </span>
    )
}