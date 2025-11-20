import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import CTAButton from './CTAButton'
import { Star } from 'lucide-react'

export default function ProductDetails({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen pb-24">
      <TopNav />

      <div className="max-w-md mx-auto px-4 py-4">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="aspect-square bg-gray-100"></div>
          <div className="px-4 py-3 flex items-center justify-between text-sm">
            <button className="underline">Video</button>
            <button className="underline">360°</button>
            <button className="underline">Size guide</button>
            <button className="underline">Colors</button>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-lg font-semibold text-gray-900">Nike Air Zoom Pegasus 39</h1>
          <p className="text-sm text-gray-500">Brand: Nike</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex items-center gap-1 text-sm"><Star size={16} className="text-yellow-500 fill-yellow-500"/> 4.5</span>
            <span className="text-sm text-gray-500">10,000+ reviews</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-gray-900">₹4,499</span>
            <span className="text-gray-500 line-through">₹7,999</span>
            <span className="text-green-600 font-semibold">45% OFF</span>
          </div>

          <div className="mt-3 rounded-xl border border-gray-200 p-3 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Apply ₹100 OFF</p>
              <button className="text-[#FF3E6C] font-semibold text-sm">Apply</button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {['XS','S','M','L','XL'].map((s) => (
              <button key={s} className="py-2 rounded-xl border border-gray-200 bg-white shadow-sm text-sm font-medium">{s}</button>
            ))}
          </div>
          <p className="mt-1 text-xs text-green-700">Best Fit for You</p>

          <div className="mt-4 space-y-2 text-sm">
            <h3 className="font-semibold text-gray-900">Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Material: Mesh + Foam</li>
              <li>Warranty: 6 months</li>
              <li>Lightweight, responsive cushioning</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Related Reels</h3>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-32 h-52 rounded-xl bg-gray-100 flex-shrink-0" />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Reviews</h3>
            <div className="rounded-2xl border border-gray-100 p-3 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="font-semibold">Filter by:</span>
                <button className="px-2 py-1 rounded-full bg-gray-100">5★</button>
                <button className="px-2 py-1 rounded-full bg-gray-100">With images</button>
                <button className="px-2 py-1 rounded-full bg-gray-100">Most helpful</button>
              </div>
              <div className="mt-3 space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="border-t pt-3 first:border-t-0 first:pt-0">
                    <div className="flex items-center gap-2">
                      <img src={`https://i.pravatar.cc/100?img=${i+3}`} className="w-8 h-8 rounded-full" />
                      <div className="text-sm">
                        <p className="font-semibold">User {i+1}</p>
                        <p className="text-gray-600">Great comfort and fit!</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-100">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <button className="flex-1 rounded-full bg-white text-gray-900 font-semibold py-3 shadow">Add to Cart</button>
          <CTAButton className="flex-1">Buy Now</CTAButton>
        </div>
      </div>

      <BottomNav current="home" onNavigate={onNavigate} />
    </div>
  )
}
