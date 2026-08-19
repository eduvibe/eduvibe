import { projects } from '../data'
import { useInView } from '../hooks'

function Project({ project, flip }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      id={project.id}
      className={`grid items-center gap-8 border-t border-white/5 py-16 md:grid-cols-12 md:gap-12 md:py-24 ${
        inView ? 'in' : ''
      } reveal`}
    >
      <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-frame group block overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-card"
        >
          <img
            src={project.image}
            alt={`${project.name} product preview`}
            className="project-media aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </a>
        {project.imageAlt && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-frame mt-4 hidden overflow-hidden rounded-2xl border border-white/10 bg-panel sm:block"
          >
            <img
              src={project.imageAlt}
              alt={`${project.name} classroom exam interface`}
              className="project-media aspect-[16/8] w-full object-cover"
              loading="lazy"
            />
          </a>
        )}
      </div>

      <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-gold">
          {project.index}  /  {project.kicker}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.05] text-paper">
          {project.name}
        </h3>
        <p className="mt-3 text-[16px] leading-snug text-paper/85">{project.tagline}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-mist">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 text-[14px] text-paper/80">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: project.accent }} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.12em] uppercase"
          style={{ color: project.accent }}
        >
          {project.cta}
          <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-page px-5 pt-24 md:px-8 md:pt-32">
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">Selected work</p>
        <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-paper">
          Live products. Real schools. Real businesses.
        </h2>
        <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-mist">
          Flagship EdTech, school operations, finance, and brand — each one shipped and in use,
          not a weekend demo.
        </p>
      </div>
      <div className="mx-auto max-w-page px-5 md:px-8">
        {projects.map((project, i) => (
          <Project key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
