'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Computer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(
          theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark',
        )
      }}
      className={cn(
        'rounded-full h-9 w-9 border-primary/20 hover:bg-accent',
        theme === 'system' && 'text-muted-foreground',
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Computer className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
