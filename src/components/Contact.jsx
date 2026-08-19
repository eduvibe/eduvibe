import { useState } from 'react'
import { profile } from '../data'
import { useInView } from '../hooks'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const mailto = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.org}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative border-t border-white/5 py-24 md:py-32">
      <div ref={ref} className={`mx-auto grid max-w-page gap-14 px-5 md:grid-cols-12 md:px-8 ${inView ? 'in' : ''} reveal`}>
        <div className="md:col-span-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-gold">Contact</p>
          <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] text-paper">
            Let’s digitize a school — or build the next practical product.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-mist">
            School owners, educators, EdTech founders, and businesses looking to ship software that
            works in the real world — write, call, or WhatsApp.
          </p>

          <ul className="mt-10 space-y-4 text-[15px]">
            <li>
              <a href={`mailto:${profile.email}`} className="link-line text-paper">
                {profile.email}
              </a>
            </li>
            <li>
              <a href="tel:+2348059403939" className="link-line text-paper">
                {profile.phone}
              </a>
              <span className="text-mist"> · </span>
              <a href="tel:+2348067819642" className="link-line text-paper">
                {profile.phoneAlt}
              </a>
            </li>
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="link-line text-whats">
                WhatsApp · +234 805 940 3939
              </a>
            </li>
            <li className="text-mist">{profile.address}</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-[12px] uppercase tracking-[0.16em] text-mist hover:text-paper"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-[12px] uppercase tracking-[0.16em] text-mist hover:text-paper"
            >
              LinkedIn
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-[12px] uppercase tracking-[0.16em] text-mist hover:text-paper"
            >
              EduMax
            </a>
          </div>
        </div>

        <form
          className="md:col-span-7"
          onSubmit={(e) => {
            e.preventDefault()
            mailto()
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-mist">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-paper outline-none ring-accent/40 placeholder:text-white/20 focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-mist">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-paper outline-none ring-accent/40 placeholder:text-white/20 focus:ring-2"
                placeholder="you@school.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-mist">School or company</span>
            <input
              name="org"
              value={form.org}
              onChange={onChange}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-paper outline-none ring-accent/40 placeholder:text-white/20 focus:ring-2"
              placeholder="EduMax, PrimePortal, …"
            />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-mist">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-paper outline-none ring-accent/40 placeholder:text-white/20 focus:ring-2"
              placeholder="Tell me about the school, the product, or the problem."
            />
          </label>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-paper px-6 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-ink transition hover:bg-accent"
            >
              Send email
            </button>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-whats/40 px-6 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-whats transition hover:bg-whats hover:text-ink"
            >
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
