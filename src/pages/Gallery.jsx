import { Link } from 'react-router-dom'

const sampleImages = [
  'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616596874518-5d2e1a2a3fa9?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Gallery</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Gallery</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">A few examples of our recent work. We’re happy to show more photos during your in-home consultation.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleImages.map((src, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow">
              <img src={src} alt={`Project ${i+1}`} className="h-64 w-full object-cover group-hover:scale-[1.03] transition-transform" />
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/#contact" className="inline-flex rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">Request a quote</a>
        </div>
      </main>
    </div>
  )
}
