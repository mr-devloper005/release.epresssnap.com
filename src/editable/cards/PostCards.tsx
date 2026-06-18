import Link from 'next/link'
import { ArrowRight, Clock3, FileText } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    'A concise update prepared for readers who want the useful details first.'
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured release' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 overflow-hidden bg-white shadow-[0_18px_42px_rgba(28,37,55,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden bg-[#1c2537]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,37,55,.08),rgba(28,37,55,.86))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <span className="inline-flex rounded-full bg-[var(--slot4-accent)] px-4 py-2 text-xs font-bold text-white">{label}</span>
          <h3 className="mt-5 max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">{post.title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const featured = index % 3 === 0
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden ${featured ? 'bg-[#1c2537] text-white' : 'bg-white text-[#030711]'} shadow-[0_12px_34px_rgba(28,37,55,0.08)] transition duration-300 hover:-translate-y-1`}>
      <div className={`relative overflow-hidden bg-[#e8edf0] ${featured ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-bold text-[var(--slot4-accent)]">
          <span>{getEditableCategory(post)}</span><span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-tight">{post.title}</h3>
        <p className={`mt-3 line-clamp-2 text-sm leading-6 ${featured ? 'text-white/66' : 'text-[#6e7480]'}`}>{getEditableExcerpt(post, 100)}</p>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[50px_1fr] gap-4 border-t border-black/10 py-5 first:border-t-0">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-sm font-black text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-xs font-bold text-[#8a9099]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const horizontal = index % 2 === 0
  return (
    <Link href={href} className={`group min-w-0 overflow-hidden bg-white shadow-[0_12px_34px_rgba(28,37,55,0.07)] transition hover:-translate-y-1 ${horizontal ? 'grid sm:grid-cols-[230px_minmax(0,1fr)]' : 'block'}`}>
      <div className={`relative overflow-hidden bg-[#e8edf0] ${horizontal ? 'min-h-52' : 'aspect-[16/10]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-6">
        <p className="text-xs font-bold text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-3 text-2xl font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#6e7480]">{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1c2537]">Read update <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function MinimalResourceCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group flex gap-4 bg-[#eeeeee] p-5 transition hover:bg-[#e6f8f5]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[var(--slot4-accent)]"><FileText className="h-5 w-5" /></div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
        <h3 className="mt-1 line-clamp-2 text-base font-black leading-tight">{post.title}</h3>
      </div>
    </Link>
  )
}

