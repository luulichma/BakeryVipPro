import ZaloIcon from './ZaloIcon'
import { zaloLink } from '../lib/site'

/** Một quả dâu nhỏ đặt trên mặt bánh. */
function Berry({ x, y, scale = 1, rotate = 0, delay }) {
  return (
    <g
      className="cake-layer"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`}
    >
      <path
        d="M0 0c5.4 0 9 3.4 9 8 0 6.2-5.2 12-9 12s-9-5.8-9-12c0-4.6 3.6-8 9-8Z"
        fill="#C4576B"
      />
      <path d="M-1.6-1.5c-2.6-2.4-6-2.8-8.2-1.6 1 2.4 3.6 4 6.4 4Z" fill="#8FAE7A" />
      <path d="M1.6-1.5c2.6-2.4 6-2.8 8.2-1.6-1 2.4-3.6 4-6.4 4Z" fill="#8FAE7A" />
      <circle cx="-3" cy="6" r="0.9" fill="#F3E3C3" opacity="0.9" />
      <circle cx="2.6" cy="9" r="0.9" fill="#F3E3C3" opacity="0.9" />
      <circle cx="-1" cy="12.5" r="0.9" fill="#F3E3C3" opacity="0.9" />
    </g>
  )
}

/**
 * Điểm ký ức của trang: chiếc bánh tự xếp tầng khi tải trang,
 * và nút Zalo chính là cái topper cắm trên đỉnh bánh.
 */
export default function CakeStack() {
  return (
    <div className="relative mx-auto flex w-full max-w-[26rem] flex-col items-center">
      {/* Topper — đây là nút CTA thật, không phải hình vẽ */}
      <div className="cake-topper z-10 flex flex-col items-center" style={{ animationDelay: '1.25s' }}>
        <div className="cake-topper-sway flex flex-col items-center">
          <a
            href={zaloLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-raspberry px-6 py-3 text-[0.95rem] font-semibold text-cream shadow-[0_10px_28px_-8px_rgba(196,87,107,0.75)] transition hover:-translate-y-0.5 hover:bg-raspberry-deep"
          >
            <ZaloIcon className="h-5 w-5" />
            Nhắn Zalo đặt bánh
          </a>
          <span aria-hidden="true" className="h-8 w-[3px] rounded-full bg-cocoa/35" />
        </div>
      </div>

      <svg
        viewBox="0 96 400 300"
        className="-mt-1 w-full drop-shadow-[0_24px_36px_rgba(74,47,42,0.13)]"
        role="img"
        aria-label="Bánh kem ba tầng của Tiệm bánh Timu"
      >
        {/* Dâu trên mặt */}
        <Berry x={168} y={104} scale={0.85} rotate={-8} delay={1.05} />
        <Berry x={200} y={99} scale={1} rotate={2} delay={1.1} />
        <Berry x={232} y={106} scale={0.8} rotate={9} delay={1.15} />

        {/* Kem phủ mặt bánh, viền lượn sóng */}
        <path
          className="cake-layer"
          style={{ animationDelay: '0.92s' }}
          d="M112 118h176v12a11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0Z"
          fill="#FFF9F6"
        />

        {/* Tầng trên */}
        <g className="cake-layer" style={{ animationDelay: '0.78s' }}>
          <rect x="116" y="128" width="168" height="64" rx="7" fill="#F6C9C6" />
          <rect x="116" y="128" width="168" height="64" rx="7" fill="url(#sheen)" />
        </g>

        {/* Lớp kem giữa tầng trên và tầng giữa */}
        <rect
          className="cake-layer"
          style={{ animationDelay: '0.64s' }}
          x="84" y="184" width="232" height="15" rx="7.5" fill="#FFF9F6"
        />

        {/* Tầng giữa */}
        <g className="cake-layer" style={{ animationDelay: '0.48s' }}>
          <rect x="88" y="196" width="224" height="72" rx="7" fill="#FDECEB" />
          <rect x="88" y="196" width="224" height="72" rx="7" fill="url(#sheen)" />
          <g fill="#C4576B" opacity="0.55">
            <rect x="122" y="222" width="9" height="3.4" rx="1.7" transform="rotate(-24 122 222)" />
            <rect x="168" y="234" width="9" height="3.4" rx="1.7" transform="rotate(16 168 234)" />
            <rect x="214" y="216" width="9" height="3.4" rx="1.7" transform="rotate(-9 214 216)" />
            <rect x="252" y="238" width="9" height="3.4" rx="1.7" transform="rotate(31 252 238)" />
          </g>
          <g fill="#8FAE7A" opacity="0.5">
            <rect x="146" y="248" width="9" height="3.4" rx="1.7" transform="rotate(8 146 248)" />
            <rect x="238" y="210" width="9" height="3.4" rx="1.7" transform="rotate(-30 238 210)" />
          </g>
        </g>

        {/* Lớp kem chảy xuống tầng đáy */}
        <path
          className="cake-layer"
          style={{ animationDelay: '0.34s' }}
          d="M58 260h284v14a7 7 0 0 1-7 7h-9v10a6 6 0 0 1-12 0v-10h-46v16a6 6 0 0 1-12 0v-16h-62v11a6 6 0 0 1-12 0v-11h-46v14a6 6 0 0 1-12 0v-14h-59a7 7 0 0 1-7-7Z"
          fill="#FFF9F6"
        />

        {/* Tầng đáy */}
        <g className="cake-layer" style={{ animationDelay: '0.18s' }}>
          <rect x="62" y="272" width="276" height="88" rx="8" fill="#F6C9C6" />
          <rect x="62" y="272" width="276" height="88" rx="8" fill="url(#sheen)" />
        </g>

        {/* Đế bánh */}
        <g className="cake-layer" style={{ animationDelay: '0.05s' }}>
          <ellipse cx="200" cy="366" rx="168" ry="19" fill="#F3E3C3" />
          <ellipse cx="200" cy="361" rx="168" ry="19" fill="#FBF0DA" />
        </g>

        <defs>
          <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2F2A" stopOpacity="0.07" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
