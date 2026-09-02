import { useEffect, useState } from 'react'
import Button from './Button'
import Logo from './Logo'
import ZaloIcon from './ZaloIcon'
import { zaloLink } from '../lib/site'

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

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

        <Button href={zaloLink()} target="_blank" rel="noopener noreferrer" size="sm" variant="soft">
          <ZaloIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Nhắn Zalo</span>
          <span className="sm:hidden">Zalo</span>
        </Button>
      </div>
    </header>
  )
}
