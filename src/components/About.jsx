import { profile } from '../data'
import { useInView } from '../hooks'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="relative border-t border-white/5 py-24 md:py-32">
      <div ref={ref} className={`mx-auto grid max-w-page gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8 ${inView ? 'in' : ''} reveal`}>
        <div className="md:col-span-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">About</p>
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/about-desk.jpg"
              alt="A working desk: code, exam papers, and the tools of a teacher-developer."
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
                Educator · Founder · Builder
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-10">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-paper">
            Building technology that actually works in real classrooms and school offices.
          </h2>
          <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75] text-mist">
            <p>
              I’m <span className="text-paper">Okolo Uchenna Maxwell</span> — a software developer,
              EdTech builder, and computer science educator based in Nigeria. Founder & CEO of{' '}
              <a href={profile.companyUrl} className="link-line text-accent" target="_blank" rel="noreferrer">
                EduMax Solutions
              </a>
              , with more than six years in teaching and school management.
            </p>
            <p>
              I don’t just write code. I solve problems I’ve seen firsthand: unreliable internet,
              exam malpractice, manual result processing, parent communication gaps, and cash-based
              student spending.
            </p>
            <p>
              The mission is simple — deliver impactful, user-friendly,{' '}
              <span className="text-paper">offline-first</span> software that improves learning
              outcomes and streamlines school operations across Nigeria and beyond.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ['6+', 'Years in education'],
              ['04', 'Live products'],
              ['01', 'Flagship platform'],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="font-serif text-4xl text-paper md:text-5xl">{stat}</dt>
                <dd className="mt-1 text-[12px] uppercase tracking-[0.16em] text-mist">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
