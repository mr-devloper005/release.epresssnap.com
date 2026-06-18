'use client'

import Link from 'next/link'
import { Search, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Distribution', href: '/media-distribution' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/signup' },
  { label: 'Search', href: '/search' },
]

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="relative overflow-hidden bg-[#1c2537] text-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full border-[36px] border-white/[0.04]" />
      <div className="mx-auto grid max-w-[1160px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr_.9fr] lg:px-8 lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black uppercase text-[var(--slot4-accent)]">
            <span className="xpress-logo-mark" /> {SITE_CONFIG.name}
          </Link>
          <p className="mt-6 max-w-sm text-sm font-semibold leading-7 text-white/78">{globalContent.footer?.description || 'Express your story. Amplify your reach.'}</p>
        </div>

        <div>
          <h3 className="text-2xl font-black">Pages</h3>
          <div className="mt-5 h-px w-16 bg-[var(--slot4-accent)]" />
          <div className="mt-7 grid gap-4 text-sm font-semibold sm:grid-cols-2">
            {footerLinks.map((item) => <Link key={item.href} href={item.href} className="hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
            {session ? <button onClick={logout} className="text-left hover:text-[var(--slot4-accent)]">Logout</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black">Quick Search</h3>
          <div className="mt-5 h-px w-16 bg-[var(--slot4-accent)]" />
          <form action="/search" className="mt-7 flex rounded-full border border-white/20 bg-white/5 px-4">
            <Search className="mt-4 h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-semibold outline-none placeholder:text-white/45" />
            <button className="text-sm font-bold text-[var(--slot4-accent)]">Go</button>
          </form>
          <div className="mt-7 grid gap-5 text-sm font-semibold text-white/88">
            <Link href="/contact" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-7 py-3 text-sm font-bold text-white">Contact Us <Send className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-white/55">© {year} {SITE_CONFIG.name}. Media distribution and public information.</div>
    </footer>
  )
}

