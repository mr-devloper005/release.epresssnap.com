import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f4f4f4',
  '--slot4-page-text': '#030711',
  '--slot4-panel-bg': '#eeeeee',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#6e7480',
  '--slot4-soft-muted-text': '#8a9099',
  '--slot4-accent': '#35c7b7',
  '--slot4-accent-fill': '#35c7b7',
  '--slot4-accent-soft': '#e6f8f5',
  '--slot4-dark-bg': '#1c2537',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e8edf0',
  '--slot4-cream': '#f4f4f4',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#35c7b7',
  '--slot4-gray': '#eeeeee',
  '--slot4-body-gradient': 'linear-gradient(180deg, #1c2537 0%, #1c2537 42%, #f4f4f4 42%, #ffffff 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/10',
  darkBorder: 'border-white/15',
  shadow: 'shadow-[0_18px_45px_rgba(28,37,55,0.08)]',
  shadowStrong: 'shadow-[0_30px_80px_rgba(28,37,55,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(28,37,55,0.05),rgba(28,37,55,0.86))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-16 sm:py-20 lg:py-28',
  },
  layout: {
    safeGrid: 'grid gap-7 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center',
    rail: 'flex gap-6 overflow-hidden',
    minRailCard: 'w-[280px] shrink-0 sm:w-[320px]',
  },
  type: {
    eyebrow: 'text-sm font-bold tracking-[0.02em]',
    heroTitle: 'text-5xl font-black leading-[0.98] sm:text-6xl lg:text-[4.7rem]',
    sectionTitle: 'text-4xl font-black leading-tight sm:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border border-black/5 ${editablePalette.surfaceBg}`,
    soft: `border border-black/5 ${editablePalette.panelBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--slot4-accent-fill)] hover:text-white`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-current/25 bg-transparent px-7 py-3.5 text-sm font-bold transition hover:border-[var(--slot4-accent-fill)] hover:text-[var(--slot4-accent)]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(53,199,183,0.32)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(28,37,55,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a premium press-distribution visual system: deep navy hero, white content bands, teal accents, square service cards, and rounded pill CTAs.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Create visual variety across featured, compact, horizontal, editorial, and image-first cards.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a different publication name.',
] as const

