import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, BadgeCheck, Check, ChevronDown, Handshake, Search, Target, Wallet, Zap } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { ArticleListCard, CompactIndexCard, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const outletNames = ['Investing.com', 'AP', 'Yahoo Finance', 'Business Insider', 'Reuters', 'StreetInsider', 'USA Today', 'MarketWatch', 'Benzinga', 'Fortune']
const trustLogos = ['Traidy', 'TaxstudioAI', 'NewsDesk', 'BrandWire']
const serviceBullets = ['Editorial Review', 'Embeddable Multimedia Support', 'Targeted Media Lists', 'White Label Services for Agencies']

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionBadge({ children }: { children: ReactNode }) {
  return <p className="inline-flex items-center gap-2 text-lg font-bold text-[var(--slot4-accent)]"><span className="text-xl">?</span>{children}</p>
}

export function EditableHomeHero(_: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1c2537] text-white">
      <div className="pointer-events-none absolute -left-36 top-24 h-[34rem] w-[34rem] rounded-full border-[40px] border-white/[0.045]" />
      <div className="pointer-events-none absolute -right-28 -top-40 h-[36rem] w-[36rem] rounded-full border-[40px] border-white/[0.045]" />
      <div className="mx-auto grid min-h-[650px] max-w-[1160px] gap-12 px-4 pb-0 pt-24 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:pt-20">
        <div className="relative z-10 pb-24 lg:pb-12">
          <h1 className="max-w-xl text-5xl font-black leading-tight sm:text-6xl">Express Your Story. Amplify Your Reach.</h1>
          <p className="mt-10 max-w-xl text-lg font-semibold leading-8 text-white/92">A fast, reliable media distribution service designed to help brands, businesses, and organizations share important updates with the right audience.</p>
          <div className="mt-12 w-full max-w-md bg-[var(--slot4-accent)] p-8 text-white shadow-[0_28px_70px_rgba(0,0,0,0.18)] xpress-float">
            <div className="flex gap-5">
              <BadgeCheck className="mt-1 h-8 w-8 shrink-0" />
              <div>
                <h2 className="text-3xl font-black leading-none">Accredited Media Distribution</h2>
                <p className="mt-6 text-base font-semibold leading-7">Structured release support for compliant communications across broad digital channels.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[620px] items-center justify-center pb-16 lg:pb-0">
          <div className="absolute h-40 w-40 rounded-full border-[12px] border-[var(--slot4-accent)]/90 xpress-orbit" />
          <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-[var(--slot4-accent)] bg-[#1c2537] shadow-[0_0_0_18px_rgba(53,199,183,.12)]">
            <span className="xpress-logo-mark text-[5.2rem]" />
          </div>
          {outletNames.map((name, index) => {
            const left = index % 2 === 0
            const y = (index % 5) * 58 - 144
            return (
              <div key={name} className={`absolute z-20 flex h-12 w-36 items-center justify-center rounded-xl bg-white px-3 text-center text-sm font-black leading-tight text-[#1c2537] shadow-lg ${left ? 'right-[54%]' : 'left-[54%]'} xpress-float-delayed`} style={{ top: `calc(50% + ${y}px)` }}>
                <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--slot4-accent)]" style={left ? { right: -14 } : { left: -14 }} />
                {name}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="self-center">
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight sm:text-5xl">Why Leading Brands Trust {SITE_CONFIG.name}</h2>
            <p className="mt-12 max-w-lg text-lg leading-8 text-[#6e7480]">We combine speed, reach, and reliability so your message gets delivered to the right audience on time, every time.</p>
            <div className="mt-12 flex flex-wrap items-center gap-12 text-2xl font-black text-black/38">
              {trustLogos.map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link href="/#testimonials" className={`${dc.button.accent} mt-12`}>What Clients Say <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 xpress-card-wave">
            {[['Blazing Fast Distribution', 'Your update can be ready for visibility quickly, without friction.', Zap], ['Human Support When You Need It', 'Clear guidance from real people when a release needs care.', Handshake], ['Wide & Targeted Reach', 'From broad visibility to niche publications, your story has room to travel.', Target], ['Affordable Plans, Premium Results', 'Professional-grade distribution without overcomplicating the budget.', Wallet]].map(([title, body, Icon]) => {
              const RealIcon = Icon as typeof Zap
              return (
                <div key={String(title)} className="min-h-72 bg-[#eeeeee] p-9 transition duration-300 hover:bg-[#e6f8f5]">
                  <RealIcon className="h-9 w-9 text-black" />
                  <h3 className="mt-8 text-2xl font-black leading-tight">{String(title)}</h3>
                  <p className="mt-4 text-base leading-7 text-[#6e7480]">{String(body)}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div id="agencies" className="mt-24 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden bg-[var(--slot4-accent)]">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" alt="Media planning workspace" className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-80" />
          </div>
          <div>
            <SectionBadge>Our Service</SectionBadge>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Our PR Distribution Services</h2>
            <p className="mt-8 text-lg leading-8 text-[#6e7480]">A complete release workflow for announcements, brand updates, launches, publishing milestones, and public communications.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {serviceBullets.map((item) => <p key={item} className="flex items-center gap-3 text-base font-semibold text-[#6e7480]"><Check className="h-5 w-5 text-[var(--slot4-accent)]" /> {item}</p>)}
            </div>
            <Link href="/contact" className={`${dc.button.accent} mt-10`}>Contact Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        {railPosts.length ? (
          <div className="mt-24 overflow-hidden">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div><SectionBadge>Latest Updates</SectionBadge><h2 className="mt-4 text-4xl font-black">Fresh from the archive</h2></div>
              <Link href={primaryRoute} className="hidden text-sm font-bold text-[var(--slot4-accent)] sm:inline-flex">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
            <div className="flex w-max gap-6 xpress-marquee hover:[animation-play-state:paused]">
              {[...railPosts, ...railPosts].map((post, index) => <RailPostCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index % railPosts.length} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_: HomeSectionProps) {
  return null
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const lead = source[0]
  const briefs = source.slice(1, 7)
  if (!lead && !briefs.length) return null

  return (
    <section className="bg-white">
      <div className={dc.shell.section}>
        <div className="grid gap-8 pb-20 lg:grid-cols-[1.1fr_.9fr]">
          {lead ? <ArticleListCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} index={0} /> : null}
          <div className="bg-[#eeeeee] p-6">
            <SectionBadge>Quick Reads</SectionBadge>
            <h2 className="mt-4 text-3xl font-black">The briefing</h2>
            <div className="mt-5">
              {briefs.slice(0, 4).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
        <form action="/search" className="mb-20 grid gap-5 bg-[#1c2537] p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div>
            <h3 className="text-3xl font-black">Search the full archive</h3>
            <p className="mt-2 text-sm text-white/65">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="flex min-w-0 rounded-full bg-white text-[#030711] sm:min-w-[380px]">
            <Search className="ml-5 mt-4 h-4 w-4 text-[#6e7480]" />
            <input name="q" placeholder="Search stories" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="rounded-full bg-[var(--slot4-accent)] px-5 text-sm font-bold text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <>
      <section id="faq" className="bg-[#eeeeee] py-20 sm:py-28">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#6e7480]">Straightforward answers about submitting, preparing, and tracking media distribution updates.</p>
          </div>
          <div className="mx-auto mt-14 max-w-5xl space-y-3">
            {['What is this service?', 'How do I submit a press release?', 'What types of updates can I submit?', 'How long does it take for my release to go live?'].map((question, index) => (
              <details key={question} open={index === 0} className="group bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[#1c2537] px-6 py-5 text-sm font-black text-white group-open:bg-[#1c2537]">
                  {index + 1}. {question}<ChevronDown className="h-5 w-5 text-[var(--slot4-accent)] transition group-open:rotate-180" />
                </summary>
                <p className="px-6 py-6 text-base leading-7 text-[#6e7480]">{index === 0 ? `${SITE_CONFIG.name} helps organizations prepare and distribute public updates across digital media channels with a clean workflow.` : 'Share the essentials, add supporting details, and our forms keep the submitted information organized for readers.'}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 text-center"><Link href="/contact" className={dc.button.accent}>More FAQs</Link></div>
        </div>
      </section>
    </>
  )
}



