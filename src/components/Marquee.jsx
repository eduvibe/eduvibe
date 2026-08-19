const items = [
  'CBT Systems',
  'School Portals',
  'Offline-First Apps',
  'LMS Platforms',
  'Exam Integrity',
  'Parent Communication',
  'Result Processing',
  'School Websites',
  'FinTech for SMEs',
  'Classroom Reality',
]

export default function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="relative border-y border-white/5 bg-black/30 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track gap-10 px-6">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 text-[12px] uppercase tracking-[0.28em] text-mist">
            {item}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
