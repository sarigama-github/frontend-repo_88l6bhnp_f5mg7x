import React from 'react'

export default function Section({ title, subtitle, children, action }) {
  return (
    <section className="max-w-md mx-auto px-4 py-5">
      <div className="flex items-end justify-between mb-3">
        <div>
          <h2 className="text-gray-900 font-semibold text-lg">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}
