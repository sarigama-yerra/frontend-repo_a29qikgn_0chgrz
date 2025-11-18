import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const total = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (q) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/products/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: q || "", limit: 20, featured: undefined }),
      });
      const data = await res.json();
      setProducts(data.items || []);
    } catch (e) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (term) => {
    setSearch(term);
    fetchProducts(term);
  };

  const addToCart = (p) => {
    setCart((c) => {
      const idx = c.findIndex((x) => x._id === p._id);
      if (idx >= 0) {
        const next = [...c];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...c, { ...p, qty: 1 }];
    });
  };

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,193,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,200,150,0.25),transparent_50%)]">
      {/* Floating playful blobs */}
      <div className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.5, y: 0 }} transition={{ duration: 1 }} className="absolute left-[-6rem] top-[-6rem] h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 0.5, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute right-[-8rem] bottom-[-8rem] h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
      </div>

      <Navbar onSearch={onSearch} onOpenCart={() => window.alert(`Cart coming soon!\nItems: ${cart.length}\nTotal: $${total.toFixed(2)}`)} cartCount={cart.length} />
      <Hero />

      <section id="catalog" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Featured products
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="text-sm md:text-base text-slate-700 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
            {cart.length} items • ${total.toFixed(2)}
          </motion.div>
        </div>

        {loading && <p className="text-slate-600">Loading products…</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {products.map((p) => (
              <motion.div key={p._id} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <ProductCard product={p} onAdd={addToCart} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && !error && products.length === 0 && (
          <EmptyState onSeed={async () => {
            const demo = [
              {
                title: "Organic Cotton Plush Bunny",
                description: "Soft, cuddly bunny made from 100% organic cotton with hand-embroidered details.",
                price: 29.0,
                category: "plush",
                images: ["https://images.unsplash.com/photo-1601758125946-6ec2ef642b37?q=80&w=1200&auto=format&fit=crop"],
                materials: ["organic cotton", "polyfill"],
                stock: 12,
                in_stock: true,
                featured: true
              },
              {
                title: "Wooden Rainbow Stacker",
                description: "Sustainably sourced wooden stacker painted with non-toxic water-based paints.",
                price: 39.0,
                category: "wooden",
                images: ["https://images.unsplash.com/photo-1596464716121-eef8c19f1b98?q=80&w=1200&auto=format&fit=crop"],
                materials: ["beech wood"],
                stock: 8,
                in_stock: true,
                featured: true
              },
              {
                title: "Sensory Busy Board",
                description: "Engaging activity board with safe, child-friendly fixtures for fine motor skills.",
                price: 49.0,
                category: "educational",
                images: ["https://images.unsplash.com/photo-1596467421230-5ebf4c6006b3?q=80&w=1200&auto=format&fit=crop"],
                materials: ["wood", "felt"],
                stock: 5,
                in_stock: true,
                featured: true
              }
            ];
            for (const p of demo) {
              await fetch(`${API_BASE}/api/products`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(p),
              });
            }
            fetchProducts(search);
          }} />
        )}
      </section>

      <footer className="relative overflow-hidden">
        <div className="border-t border-slate-200 py-10 text-center">
          <p className="text-slate-700">
            Handmade with love • Safe materials • Small-batch crafted
          </p>
          <p className="mt-2 text-slate-500 text-sm">© {new Date().getFullYear()} Playful Craft</p>
        </div>
      </footer>
    </div>
  );
}

function EmptyState({ onSeed }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-dashed border-slate-300 bg-white/70 backdrop-blur p-8 text-center shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">No products yet</h3>
      <p className="mt-2 text-slate-600">Seed a few demo items to get started.</p>
      <motion.button whileTap={{ scale: 0.98 }} onClick={onSeed} className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow hover:brightness-105">Add demo products</motion.button>
      <p className="mt-2 text-xs text-slate-500">Data is stored in the database so it persists.</p>
    </motion.div>
  );
}
