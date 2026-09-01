import Button from './Button'
import ZaloIcon from './ZaloIcon'
import { zaloLink } from '../lib/site'

const LINE = { stroke: 'var(--color-cocoa)', strokeOpacity: 0.16, strokeWidth: 1.6, fill: 'none' }

function Berry({ x, y, scale = 1, rotate = 0, delay }) {
  return (
    <g
      className="cake-layer"
      style={{ animationDelay: `${delay}s` }}
      transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`}
    >
      <path
        d="M0 0c5.4 0 9 3.4 9 8 0 6.2-5.2 12-9 12s-9-5.8-9-12c0-4.6 3.6-8 9-8Z"
        fill="var(--color-raspberry)"
      />
      <path d="M-1.6-1.5c-2.6-2.4-6-2.8-8.2-1.6 1 2.4 3.6 4 6.4 4Z" fill="#7E9B6A" />
      <path d="M1.6-1.5c2.6-2.4 6-2.8 8.2-1.6-1 2.4-3.6 4-6.4 4Z" fill="#7E9B6A" />
      <g fill="var(--color-butter)">
        <circle cx="-3" cy="6" r="0.9" />
        <circle cx="2.6" cy="9" r="0.9" />
        <circle cx="-1" cy="12.5" r="0.9" />
      </g>
    </g>
  )
}

/**
 * Điểm ký ức của trang: chiếc bánh tự xếp tầng khi tải trang,
 * và nút Zalo chính là cái topper cắm trên đỉnh bánh.
 *
 * Tầng giữa để lộ mặt cắt cốt bánh — đây là mảng đậm duy nhất,
 * giữ cho cả chiếc bánh không chìm vào nền kem nhạt.
 */
export default function CakeStack() {
  return (
    <div className="relative mx-auto flex w-full max-w-[26rem] flex-col items-center">
      <div className="cake-topper z-10 flex flex-col items-center" style={{ animationDelay: '1.3s' }}>
        <div className="cake-topper-sway flex flex-col items-center">
          <Button href={zaloLink()} target="_blank" rel="noopener noreferrer" size="lg" variant="primary">
            <ZaloIcon className="h-5 w-5" />
            Nhắn Zalo đặt bánh
          </Button>
          <span aria-hidden="true" className="h-8 w-[3px] rounded-full bg-cocoa/35" />
        </div>
      </div>

      <svg
        viewBox="0 96 400 306"
        className="-mt-1 w-full"
        role="img"
        aria-label="Bánh kem ba tầng của Tiệm bánh Mitu"
      >
        <defs>
          <clipPath id="mid-tier">
            <rect x="88" y="196" width="224" height="72" rx="7" />
          </clipPath>
          <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.34" />
            <stop offset="0.4" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2F2A" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Bóng đổ trên mặt bàn */}
        <ellipse cx="200" cy="374" rx="150" ry="15" fill="var(--color-cocoa)" opacity="0.07" />

        {/* Đĩa — vẽ trước nên nằm sau bánh, chỉ thấy vành trước */}
        <g className="cake-layer" style={{ animationDelay: '0.05s' }}>
          <ellipse cx="200" cy="366" rx="170" ry="20" fill="var(--color-butter)" />
          <ellipse cx="200" cy="362" rx="170" ry="20" fill="#FBF0DA" />
          <ellipse cx="200" cy="362" rx="170" ry="20" {...LINE} />
        </g>

        {/* Tầng đáy — kem hồng bọc ngoài */}
        <g className="cake-layer" style={{ animationDelay: '0.18s' }}>
          <rect x="62" y="272" width="276" height="88" rx="8" fill="var(--color-cake-frosting)" />
          <rect x="62" y="272" width="276" height="88" rx="8" fill="url(#sheen)" />
          <rect x="62" y="272" width="276" height="88" rx="8" {...LINE} />
        </g>

        {/* Kem chảy tràn xuống tầng đáy */}
        <path
          className="cake-layer"
          style={{ animationDelay: '0.34s' }}
          d="M58 258h284v16a7 7 0 0 1-7 7h-9v10a6 6 0 0 1-12 0v-10h-46v16a6 6 0 0 1-12 0v-16h-62v11a6 6 0 0 1-12 0v-11h-46v14a6 6 0 0 1-12 0v-14h-59a7 7 0 0 1-7-7Z"
          fill="var(--color-cake-cream)"
          stroke="var(--color-cocoa)"
          strokeOpacity="0.16"
          strokeWidth="1.6"
        />

        {/* Tầng giữa — mặt cắt lộ cốt bánh */}
        <g className="cake-layer" style={{ animationDelay: '0.48s' }}>
          <g clipPath="url(#mid-tier)">
            <rect x="88" y="196" width="224" height="22" fill="var(--color-cake-sponge)" />
            <rect x="88" y="218" width="224" height="9" fill="var(--color-cake-cream)" />
            <rect x="88" y="227" width="224" height="18" fill="var(--color-cake-cacao)" />
            <rect x="88" y="245" width="224" height="9" fill="var(--color-cake-cream)" />
            <rect x="88" y="254" width="224" height="14" fill="var(--color-cake-sponge)" />
            <g fill="#fff" opacity="0.22">
              <ellipse cx="132" cy="206" rx="5" ry="3" />
              <ellipse cx="212" cy="210" rx="4" ry="2.4" />
              <ellipse cx="268" cy="203" rx="5.5" ry="3" />
              <ellipse cx="160" cy="236" rx="4.5" ry="2.6" />
              <ellipse cx="246" cy="238" rx="5" ry="2.8" />
              <ellipse cx="118" cy="260" rx="4" ry="2.4" />
              <ellipse cx="284" cy="259" rx="4.5" ry="2.6" />
            </g>
          </g>
          <rect x="88" y="196" width="224" height="72" rx="7" fill="url(#sheen)" />
          <rect x="88" y="196" width="224" height="72" rx="7" {...LINE} />
        </g>

        {/* Lớp kem giữa tầng trên và tầng giữa */}
        <rect
          className="cake-layer"
          style={{ animationDelay: '0.64s' }}
          x="84" y="182" width="232" height="16" rx="8"
          fill="var(--color-cake-cream)"
          stroke="var(--color-cocoa)" strokeOpacity="0.16" strokeWidth="1.6"
        />

        {/* Tầng trên */}
        <g className="cake-layer" style={{ animationDelay: '0.78s' }}>
          <rect x="116" y="126" width="168" height="60" rx="7" fill="var(--color-cake-frosting)" />
          <rect x="116" y="126" width="168" height="60" rx="7" fill="url(#sheen)" />
          <rect x="116" y="126" width="168" height="60" rx="7" {...LINE} />
        </g>

        {/* Kem phủ mặt, viền lượn sóng */}
        <path
          className="cake-layer"
          style={{ animationDelay: '0.92s' }}
          d="M112 116h176v12a11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0 11 11 0 0 1-22 0Z"
          fill="var(--color-cake-cream)"
          stroke="var(--color-cocoa)"
          strokeOpacity="0.16"
          strokeWidth="1.6"
        />

        <Berry x={168} y={102} scale={0.85} rotate={-8} delay={1.06} />
        <Berry x={200} y={97} scale={1} rotate={2} delay={1.12} />
        <Berry x={232} y={104} scale={0.8} rotate={9} delay={1.18} />
      </svg>
    </div>
  )
}
