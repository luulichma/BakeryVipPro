import Reveal from './Reveal'
import ZaloIcon from './ZaloIcon'
import { site, zaloLink, telLink } from '../lib/site'

const DETAILS = [
  { label: 'Địa chỉ', value: site.address },
  { label: 'Giờ mở cửa', value: site.hours },
  { label: 'Điện thoại', value: site.phone },
]

export default function Contact() {
  return (
    <section id="lien-he" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-cocoa px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-raspberry/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-blush/20 blur-3xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-xl text-4xl font-semibold text-cream sm:text-5xl">
              Đói bánh thì nhắn Timu
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/70">
              Tiệm trả lời Zalo trong giờ mở cửa, thường dưới 10 phút.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={zaloLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-cocoa transition hover:-translate-y-0.5 hover:bg-blush sm:w-auto"
              >
                <ZaloIcon className="h-5 w-5" />
                Nhắn Zalo cho tiệm
              </a>
              <a
                href={telLink()}
                className="flex w-full items-center justify-center rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition hover:border-cream/60 sm:w-auto"
              >
                Gọi {site.phone}
              </a>
            </div>

            <dl className="mx-auto mt-14 grid max-w-3xl gap-8 border-t border-cream/12 pt-10 sm:grid-cols-3">
              {DETAILS.map((d) => (
                <div key={d.label}>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-blush">
                    {d.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-cream/85">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
