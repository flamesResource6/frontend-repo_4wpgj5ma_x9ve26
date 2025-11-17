export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(244,114,182,0.25),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium">Family Owned • NYC • Since 1998</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Warm, bespoke slipcovers and upholstery crafted for your home
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We design, measure and fit in your space — bringing a friendly, careful touch to every room.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">Request a quote</a>
              <a href="tel:19177769640" className="rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition">Call 917-776-9640</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Sun–Thu, 9am–6pm • davidsslipcovers@yahoo.com</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1600&auto=format&fit=crop" alt="Cozy living room with custom slipcovers" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">In-home consultations</p>
              <p className="text-xs text-slate-500">We come to you for measurements and fabric guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
