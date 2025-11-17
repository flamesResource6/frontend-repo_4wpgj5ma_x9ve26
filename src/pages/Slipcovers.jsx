import { Link } from 'react-router-dom'

export default function Slipcovers() {
  const perks = [
    { title: 'Washable & practical', text: 'Designed for everyday life with kids and pets.' },
    { title: 'Tailored fit', text: 'Measured and patterned to your exact furniture.' },
    { title: 'Fabric guidance', text: 'We help you choose durable, beautiful textiles.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Slipcovers</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Custom Slipcovers</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Refresh your furniture with fitted covers that protect and elevate your space. Made for your home, installed by us.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop" alt="Sofa with fresh white slipcovers" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why slipcovers</h2>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              {perks.map(p => (
                <li key={p.title}><span className="font-semibold">{p.title}:</span> {p.text}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="/#contact" className="rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">Request a quote</a>
              <a href="tel:19177769640" className="rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition">Call 917-776-9640</a>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Typical timeline</h3>
          <p className="mt-2 text-slate-600">From measurement to install usually takes 1–3 weeks depending on fabric availability and scope.</p>
        </section>
      </main>
    </div>
  )
}
