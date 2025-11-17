import { Link } from 'react-router-dom'

export default function Upholstery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Upholstery</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Upholstery</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Restore comfort and style. We replace foam, repair frames, and recover your favorite pieces with durable fabrics.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {["Cushion refilling","Frame repair","Foam & webbing"].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-slate-600">Done with care to extend the life of your furniture and make it feel new again.</p>
            </div>
          ))}
        </div>

        <section className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Detail of reupholstered chair" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">How we work</h2>
            <ol className="mt-4 space-y-3 text-slate-700">
              <li><span className="font-semibold">1. Visit:</span> We examine the piece and confirm scope.</li>
              <li><span className="font-semibold">2. Materials:</span> We source foam, padding, and fabric that meet your needs.</li>
              <li><span className="font-semibold">3. Restore:</span> We rebuild, recover, and return it looking—and feeling—great.</li>
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
