import { useEffect, useState } from 'react'
import ZaloIcon from './ZaloIcon'
import { site, zaloLink } from '../lib/site'

const NAV = [
  { href: '#thuc-don', label: 'Thực đơn' },
  { href: '#dat-banh', label: 'Đặt bánh riêng' },
  { href: '#ve-tiem', label: 'Về tiệm' },
  { href: '#lien-he', label: 'Ghé tiệm' },
]

export default function Header() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? 'bg-cream/85 shadow-[0_1px_0_rgba(74,47,42,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-raspberry">
            {site.name}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.22em] text-cocoa-soft sm:inline">
            tiệm bánh
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cocoa-soft transition-colors hover:text-raspberry"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={zaloLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-raspberry/25 bg-cream px-4 py-2 text-sm font-semibold text-raspberry transition hover:bg-raspberry hover:text-cream"
        >
          <ZaloIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Nhắn Zalo</span>
          <span className="sm:hidden">Zalo</span>
        </a>
      </div>
    </header>
  )
}
