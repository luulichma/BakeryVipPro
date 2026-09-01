import { site } from '../lib/site'

/**
 * Chữ ký của tiệm: tên đặt trên một đường kem bắt tay,
 * nét kem tự vẽ ra khi tải trang.
 */
export default function Logo() {
  return (
    <a href="#top" className="group flex items-end gap-3">
      <span className="relative block">
        <span
          className="block font-display text-[1.7rem] leading-none font-semibold text-raspberry sm:text-[1.95rem]"
          style={{ fontVariationSettings: '"opsz" 120, "SOFT" 80, "WONK" 1', letterSpacing: '-0.035em' }}
        >
          {site.name}
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 92 12"
          preserveAspectRatio="none"
          className="mt-1 block h-2.5 w-full overflow-visible"
        >
          <path
            className="icing"
            d="M2 8C10 1.5 17 10.5 25 7.5S40 1 48 6s16 6 24 1.5S88 3 90 6.5"
            pathLength="100"
            fill="none"
            stroke="#EFA9A7"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span
        className="hidden pb-1 font-display text-[0.8rem] text-cocoa-soft italic sm:block"
        style={{ fontVariationSettings: '"opsz" 14, "SOFT" 60, "WONK" 1' }}
      >
        tiệm bánh
      </span>
    </a>
  )
}
