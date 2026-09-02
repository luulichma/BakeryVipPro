import Button from './Button'
import Reveal from './Reveal'
import ZaloIcon from './ZaloIcon'
import { menu, formatPrice, zaloLink } from '../lib/site'

export default function Menu() {
  return (
    <section id="thuc-don" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raspberry">Thực đơn</p>
        <h2 className="mt-4 text-4xl font-semibold text-cocoa sm:text-5xl">
          Tám món tiệm làm mỗi ngày
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cocoa-soft">
          Giá đã gồm hộp. Bấm vào món bạn muốn, cửa sổ Zalo mở ra là nhắn được ngay —
          không cần điền form, không cần tài khoản.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {menu.map((item, i) => (
          <Reveal as="li" key={item.id} delay={(i % 4) * 90}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/70 ring-1 ring-cocoa/6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_-24px_rgba(74,47,42,0.4)]">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {item.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-raspberry">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg leading-snug font-semibold text-cocoa">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-soft">{item.desc}</p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-4">
                  <p className="font-display text-xl font-semibold text-raspberry">
                    {formatPrice(item.price)}
                    <span className="ml-1 font-sans text-xs font-normal text-cocoa-soft">
                      /{item.unit}
                    </span>
                  </p>
                  <Button
                    href={zaloLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="soft"
                    className="shrink-0"
                  >
                    <ZaloIcon className="h-3.5 w-3.5" />
                    Đặt món này
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
