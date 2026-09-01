import { site } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-cocoa-soft sm:flex-row">
        <p>
          <span className="font-display text-base font-semibold text-raspberry">{site.name}</span>
          {' — '}
          {site.tagline}
        </p>
        <p className="text-cocoa-soft/70">
          © {new Date().getFullYear()} {site.fullName}
        </p>
      </div>
    </footer>
  )
}
