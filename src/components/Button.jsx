/**
 * Nút dùng chung cho cả trang. Mọi CTA phải đi qua đây —
 * trước đó mỗi chỗ tự đặt đệm riêng nên 9 nút ra 5 cỡ khác nhau.
 */
const SIZES = {
  sm: 'px-4 py-2 text-[0.8125rem] gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-[0.9375rem] gap-2.5',
}

const VARIANTS = {
  primary:
    'bg-raspberry text-cream hover:bg-raspberry-deep shadow-[0_10px_26px_-14px_rgba(196,87,107,0.95)]',
  dark: 'bg-cocoa text-cream hover:bg-cocoa/88',
  outline: 'border border-cocoa/18 text-cocoa hover:border-cocoa/45 hover:bg-cocoa/5',
  soft: 'bg-blush-soft text-raspberry hover:bg-blush hover:text-cocoa',
  light: 'bg-cream text-cocoa hover:bg-blush',
  outlineLight: 'border border-cream/30 text-cream hover:border-cream/70 hover:bg-cream/10',
}

export default function Button({
  size = 'md',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition duration-200 hover:-translate-y-px ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
