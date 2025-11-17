import { Link } from 'react-router-dom'

export default function Drapery() {
  const features = [
    {
      title: 'Custom Fit',
      text: 'Measured on site for a perfect hang, from ceiling mounts to inside returns.'
    },
    {
      title: 'Liners & Function',
      text: 'Sheer, room-darkening, or blackout liners to match the light you want.'
    },
    {
      title: 'Hardware & Install',
      text: 'Rods, tracks and rings, professionally installed with clean finishes.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Drapery & Curtains</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Drapery & Curtains</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Soft, tailored panels that frame your windows beautifully. We help with fabric selection, measure in-home, and install everything for a seamless finish.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616057732603-0439d9ace394?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3JlZCUyMGRyYXBlcnklMjBpbiUyMGF8ZW58MHwwfHx8MTc2MzQxNTUzNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tailored drapery in a light-filled living room" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our process</h2>
            <ol className="mt-4 space-y-3 text-slate-700">
              <li><span className="font-semibold">1. In-home visit:</span> We measure, discuss fabrics, and talk through function.</li>
              <li><span className="font-semibold">2. Fabric & hardware:</span> We help source textiles and select the right rods or tracks.</li>
              <li><span className="font-semibold">3. Sewing & install:</span> Your drapery is made to measure and installed neatly.</li>
            </ol>
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
