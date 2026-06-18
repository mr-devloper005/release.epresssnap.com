'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release desk', body: 'Send announcement details, supporting notes, corrections, and publication questions.' },
  { icon: Megaphone, title: 'Distribution support', body: 'Discuss release planning, syndication options, agency needs, and campaign timing.' },
  { icon: Mail, title: 'General support', body: 'Reach us for account, publishing, search, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-[#030711]">
        <section className="relative overflow-hidden bg-[#1c2537] text-white">
          <div className="pointer-events-none absolute -right-28 -top-28 h-[32rem] w-[32rem] rounded-full border-[36px] border-white/[0.045]" />
          <div className="mx-auto grid max-w-[1160px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:px-8 lg:py-28">
            <div>
              <p className="inline-flex items-center gap-2 text-lg font-bold text-[var(--slot4-accent)]"><span>✣</span>{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.contact.title}</h1>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-white/78">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-0 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-24">
            <aside className="bg-[#1c2537] text-white">
              {desks.map((desk, index) => (
                <div key={desk.title} className="border-b border-white/12 p-8 last:border-b-0 sm:p-10">
                  <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/35">0{index + 1}</span></div>
                  <h2 className="mt-7 text-3xl font-black leading-tight">{desk.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">{desk.body}</p>
                </div>
              ))}
            </aside>
            <div className="bg-[#eeeeee] p-6 sm:p-10 lg:p-14">
              <p className="text-lg font-bold text-[var(--slot4-accent)]">✣ Send a message</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
