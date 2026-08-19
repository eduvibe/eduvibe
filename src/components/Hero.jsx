import { useEffect, useState } from 'react'
import { profile } from '../data'
import { useTyped, useWatClock } from '../hooks'

const CARD = `┌──────────────────────────────────────────────┐
│  OKOLO UCHENNA MAXWELL                       │
│  Software Developer  •  EdTech Builder       │
│  Computer Science Educator                   │
└──────────────────────────────────────────────┘`

export default function Hero() {
  const time = useWatClock()
  const [prompt, promptDone] = useTyped('whoami', { speed: 70, delay: 280 })
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    if (!promptDone) return undefined
    const id = setTimeout(() => setShowCard(true), 160)
    return () => clearTimeout(id)
  }, [promptDone])

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-lab.jpg"
          alt="A Nigerian school computer laboratory — the rooms this software is built for."
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/20" />
        <div className="grid-fade absolute inset-0 opacity-70" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-20 md:pt-28">
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist rise">
          <span className="inline-flex items-center gap-2 text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_#c4a574]" />
            Available for EdTech projects
          </span>
          <span className="hidden text-white/20 sm:inline">/</span>
          <span>Ogun · Nigeria</span>
          <span className="hidden text-white/20 sm:inline">/</span>
          <span className="tabular-nums">{time ? `${time} WAT` : 'WAT'}</span>
        </div>

        <div
          className="terminal-glow rise max-w-[640px] overflow-hidden rounded-xl border border-white/10 bg-[#0c0e13]/85 backdrop-blur-md"
          style={{ animationDelay: '120ms' }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-mist">okolo@edumax — zsh</span>
          </div>

          <div className="px-4 py-5 font-mono text-[12px] leading-relaxed text-paper/90 sm:px-6 sm:text-[13.5px]">
            <p className="text-mist">
              <span className="text-gold">okolo@edumax</span>
              <span className="text-white/30">:</span>
              <span className="text-accent">~</span>
              <span className="text-white/30">$ </span>
              <span>{prompt}</span>
              {!promptDone && <span className="cursor-blink" />}
            </p>

            {showCard && (
              <div className="mt-4 rise">
                <pre className="hidden overflow-x-auto whitespace-pre text-paper sm:block">{CARD}</pre>
                <div className="rounded-md border border-paper/20 px-4 py-4 sm:hidden">
                  <p className="text-[15px] font-semibold tracking-wide text-paper">OKOLO UCHENNA MAXWELL</p>
                  <p className="mt-2 text-[12px] text-mist">Software Developer • EdTech Builder</p>
                  <p className="text-[12px] text-mist">Computer Science Educator</p>
                </div>

                <p className="mt-5 text-[13px] text-paper">{profile.title}</p>
                <p className="text-[13px] text-gold">{profile.tenure}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] text-accent transition hover:bg-accent hover:text-ink"
                  >
                    www.edumaxsolutions.com.ng
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-[11px] text-paper/80 transition hover:border-paper/40 hover:text-paper"
                  >
                    info@edumaxsolutions.com.ng
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-whats/40 bg-whats/10 px-3 py-1.5 text-[11px] text-whats transition hover:bg-whats hover:text-ink"
                  >
                    WhatsApp · 2348059403939
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 max-w-3xl rise" style={{ animationDelay: '280ms' }}>
          <h1 className="font-serif text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] tracking-[-0.02em] text-paper">
            If it doesn’t work
            <br />
            without internet —
            <span className="italic text-gold"> it doesn’t work.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-mist md:text-[17px]">
            I build offline-first software for Nigerian schools: CBT, LMS, and school portals
            designed by someone who has taught in the room and run the office.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 rise" style={{ animationDelay: '420ms' }}>
          <a
            href="#work"
            className="rounded-full bg-paper px-6 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-ink transition hover:bg-accent"
          >
            Selected work
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/15 px-6 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-paper transition hover:border-paper/50"
          >
            About Okolo
          </a>
        </div>
      </div>
    </section>
  )
}
