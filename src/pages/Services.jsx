import { Link } from 'react-router-dom'

export default function Services() {
  const items = [
    { title: 'In-home measurement', desc: 'We come to you, discuss style and function, and take precise measurements.' },
    { title: 'Patterning & sewing', desc: 'Tailored patterns and quality construction for a crisp, comfortable fit.' },
    { title: 'Installation', desc: 'We handle delivery, fitting, steaming and final touches in your space.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Services</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">We make custom slipcovers, drapery and upholstery easy—designed for real life and installed with care.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590926239780-317350f9c3bb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZWFzdXJpbmclMjBmYWJyaWMlMjBhdCUyMGhvbWV8ZW58MHwwfHx8MTc2MzQxNTUzNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Measuring fabric at home" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">What to expect</h2>
            <p className="mt-3 text-slate-700">Friendly, tidy visits and clear communication. We treat your home with care and keep timelines realistic.</p>
            <div className="mt-6 flex gap-3">
              <a href="/#contact" className="rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">Request a quote</a>
              <a href="tel:19177769640" className="rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition">Call 917-776-9640</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
