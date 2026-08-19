import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-serif text-2xl italic text-paper">
            “Teach without limits. Test without bias. Trusted tech for true student performance.”
          </p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-gold">EduMax philosophy</p>
        </div>
        <div className="text-[12px] uppercase tracking-[0.16em] text-mist">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="mt-1">Crafted for education · Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
