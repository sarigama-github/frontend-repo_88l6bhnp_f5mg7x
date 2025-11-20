import React, { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Reels from './components/Reels'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Profile from './components/Profile'

function App() {
  const [screen, setScreen] = useState('login') // login | home | reels | product | cart | profile

  const handleNavigate = (key) => {
    if (key === 'home') setScreen('home')
    if (key === 'reels') setScreen('reels')
    if (key === 'cart') setScreen('cart')
    if (key === 'wishlist') setScreen('home')
    if (key === 'profile') setScreen('profile')
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {screen === 'login' && <Login onContinue={setScreen} />}
      {screen === 'home' && <Home onNavigate={handleNavigate} />}
      {screen === 'reels' && <Reels onNavigate={handleNavigate} />}
      {screen === 'product' && <ProductDetails onNavigate={handleNavigate} />}
      {screen === 'cart' && <Cart onNavigate={handleNavigate} />}
      {screen === 'profile' && <Profile onNavigate={handleNavigate} />}
    </div>
  )
}

export default App
