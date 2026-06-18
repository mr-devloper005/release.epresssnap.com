import Link from 'next/link'
import { ArrowRight, BadgeCheck, Globe2, Radio, Target } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const valueIcons = [Radio, Target, Globe2, BadgeCheck]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-[#030711]">
        <section className="relative overflow-hidden bg-[#1c2537] text-white">
          <div className="pointer-events-none absolute -left-32 top-16 h-[30rem] w-[30rem] rounded-full border-[36px] border-white/[0.045]" />
          <div className="pointer-events-none absolute -right-28 -top-28 h-[32rem] w-[32rem] rounded-full border-[36px] border-white/[0.045]" />
          <div className="mx-auto grid max-w-[1160px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="inline-flex items-center gap-2 text-lg font-bold text-[var(--slot4-accent)]"><span>✣</span>{pagesContent.about.badge}</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">Media distribution built for clear public updates.</h1>
              <p className="mt-8 max-w-xl text-lg font-semibold leading-8 text-white/78">{pagesContent.about.description}</p>
              <Link href="/media-distribution" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-bold text-white">Explore Distribution <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xpress-card-wave">
              {pagesContent.about.values.slice(0, 4).map((value, index) => {
                const Icon = valueIcons[index] || BadgeCheck
                return (
                  <article key={value.title} className="bg-white/8 p-7 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/12">
                    <Icon className="h-8 w-8 text-[var(--slot4-accent)]" />
                    <p className="mt-8 text-sm font-black text-white/35">0{index + 1}</p>
                    <h2 className="mt-3 text-2xl font-black leading-tight">{value.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-white/68">{value.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-24">
            <aside className="bg-[#eeeeee] p-8 sm:p-10">
              <p className="text-lg font-bold text-[var(--slot4-accent)]">✣ About {SITE_CONFIG.name}</p>
              <h2 className="mt-5 text-4xl font-black leading-tight">Practical support for announcements, releases, and public communication.</h2>
            </aside>
            <article className="article-content">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          </div>
        </section>

        <section className="bg-[#1c2537] text-white">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-2xl text-4xl font-black leading-tight">Ready to move your next update through a cleaner workflow?</h2>
            <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-bold">Contact Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
