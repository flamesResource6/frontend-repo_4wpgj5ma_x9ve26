import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <Navbar />
      <Hero />
      <Sections />

      {/* Slim intro sections kept for SEO and anchor targets */}
      <section id="slipcovers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Slipcovers</h2>
        <p className="mt-2 text-slate-600">Custom-fitted slipcovers tailored to your furniture and lifestyle. Durable, washable, and made with care. Learn more on our dedicated page.</p>
        <a href="/slipcovers" className="mt-3 inline-block text-amber-700 font-medium">Explore Slipcovers →</a>
      </section>

      <section id="upholstery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Upholstery</h2>
        <p className="mt-2 text-slate-600">Refresh or restore your favorite pieces with expert upholstery services.</p>
        <a href="/upholstery" className="mt-3 inline-block text-amber-700 font-medium">Explore Upholstery →</a>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-2 text-slate-600">We’re a family business working in New York homes for over two decades. Friendly service, meticulous work.</p>
        <a href="/about" className="mt-3 inline-block text-amber-700 font-medium">Our Story →</a>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="mt-2 text-slate-600">A look at recent projects and transformations.</p>
        <a href="/gallery" className="mt-3 inline-block text-amber-700 font-medium">See Photos →</a>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="mt-2 text-slate-600">Tips on fabrics, maintenance, and styling.</p>
        <a href="/blog" className="mt-3 inline-block text-amber-700 font-medium">Read Posts →</a>
      </section>

      <CTA />

      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} David's Custom Slip Covers</p>
          <div className="text-sm text-slate-600">
            <a href="mailto:davidsslipcovers@yahoo.com" className="hover:text-slate-900">davidsslipcovers@yahoo.com</a>
            <span className="mx-3">•</span>
            <a href="tel:19177769640" className="hover:text-slate-900">917-776-9640</a>
            <span className="mx-3">•</span>
            <span>Sun–Thu, 9am–6pm</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
