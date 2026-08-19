import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        scrolled || open ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-[15px] font-serif text-paper">
            O
          </span>
          <span className="hidden text-[12px] font-medium tracking-[0.18em] uppercase text-paper/80 sm:block">
            Okolo Uchenna
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-mist transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-paper/15 bg-paper px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-ink transition hover:bg-accent"
          >
            Let’s talk
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-paper transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-full bg-paper transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink/95 px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-paper px-5 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-ink"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
