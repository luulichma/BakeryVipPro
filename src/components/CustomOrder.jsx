import Reveal from './Reveal'
import ZaloIcon from './ZaloIcon'
import { zaloLink } from '../lib/site'

// Đây là một trình tự thật — khách phải đi đúng thứ tự này — nên đánh số là hợp lý.
const STEPS = [
  {
    n: '01',
    title: 'Chọn cỡ bánh và vị',
    body: 'Bánh tròn 16cm, 20cm hoặc bánh tầng. Cốt vani, cacao hoặc trà xanh; kem tươi hoặc kem bơ.',
  },
  {
    n: '02',
    title: 'Nhắn Zalo trước 2 ngày',
    body: 'Gửi ảnh mẫu bạn thích và dòng chữ muốn viết lên bánh. Tiệm báo giá và chốt giờ lấy trong ngày.',
  },
  {
    n: '03',
    title: 'Ghé lấy hoặc giao tận nơi',
    body: 'Bánh hoàn thiện trước giờ hẹn 30 phút. Giao trong nội thành, tính phí theo quãng đường.',
  },
]

export default function CustomOrder() {
  return (
    <section id="dat-banh" className="scroll-mt-24 bg-blush-soft/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/banh-tang-dau.jpg"
                alt="Bánh kem ba tầng phủ dâu tây và việt quất"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raspberry">
                Đặt bánh riêng
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-cocoa sm:text-5xl">
                Bánh sinh nhật làm theo ý bạn
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cocoa-soft">
                Không có mẫu cố định. Bạn tả bánh bạn muốn, tiệm làm đúng như vậy.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-7">
              {STEPS.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 110} className="flex gap-5">
                  <span className="font-display text-2xl font-semibold text-blush">{step.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-cocoa">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cocoa-soft">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={340}>
              <a
                href={zaloLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-raspberry px-7 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-raspberry-deep"
              >
                <ZaloIcon className="h-4 w-4" />
                Gửi mẫu bánh qua Zalo
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
