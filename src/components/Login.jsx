import React from 'react'
import CTAButton from './CTAButton'
import { Apple, Chrome } from 'lucide-react'

export default function Login({ onContinue }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pb-24">
      <div className="text-center mb-10">
        <img src="/favicon.svg" alt="logo" className="w-20 h-20 mx-auto mb-3" />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">ReelShop</h1>
      </div>

      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <label className="text-sm font-medium text-gray-700">Phone number</label>
        <div className="mt-1 flex rounded-xl overflow-hidden border border-gray-200">
          <span className="px-3 py-3 text-sm bg-gray-50 text-gray-600">+91</span>
          <input type="tel" placeholder="98765 43210" className="flex-1 px-3 py-3 outline-none text-gray-900" />
        </div>

        <CTAButton className="w-full mt-4" onClick={() => onContinue?.('home')}>Send OTP</CTAButton>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-500">or</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-full border border-gray-200 py-2.5 font-medium text-gray-700 bg-white shadow-sm hover:shadow"> <Chrome size={18} className="inline mr-2"/> Continue with Google</button>
          <button className="rounded-full border border-gray-200 py-2.5 font-medium text-gray-700 bg-white shadow-sm hover:shadow"> <Apple size={18} className="inline mr-2"/> Apple</button>
        </div>

        <p className="mt-4 text-xs text-center text-gray-500">By continuing, you agree to <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span></p>
      </div>
    </div>
  )
}
