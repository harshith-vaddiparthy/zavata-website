import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-xl font-bold tracking-tight uppercase', className)}>
            Zavata
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-xl font-bold uppercase', className)}>
            Z
        </span>
    )
}