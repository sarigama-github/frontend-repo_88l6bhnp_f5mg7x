import React from 'react'
import { Star } from 'lucide-react'

export function CategoryCard({ label, emoji }) {
  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow p-4 text-center border border-gray-100">
      <div className="text-2xl mb-2">{emoji}</div>
      <div className="text-sm font-medium text-gray-800">{label}</div>
    </div>
  )
}

export function ProductCard({ title, price, image, rating = 4.2, tag }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[4/3] bg-gray-100">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="p-3">
        {tag && <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-pink-50 text-[#FF3E6C] font-semibold mb-2">{tag}</span>}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-900 font-bold">₹{price}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReelCard({ title, thumb, badge }) {
  return (
    <div className="w-36 flex-shrink-0">
      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="aspect-[9/16] bg-gray-100">
          {thumb ? <img src={thumb} alt={title} className="w-full h-full object-cover" /> : null}
        </div>
        {badge && (
          <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-gray-900 font-semibold shadow">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-700 line-clamp-2">{title}</p>
    </div>
  )
}
