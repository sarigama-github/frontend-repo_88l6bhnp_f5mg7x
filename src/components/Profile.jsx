import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

export default function Profile({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen pb-20">
      <TopNav />

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=11" className="w-12 h-12 rounded-full"/>
            <div>
              <p className="font-semibold text-gray-900">Aarav Sharma</p>
              <p className="text-sm text-gray-600">aarav@example.com • +91 98765 43210</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">Edit Profile</button>
            <button className="px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium">Logout</button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Orders</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button className="rounded-xl bg-gray-50 p-3 text-left">Previous orders</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Track order</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Returns/Refunds</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Download invoice</button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Wallet & Payments</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button className="rounded-xl bg-gray-50 p-3 text-left">Saved cards</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Saved UPI</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Rewards/Cashbacks</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Coins</button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button className="rounded-xl bg-gray-50 p-3 text-left">Chat Support</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Call Support</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Email</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">FAQs</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left col-span-2">Report issue</button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Settings</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button className="rounded-xl bg-gray-50 p-3 text-left">Notifications</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Address book</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Language</button>
            <button className="rounded-xl bg-gray-50 p-3 text-left">Dark mode</button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 shadow-sm p-4 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Extra Features</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Smart Filters & Sort</li>
            <li>Price Drop Alerts</li>
            <li>Multi-folder Wishlist</li>
            <li>Delivery tracking (live)</li>
            <li>Gift cards</li>
            <li>Membership</li>
          </ul>
        </div>
      </div>

      <BottomNav current="profile" onNavigate={onNavigate} />
    </div>
  )
}
