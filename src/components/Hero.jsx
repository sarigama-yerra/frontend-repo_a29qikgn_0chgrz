import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-orange-50" />
        <div className="pointer-events-none absolute -top-48 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full bg-orange-200/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Joyful handmade toys for curious minds
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Ethically crafted plushies, wooden puzzles and sensory play – made with natural materials and lots of love.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#catalog" className="px-5 py-3 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow hover:brightness-105">Shop collection</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-slate-300 bg-white/60 hover:border-slate-400">Why handmade?</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-4">
            <img className="rounded-3xl object-cover aspect-[4/5] shadow-lg" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-square mt-8 shadow-lg" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-square shadow-lg" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-3xl object-cover aspect-[4/5] mt-8 shadow-lg" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
