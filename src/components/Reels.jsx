import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import ReelPlayer from './ReelPlayer'

export default function Reels({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen pb-20">
      <TopNav />
      <ReelPlayer />

      <div className="max-w-md mx-auto px-4 mt-4 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-900 mb-2">Engagement</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Auto captions</li>
          <li>Product tagging</li>
          <li>Multi-product switch</li>
          <li>Creator coupons</li>
          <li>Q&A and comments</li>
          <li>Save / Report</li>
        </ul>
      </div>

      <BottomNav current="reels" onNavigate={onNavigate} />
    </div>
  )
}
