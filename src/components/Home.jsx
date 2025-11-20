import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Section from './Section'
import { CategoryCard, ProductCard, ReelCard } from './Cards'

const categories = [
  ['Fashion','👗'],['Electronics','🔌'],['Beauty','💄'],['Home Décor','🪴'],['Kitchen','🍳'],['Footwear','👟'],['Gadgets','📱'],['Personal Care','🧴'],['Accessories','🕶️'],['Grocery','🛒'],['Books','📚'],['Best Sellers','⭐'],['Today’s Top Deals','🔥']
]

export default function Home({ onNavigate }) {
  return (
    <div className="bg-white min-h-screen pb-20">
      <TopNav />

      <Section>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Trending','Best Offers','Recommended'].map((s) => (
            <button key={s} className="px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 whitespace-nowrap">{s}</button>
          ))}
        </div>
      </Section>

      <Section title="Categories">
        <div className="grid grid-cols-3 gap-3">
          {categories.map(([label, emoji]) => (
            <CategoryCard key={label} label={label} emoji={emoji} />
          ))}
        </div>
      </Section>

      <Section title="Top Trending Reels">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {[...Array(6)].map((_, i) => (
            <ReelCard key={i} title="Streetwear picks under ₹999" badge="🔥" />
          ))}
        </div>
      </Section>

      <Section title="Hot Deals Under ₹499">
        <div className="grid grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <ProductCard key={i} title="Cotton T-Shirt" price={399} tag="-60%" />
          ))}
        </div>
      </Section>

      <Section title="Shop Influencer Picks">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {[...Array(6)].map((_, i) => (
            <ReelCard key={i} title="Top gym essentials" />
          ))}
        </div>
      </Section>

      <Section title="Recommended For You">
        <div className="grid grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <ProductCard key={i} title="Wireless Earbuds" price={1499} rating={4.3} />
          ))}
        </div>
      </Section>

      <Section title="Inspired by Your Browsing" subtitle="Handpicked like Amazon">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="min-w-[200px] rounded-2xl bg-white border border-gray-100 shadow-sm p-3">
              <div className="aspect-[16/9] rounded-lg bg-gray-100 mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Curated gadgets under ₹1999</p>
            </div>
          ))}
        </div>
      </Section>

      <BottomNav current="home" onNavigate={onNavigate} />
    </div>
  )
}
