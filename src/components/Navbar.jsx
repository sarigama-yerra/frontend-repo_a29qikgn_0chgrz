import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onSearch, onOpenCart }) {
  const [term, setTerm] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400" />
          Handmade Kids
        </a>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 ml-auto w-full max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search plushies, wooden toys, puzzles..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button type="submit" className="px-3 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700">Search</button>
        </form>

        <button onClick={onOpenCart} className="ml-auto md:ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </header>
  );
}
