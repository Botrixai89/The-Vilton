'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <img 
            src="/vilton-logo.png" 
            alt="The Vilton" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-gray-800 font-medium tracking-wide hover:text-orange-500 transition-colors duration-300">Home</Link>
          <Link href="/rooms" className="text-gray-800 font-medium tracking-wide hover:text-orange-500 transition-colors duration-300">Rooms</Link>
          <Link href="/gallery" className="text-gray-800 font-medium tracking-wide hover:text-orange-500 transition-colors duration-300">Gallery</Link>
          <Link href="/contact" className="text-gray-800 font-medium tracking-wide hover:text-orange-500 transition-colors duration-300">Contact</Link>
          
          {/* CTA Button */}
          <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="ml-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] font-medium tracking-wide">
              Book Now
            </button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-gray-800 hover:text-orange-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/rooms" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">Rooms</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">Gallery</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">Contact</Link>
            
            {/* CTA Button */}
            <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="pt-2">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-md transition-colors font-medium">
                Book Now
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
