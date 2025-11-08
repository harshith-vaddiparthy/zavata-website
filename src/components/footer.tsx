import { cn } from '@/lib/utils'

const SquareDecorator = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        'bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5',
        'border border-transparent shadow-sm ring-1',
        className
      )}
    />
  )
}

export default function Footer() {
  return (
    <div className="relative px-4 sm:px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.015] via-blue-400/[0.008] to-transparent pointer-events-none" />
      {/* Square decorators - 8 total */}
      <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
      <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
      <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
      <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
      
      <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
      <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
      <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
      <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
      
      {/* Footer content with vertical borders */}
      <div className="relative border-x py-8">
        <div className="@container">
          {/* Simple copyright */}
          <div className="flex items-center justify-center px-6 text-sm text-muted-foreground md:px-12">
            <p>© 2025 Zavata Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

