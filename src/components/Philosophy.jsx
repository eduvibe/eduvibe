import { building, focus, principles } from '../data'
import { useInView } from '../hooks'

function CodeLine({ children }) {
  return <div className="min-h-[1.35em]">{children}</div>
}

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section id="focus" className="relative border-t border-white/5 py-24 md:py-32">
      <div ref={ref} className={`mx-auto max-w-page px-5 md:px-8 ${inView ? 'in' : ''} reveal`}>
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">Why work with me</p>
        <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] text-paper">
          A teacher who ships. A founder who still writes the code.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="bg-ink p-7 md:p-8">
              <h3 className="font-serif text-[1.6rem] text-paper">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-paper">Currently building</h3>
            <ul className="mt-5 space-y-3">
              {building.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper">Tech focus</h3>
            <ul className="mt-5 space-y-3">
              {focus.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0e13] p-6 font-mono text-[12.5px] leading-relaxed md:p-8">
            <CodeLine>
              <span className="text-[#c678dd]">const</span> <span className="text-accent">OkoloUchenna</span>
              <span className="text-mist"> = {'{'}</span>
            </CodeLine>
            <CodeLine>
              <span className="text-paper/70">  role</span>
              <span className="text-mist">: </span>
              <span className="text-gold">"Software Developer | EdTech Builder | CS Educator"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-paper/70">  location</span>
              <span className="text-mist">: </span>
              <span className="text-gold">"Nigeria"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-paper/70">  company</span>
              <span className="text-mist">: </span>
              <span className="text-gold">"Founder & CEO @ EduMax Solutions"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-paper/70">  mission</span>
              <span className="text-mist">: </span>
              <span className="text-gold">"Transforming education through practical technology"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-paper/70">  openTo</span>
              <span className="text-mist">: [</span>
            </CodeLine>
            <CodeLine>
              <span className="text-gold">    "EdTech collaborations"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-gold">    "School digitization projects"</span>
              <span className="text-mist">,</span>
            </CodeLine>
            <CodeLine>
              <span className="text-gold">    "Freelance EdTech consulting"</span>
            </CodeLine>
            <CodeLine>
              <span className="text-mist">  ]</span>
            </CodeLine>
            <CodeLine>
              <span className="text-mist">{'};'}</span>
            </CodeLine>
          </div>
        </div>
      </div>
    </section>
  )
}
