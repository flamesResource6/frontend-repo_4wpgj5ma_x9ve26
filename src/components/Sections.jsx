import { Link } from 'react-router-dom'

export default function Sections() {
  const sections = [
    {
      to: '/drapery',
      title: 'Drapery & Curtains',
      copy: 'From airy sheers to blackout panels, we tailor drapery that frames your windows beautifully and functions perfectly.',
      image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcmFwZXJ5JTIwJTI2JTIwQ3VydGFpbnN8ZW58MHwwfHx8MTc2MzQxNDIzM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      to: '/services',
      title: 'Services',
      copy: 'Measuring, patterning, fitting, and installation—done with care in your home. We handle the details so you can relax.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
    },
    {
      to: '/slipcovers',
      title: 'Slipcovers',
      copy: 'Custom-fitted covers that refresh your furniture without reupholstering. Washable, durable, and made to last.',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    },
    {
      to: '/upholstery',
      title: 'Upholstery',
      copy: 'From heirloom pieces to everyday chairs, we restore comfort and style with new foam, webbing, and fabric.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <div className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
            <div className="aspect-video overflow-hidden">
              <img src={s.image} alt={s.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.copy}</p>
              <p className="mt-3 text-amber-700 font-medium">Learn more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
