const PHOTOS = [
  { src: '/images/macaron.jpg', alt: 'Macaron nhiều màu xếp sát nhau' },
  { src: '/images/panna-cotta-dau.jpg', alt: 'Panna cotta dâu trong hũ thuỷ tinh' },
  { src: '/images/banh-socola.jpg', alt: 'Bánh kem socola phủ ganache' },
  { src: '/images/cupcake-vani.jpg', alt: 'Cupcake vani rắc cốm màu' },
  { src: '/images/tiramisu.jpg', alt: 'Miếng tiramisu cắt lộ từng lớp' },
  { src: '/images/cupcake-bac-ha.jpg', alt: 'Cupcake kem bạc hà rắc cốm đường' },
  { src: '/images/banh-tang-dau.jpg', alt: 'Bánh kem ba tầng phủ dâu và việt quất' },
  { src: '/images/cupcake-socola-bacha.jpg', alt: 'Cupcake socola kem bạc hà' },
]

export default function PhotoRibbon() {
  const strip = [...PHOTOS, ...PHOTOS]

  return (
    <div className="ribbon relative overflow-hidden py-2">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />

      <ul className="ribbon-track flex w-max gap-4">
        {strip.map((photo, i) => (
          <li key={i} className="shrink-0">
            <img
              src={photo.src}
              alt={i < PHOTOS.length ? photo.alt : ''}
              aria-hidden={i >= PHOTOS.length}
              loading="lazy"
              decoding="async"
              className="h-40 w-56 rounded-2xl object-cover sm:h-52 sm:w-72"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
