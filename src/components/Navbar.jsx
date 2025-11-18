import { ShoppingCart, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onSearch, onOpenCart, cartCount = 0 }) {
  const [term, setTerm] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-transparent">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="inline-grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-orange-400 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500">Playful Craft</span>
          </a>

          <form onSubmit={submit} className="hidden md:flex items-center gap-2 ml-auto w-full max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search plushies, wooden toys, puzzles..."
                className="w-full pl-9 pr-12 py-2.5 rounded-full border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
              />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: term ? 1 : 0 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500"
              >
                Enter ↵
              </motion.span>
            </div>
            <button type="submit" className="px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow hover:brightness-105 active:brightness-95">Search</button>
          </form>

          <button onClick={onOpenCart} className="ml-auto md:ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            <span className="ml-1 inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-white text-slate-900 text-xs font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </motion.div>
    </header>
  );
}
