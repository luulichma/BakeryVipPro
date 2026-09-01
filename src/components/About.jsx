import Reveal from './Reveal'
import PhotoRibbon from './PhotoRibbon'

export default function About() {
  return (
    <section id="ve-tiem" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raspberry">Về tiệm</p>
          <h2 className="mt-4 text-4xl font-semibold text-cocoa sm:text-5xl">
            Một lò nướng, hai bàn tay
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cocoa-soft sm:text-lg">
            Timu bắt đầu từ căn bếp nhà, nướng mẻ đầu tiên cho bạn bè. Bây giờ tiệm vẫn giữ
            đúng cách làm đó: kem đánh tay, trái cây mua buổi sáng, mỗi loại chỉ vài chục cái
            một ngày. Bánh ra lò lúc nào, tiệm đăng lúc đó.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14">
        <PhotoRibbon />
      </Reveal>
    </section>
  )
}
