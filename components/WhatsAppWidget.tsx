"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleWidget = () => setIsOpen(!isOpen)

  // Business phone number
  const phoneNumber = "919685117934" 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi! I would like to know more about The Vilton.`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-4 w-[340px] overflow-hidden rounded-2xl bg-[#ECE5DD] shadow-2xl transition-all duration-300 max-sm:w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-5 fade-in zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#095e54] p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/whatsapp widget logo.jpg"
                  alt="WhatsApp Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12 bg-white"
                />
                <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-[#25D366] ring-2 ring-[#095e54]"></span>
              </div>
              <div>
                <h3 className="font-semibold text-lg leading-tight">The Vilton</h3>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div 
            className="p-5 space-y-4"
            style={{
              backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
              backgroundSize: 'contain',
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(236, 229, 221, 0.95)',
            }}
          >
            <div className="bg-white rounded-tr-xl rounded-b-xl p-3 w-[85%] shadow-sm relative">
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[0px] border-t-transparent border-r-[15px] border-r-white border-b-[15px] border-b-transparent"></div>
              <p className="text-gray-800 text-[15px]">Hi there 👋</p>
            </div>
            <div className="bg-white rounded-tr-xl rounded-b-xl p-3 w-[85%] shadow-sm relative">
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[0px] border-t-transparent border-r-[15px] border-r-white border-b-[15px] border-b-transparent"></div>
              <p className="text-gray-800 text-[15px] pr-8">How can I help you?</p>
              <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">
                11:07
              </span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-white p-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#1FAF38] px-4 py-3 text-white transition-transform hover:bg-[#128C7E] active:scale-95 shadow-md font-semibold text-[15px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <div className="mt-2 text-center text-[10px] text-gray-400">
              Powered by{" "}
              <a
                href="https://botrixai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1FAF38] hover:underline font-semibold"
              >
                BotrixAI
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleWidget}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] active:scale-95 group"
        aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
      >
        {/* Subtle Background Glow Pulse */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-pulse blur-md"></div>
        )}
        
        <div className="relative w-full h-full rounded-full overflow-hidden p-0.5 z-10">
           <Image
              src="/whatsapp widget logo.jpg"
              alt="WhatsApp Widget"
              fill
              className="object-cover"
           />
        </div>
      </button>
    </div>
  )
}
