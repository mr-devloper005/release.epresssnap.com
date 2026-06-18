'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Distribution', href: '/media-distribution' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/signup' },
  { label: 'Search', href: '/search' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-[#1c2537] text-white shadow-[0_1px_0_rgba(255,255,255,.08)]">
      <div className="mx-auto flex min-h-[86px] max-w-[1160px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex min-w-0 items-center gap-2 text-xl font-black uppercase text-[var(--slot4-accent)] sm:text-2xl" aria-label={SITE_CONFIG.name}>
          <img src="/favicon.png" alt="" className="h-14 w-14 shrink-0 scale-125 object-contain" />
          <span className="truncate">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-base font-semibold lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--slot4-accent)] first:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <>
              <button type="button" onClick={logout} className="hidden rounded-full border border-white/25 px-5 py-3 text-sm font-bold hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] md:block">Logout</button>
            </>
          ) : <Link href="/signup" className="hidden rounded-full border border-white px-6 py-3 text-sm font-bold transition hover:border-[var(--slot4-accent)] hover:bg-[var(--slot4-accent)] md:inline-flex">Register</Link>}
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#1c2537] px-4 pb-5 lg:hidden">
          <nav className="mx-auto grid max-w-[1160px] gap-2 pt-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-full border border-white/10 px-4 py-3 text-sm font-bold hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">
                {item.label}
              </Link>
            ))}
            {session ? <button onClick={logout} className="rounded-full border border-white/10 px-4 py-3 text-left text-sm font-bold">Logout</button> : null}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

