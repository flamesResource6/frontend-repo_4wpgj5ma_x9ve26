import { Link } from 'react-router-dom'

const posts = [
  { title: 'Choosing fabrics for slipcovers', excerpt: 'Cotton, linen, and performance blends: what to consider for real life.', date: 'Oct 2024' },
  { title: 'Upholstery vs slipcovers', excerpt: 'When to recover and when a fitted cover makes more sense.', date: 'Sep 2024' },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/40 to-white text-slate-800">
      <header className="bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-slate-600">
            <Link className="hover:text-slate-900" to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Blog</span>
          </nav>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Blog</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">Tips and ideas to help you get the most from your fabrics and furnishings.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{p.date}</p>
              <p className="mt-2 text-slate-700">{p.excerpt}</p>
              <a href="/#contact" className="mt-3 inline-block text-amber-700 font-medium">Ask a question →</a>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
