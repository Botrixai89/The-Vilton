'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Home } from 'lucide-react'

export default function GalleryPage() {
  const categories = [
    {
      name: 'Rooms',
      count: 12,
      items: [
        { label: 'Luxury Studio - Master Bedroom', src: '/room-images/DSC03879-HDR_1.jpg' },
        { label: 'Luxury Studio - Living Area', src: '/room-images/DSC03886-HDR_1.jpg' },
        { label: 'Executive Suite - Full View', src: '/room-images/DSC03893-HDR_1.jpg' },
        { label: 'Executive Suite - Workspace', src: '/room-images/DSC03895.jpg' },
        { label: 'Comfort Studio - Bedroom', src: '/room-images/DSC03897.jpg' },
        { label: 'Comfort Studio - Kitchenette', src: '/room-images/DSC03899.jpg' },
        { label: 'Deluxe Studio - Living Space', src: '/room-images/DSC03900.jpg' },
        { label: 'Deluxe Studio - Balcony', src: '/room-images/DSC03902.jpg' },
        { label: 'Room Details - Bathroom', src: '/room-images/DSC03904.jpg' },
        { label: 'Room Details - Amenities', src: '/room-images/DSC03905.jpg' },
        { label: 'Room Details - Furnishings', src: '/room-images/DSC03908.jpg' },
        { label: 'Room Details - Entertainment', src: '/room-images/DSC03921.jpg' },
      ]
    },
    {
      name: 'Interiors',
      count: 9,
      items: [
        { label: 'Lobby & Reception', src: '/room-images/DSC03935.jpg' },
        { label: 'Furniture & Fixtures', src: '/room-images/DSC04400-HDR.jpg' },
        { label: 'Color Schemes', src: '/room-images/DSC04406-HDR.jpg' },
        { label: 'Bathroom Fixtures', src: '/room-images/DSC04414-HDR.jpg' },
        { label: 'Kitchen Equipment', src: '/room-images/DSC04429.jpg' },
        { label: 'Decorative Elements', src: '/room-images/DSC04437.jpg' },
        { label: 'Bathroom Vanity', src: '/room-images/DSC04438.jpg' },
        { label: 'Bathroom Amenities', src: '/room-images/DSC04440.jpg' },
        { label: 'Mini Fridge', src: '/room-images/DSC04446.jpg' }
      ]
    },
    {
      name: 'Exteriors',
      count: 4,
      items: [
        { label: 'Exterior View', src: '/room-images/DSC03943.jpg' },
        { label: 'The Collective Building', src: '/room-images/DSC03944.jpg' },
        { label: 'The Studios Sign', src: '/room-images/DSC04448.jpg' },
        { label: 'Building View', src: '/room-images/DSC04450.jpg' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-5xl font-bold text-primary">Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the luxury and comfort of The Vilton through our curated collection
          </p>
        </div>
      </section>

      {/* Gallery by Category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.count} images</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="aspect-square relative rounded-sm overflow-hidden group cursor-pointer shadow-sm border border-border/20"
                  >
                    <img 
                      src={item.src} 
                      alt={item.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium text-white">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">See it for Yourself</h2>
          <p className="text-lg text-background/90">
            Schedule a virtual tour or visit us in person
          </p>
          <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 text-base">
              Schedule a Tour
            </Button>
          </a>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919685117934"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.663-2.379 1.724-3.256 3.514-.857 1.671-1.203 3.623-.291 5.471 1.623 3.447 5.461 5.742 9.052 5.742h.004c1.44 0 2.941-.278 4.263-.842l3.656 1.409-.96-3.104c2.07-1.221 3.87-3.119 5.156-5.404 1.02-2.756.412-5.371-1.597-7.282-1.322-1.221-3.021-1.901-4.921-1.901z" />
        </svg>
      </a>
    </div>
  )
}
