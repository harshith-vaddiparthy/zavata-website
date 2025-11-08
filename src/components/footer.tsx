import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Logo } from './logo'
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
      <div className="relative border-x py-16">
        <div className="@container">
          {/* Top section - Logo and Newsletter */}
          <div className="grid gap-12 border-b px-6 pb-12 md:grid-cols-2 md:gap-8 md:px-12">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                Your complete AI marketing agency replacement. Automatically create and distribute content across all channels.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Subscribe to our newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest updates, articles, and resources delivered to your inbox.
              </p>
              <form className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          
          {/* Middle section - Links Grid */}
          <div className="grid gap-8 border-b px-6 py-12 md:grid-cols-4 md:gap-8 md:px-12">
            {/* Product */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section - Copyright and Social */}
          <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:px-12">
            <p>© 2025 Zavata. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                GitHub
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

