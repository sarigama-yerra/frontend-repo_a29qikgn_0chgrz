export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square w-full overflow-hidden bg-slate-50">
        <img
          src={product.images?.[0] || "https://images.unsplash.com/photo-1546396232-8f9a9a529aff?q=80&w=1200&auto=format&fit=crop"}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900 line-clamp-2">{product.title}</h3>
          <span className="text-pink-700 font-bold">${product.price?.toFixed?.(2) ?? product.price}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-pink-50 text-pink-700">{product.category}</span>
          <button
            onClick={() => onAdd(product)}
            className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
