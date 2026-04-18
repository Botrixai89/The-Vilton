import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 relative overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/vilton-logo.png" 
                alt="The Vilton" 
                className="h-20 md:h-24 w-auto object-contain filter brightness-0 invert transition-transform hover:opacity-90" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium premium serviced apartments in Raipur. Comfort that feels like home, paired with luxury modern amenities.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:pl-8">
            <h4 className="font-serif text-lg font-bold mb-6 tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-orange-500 transition-colors">Rooms</Link></li>
              <li><Link href="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 tracking-wide text-white">Contact & Reservations</h4>
            <ul className="space-y-4 text-sm mb-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="leading-relaxed">
                  Front of Magneto The Mall,<br />
                  Vishal Nagar, Raipur 492001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:06262977772" className="hover:text-orange-500 transition-colors">062629 77772</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@thevilton.com" className="hover:text-orange-500 transition-colors">info@thevilton.com</a>
              </li>
            </ul>
            
            <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
              Book via WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Vilton. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
