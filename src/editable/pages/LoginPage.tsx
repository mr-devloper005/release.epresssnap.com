import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-[#030711]">
        <section className="relative overflow-hidden bg-[#1c2537] text-white">
          <div className="pointer-events-none absolute -left-32 top-16 h-[30rem] w-[30rem] rounded-full border-[36px] border-white/[0.045]" />
          <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1160px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 text-lg font-bold text-[var(--slot4-accent)]"><ShieldCheck className="h-5 w-5" />{pagesContent.auth.login.badge}</p>
              <h1 className="mt-6 max-w-xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-8 max-w-lg text-lg font-semibold leading-8 text-white/72">{pagesContent.auth.login.description}</p>
            </div>
            <div className="bg-white p-7 text-[#030711] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
              <p className="text-lg font-bold text-[var(--slot4-accent)]">✣ Member access</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">{pagesContent.auth.login.formTitle}</h2>
              <EditableLocalLoginForm />
              <p className="mt-6 border-t border-black/10 pt-5 text-sm font-semibold text-[#6e7480]">New here? <Link href="/signup" className="inline-flex items-center gap-1 font-black text-[var(--slot4-accent)] hover:underline">{pagesContent.auth.login.createCta}<ArrowRight className="h-3.5 w-3.5" /></Link></p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
