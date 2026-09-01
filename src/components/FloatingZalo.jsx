import { useEffect, useState } from 'react'
import ZaloIcon from './ZaloIcon'
import { zaloLink } from '../lib/site'

/** Nút Zalo nổi, chỉ hiện sau khi người xem cuộn qua hero. */
export default function FloatingZalo() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={zaloLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nhắn Zalo cho Tiệm bánh Mitu"
      className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-raspberry text-cream shadow-[0_14px_30px_-10px_rgba(196,87,107,0.9)] transition-all duration-300 hover:bg-raspberry-deep sm:right-8 sm:bottom-8 ${
        show ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <span aria-hidden="true" className="halo absolute inset-0 rounded-full bg-raspberry" />
      <ZaloIcon className="relative h-7 w-7" />
    </a>
  )
}
