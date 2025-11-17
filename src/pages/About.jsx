import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">About</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">About Us</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">A family business serving New York homes for over two decades. We care about comfort, durability, and making rooms feel like you.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Our story</h2>
            <p className="mt-2 text-slate-700">We started with a simple promise: treat every home with the same care as our own. From measuring to installation, we bring a friendly, meticulous approach that makes the process easy.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">What we value</h2>
            <ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
              <li>Quality workmanship</li>
              <li>Clear communication</li>
              <li>Respect for your time and space</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <p className="mt-2 text-sm text-slate-700">Sun–Thu, 9am–6pm</p>
            <p className="text-sm text-slate-700"><a className="font-semibold" href="mailto:davidsslipcovers@yahoo.com">davidsslipcovers@yahoo.com</a></p>
            <p className="text-sm text-slate-700"><a className="font-semibold" href="tel:19177769640">917-776-9640</a></p>
          </div>
        </aside>
      </main>
    </div>
  )
}
