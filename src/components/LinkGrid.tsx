import NextLink from 'next/link'
import { ReactNode } from 'react'
import { Icon } from '@/components/Icon'

// Define IconName type locally based on icons available in the project
type IconName = 'installation' | 'presets' | 'plugins' | 'theming' | 'lightbulb' | 'warning';

interface LinkGridProps {
  children: ReactNode
}

export function LinkGrid({ children }: LinkGridProps) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

interface LinkProps {
  title: string
  description: string
  href: string
  icon: IconName
}

LinkGrid.Link = function Link({ title, description, href, icon }: LinkProps) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="h-8 w-8" />
        <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
          <NextLink href={href} className="relative">
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </NextLink>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
