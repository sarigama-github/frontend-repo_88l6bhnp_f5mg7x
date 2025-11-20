import React from 'react'
import { Heart, MessageCircle, Share2, BookmarkPlus, Star } from 'lucide-react'
import CTAButton from './CTAButton'

export default function ReelPlayer() {
  return (
    <div className="h-[calc(100vh-56px-64px)] max-w-md mx-auto relative bg-black">
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline src="https://cdn.coverr.co/videos/coverr-shopping-online-3840-11262/1080p.mp4" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      <div className="absolute right-3 top-1/4 flex flex-col items-center gap-4 text-white">
        <button className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><Heart /></button>
        <button className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><MessageCircle /></button>
        <button className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><Share2 /></button>
        <button className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><BookmarkPlus /></button>
      </div>

      <div className="absolute left-3 right-3 bottom-24 text-white">
        <h3 className="text-lg font-semibold">Nike Air Zoom Pegasus 39</h3>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <span className="flex items-center gap-1"><Star className="text-yellow-400 fill-yellow-400" size={16} /> 4.2</span>
          <span>₹4,499 <span className="line-through opacity-70">₹7,999</span> <span className="text-green-400">45% OFF</span></span>
        </div>
        <p className="text-xs mt-1 opacity-90">More colors & sizes available</p>

        <div className="flex items-center gap-2 mt-3">
          <CTAButton className="flex-1">Buy Now</CTAButton>
          <button className="flex-1 rounded-full bg-white text-gray-900 font-semibold py-3 shadow">Add to Cart</button>
        </div>
        <button className="mt-2 text-sm underline underline-offset-2">View Details</button>
      </div>

      <div className="absolute left-3 bottom-4 right-3 bg-white/95 rounded-2xl p-3 text-gray-900 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-semibold">@sneaker.influencer</p>
              <button className="text-xs text-[#FF3E6C] font-semibold">Follow</button>
            </div>
          </div>
          <div className="text-xs text-gray-500">Use code <span className="font-semibold text-gray-800">SNEAK100</span></div>
        </div>
      </div>
    </div>
  )
}
