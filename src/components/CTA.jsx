export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-amber-50 rounded-2xl p-8 ring-1 ring-amber-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Tell us about your project</h2>
            <p className="mt-2 text-slate-700">Send a note and we’ll get right back to you, usually the same day.</p>
            <ul className="mt-4 text-slate-700 text-sm space-y-1">
              <li>Email: <a className="font-semibold" href="mailto:davidsslipcovers@yahoo.com">davidsslipcovers@yahoo.com</a></li>
              <li>Phone: <a className="font-semibold" href="tel:19177769640">917-776-9640</a></li>
              <li>Hours: Sun–Thu, 9am–6pm</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-amber-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="(optional)" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Project details</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Tell us what you have in mind" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">Send message</button>
            <p className="mt-2 text-xs text-slate-500">We’ll email or call you back to schedule a visit.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
