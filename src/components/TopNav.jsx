import React from 'react'
import { Search, Mic, Image as ImageIcon, ShoppingCart, Heart, User2, Home, PlaySquare } from 'lucide-react'

export default function TopNav({ onSearch }) {
  return (
    <div className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
            <span className="font-bold text-gray-900 text-lg">ReelShop</span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <Heart size={22} />
            <ShoppingCart size={22} />
            <User2 size={22} />
          </div>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search for fashion, electronics, beauty..."
            className="w-full rounded-full bg-gray-50 placeholder:text-gray-400 border border-gray-200 pl-11 pr-24 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A3D]/30 focus:border-[#FF6A3D] shadow-sm"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500"><Mic size={18} /></button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500"><ImageIcon size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
