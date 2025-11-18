import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <Navbar onSearch={onSearch} onOpenCart={() => window.alert("Cart coming soon!\nItems: " + cart.length)} />
      <Hero />

      <section id="catalog" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <div className="text-slate-600">{cart.length} items • ${total.toFixed(2)}</div>
        </div>

        {loading && <p className="text-slate-600">Loading products…</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} onAdd={addToCart} />
            ))}
          </div>
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

      <footer className="border-t border-slate-200 py-10 text-center text-slate-600">
        Handmade with love • Safe materials • Small-batch crafted
      </footer>
    </div>
  );
}

function EmptyState({ onSeed }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center">
      <h3 className="text-lg font-semibold text-slate-900">No products yet</h3>
      <p className="mt-2 text-slate-600">Seed a few demo items to get started.</p>
      <button onClick={onSeed} className="mt-4 px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700">Add demo products</button>
      <p className="mt-2 text-xs text-slate-500">Data is stored in the database so it persists.</p>
    </div>
  );
}
