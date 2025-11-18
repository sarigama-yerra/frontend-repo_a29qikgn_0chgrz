import { motion } from "framer-motion";

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
      <div className="aspect-square w-full overflow-hidden bg-slate-50">
        <img
          src={product.images?.[0] || "https://images.unsplash.com/photo-1546396232-8f9a9a529aff?q=80&w=1200&auto=format&fit=crop"}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900 line-clamp-2">{product.title}</h3>
          <span className="text-pink-700 font-extrabold">${product.price?.toFixed?.(2) ?? product.price}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-pink-50 text-pink-700">{product.category}</span>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => onAdd(product)}
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 text-sm shadow"
          >
            Add to cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
