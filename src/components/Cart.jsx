import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import CTAButton from './CTAButton'

export default function Cart({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen pb-24">
      <TopNav />

      <div className="max-w-md mx-auto px-4 py-4 space-y-3">
        {[1,2].map((i) => (
          <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-3 flex gap-3 bg-white">
            <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Product {i} Title</p>
              <p className="text-xs text-gray-500">Delivery by Tue, 26 Nov</p>
              <div className="mt-2 flex items-center gap-2">
                <select className="rounded-lg border border-gray-200 text-sm">
                  <option>Qty 1</option>
                  <option>Qty 2</option>
                </select>
                <button className="text-xs underline">Save for later</button>
                <button className="text-xs text-red-600">Remove</button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">₹1,499</p>
              <button className="text-xs mt-1 underline">Apply coupon</button>
            </div>
          </div>
        ))}

        <div className="mt-4 rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between"><span>Items</span><span>₹2,998</span></div>
            <div className="flex justify-between"><span>Discounts</span><span className="text-green-600">-₹500</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>₹40</span></div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-gray-900"><span>Total</span><span>₹2,538</span></div>
          </div>
          <CTAButton className="w-full mt-3">Checkout</CTAButton>
        </div>
      </div>

      <BottomNav current="cart" onNavigate={onNavigate} />
    </div>
  )
}
