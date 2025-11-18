export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Handmade toys for little imaginations
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Ethically crafted plushies, wooden puzzles and sensory play – made with natural materials and lots of love.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#catalog" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Shop collection</a>
              <a href="#about" className="px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400">Why handmade?</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-3xl object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-square mt-8" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-square" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-[4/5] mt-8" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
          </div>
        </div>
      </div>
    </section>
  )
}
