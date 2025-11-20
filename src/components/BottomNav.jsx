import React from 'react'
import { Home, PlaySquare, ShoppingCart, Heart, User2 } from 'lucide-react'

export default function BottomNav({ current = 'home', onNavigate }) {
  const items = [
    { key: 'home', label: 'Home', Icon: Home },
    { key: 'reels', label: 'Reels', Icon: PlaySquare },
    { key: 'cart', label: 'Cart', Icon: ShoppingCart },
    { key: 'wishlist', label: 'Wishlist', Icon: Heart },
    { key: 'profile', label: 'Profile', Icon: User2 },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t border-gray-100">
      <div className="max-w-md mx-auto px-4 py-2 grid grid-cols-5">
        {items.map(({ key, label, Icon }) => (
          <button
            key={key}
            className={`flex flex-col items-center gap-0.5 py-1 text-xs ${current === key ? 'text-[#FF3E6C]' : 'text-gray-500'}`}
            onClick={() => onNavigate?.(key)}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
