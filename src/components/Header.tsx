'use client'

import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeToggleDropdown } from '@/components/theme-toggle-dropdown'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl"
          >
            Invitation
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/demo/start/server-funcs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Server Functions
            </Link>
            <Link
              to="/demo/start/api-request"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              API Request
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <div className="hidden md:block">
            <ThemeToggleDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}
