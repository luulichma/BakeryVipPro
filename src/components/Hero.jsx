import CakeStack from './CakeStack'
import { site, telLink } from '../lib/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Mảng kem hồng mờ làm nền */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-blush/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[30rem] w-[30rem] rounded-full bg-butter/45 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="reveal is-visible text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raspberry">
            {site.fullName}
          </p>

          <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-semibold text-cocoa sm:text-6xl lg:text-[4.2rem]">
            Mỗi ngày một mẻ.
            <span className="block text-raspberry">Hết là hết.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cocoa-soft sm:text-lg lg:mx-0">
            Mitu làm cupcake, bánh kem và tráng miệng theo mẻ nhỏ, nướng trong ngày.
            Chọn bánh rồi nhắn Zalo — tiệm giữ phần cho bạn.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#thuc-don"
              className="w-full rounded-full bg-cocoa px-7 py-3.5 text-center text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-cocoa/90 sm:w-auto"
            >
              Xem thực đơn hôm nay
            </a>
            <a
              href={telLink()}
              className="w-full rounded-full border border-cocoa/15 px-7 py-3.5 text-center text-sm font-semibold text-cocoa transition hover:border-cocoa/40 sm:w-auto"
            >
              Gọi {site.phone}
            </a>
          </div>

          <p className="mt-6 text-sm text-cocoa-soft/80">
            Mở cửa {site.hours} · Nhận đặt bánh sinh nhật trước 2 ngày
          </p>
        </div>

        <div className="pt-4 lg:pt-0">
          <CakeStack />
        </div>
      </div>
    </section>
  )
}
