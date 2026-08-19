import { capabilities } from '../data'
import { useInView } from '../hooks'

export default function Capabilities() {
  const [ref, inView] = useInView()

  return (
    <section id="build" className="relative border-t border-white/5 py-24 md:py-32">
      <div ref={ref} className={`mx-auto max-w-page px-5 md:px-8 ${inView ? 'in' : ''} reveal`}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">What I build</p>
            <h2 className="mt-3 max-w-xl font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] text-paper">
              Practical systems for schools that cannot wait for perfect conditions.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-mist">
            From the exam hall to the bursar’s desk. If a teacher, parent, or principal has to fight
            the software, it is not finished.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.num} className="bg-ink p-7 transition hover:bg-[#0e1016] md:p-8">
              <p className="font-mono text-[12px] text-gold">{item.num}</p>
              <h3 className="mt-4 font-serif text-[1.55rem] leading-tight text-paper">{item.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-mist">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
