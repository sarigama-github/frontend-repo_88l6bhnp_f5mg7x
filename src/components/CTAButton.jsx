import React from 'react'
import { cn } from '../utils/cn'

export default function CTAButton({ children, className = '', icon: Icon, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-white font-semibold shadow-lg shadow-[#FF9900]/30 hover:shadow-[#FF3E6C]/40 transition-all duration-300',
        'bg-gradient-to-r from-[#FF9900] via-[#FF6A3D] to-[#FF3E6C] hover:brightness-[1.03] active:scale-[0.98]',
        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  )
}
