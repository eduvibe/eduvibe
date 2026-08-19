import { stack } from '../data'
import { useInView } from '../hooks'

export default function Stack() {
  const [ref, inView] = useInView()

  return (
    <section id="stack" className="relative border-t border-white/5 py-24 md:py-32">
      <div ref={ref} className={`mx-auto max-w-page px-5 md:px-8 ${inView ? 'in' : ''} reveal`}>
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">Tech stack</p>
        <h2 className="mt-3 max-w-xl font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] text-paper">
          Tools chosen for reliability, not fashion.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-paper">{group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-mist"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
