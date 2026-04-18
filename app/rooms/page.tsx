'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, Wifi, Tv, Bath, Wind, Phone } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: 'Luxury Studio',
      size: '650 sq ft',
      image: '/room-images/DSC03879-HDR_1.jpg',
      features: [
        'City View & Balcony',
        'En-suite Bathroom',
        'Premium Furnishing',
        'Kitchenette',
        'Smart TV',
        'Climate Control',
      ],
      description: 'Our flagship room featuring premium furnishings, a stunning city view, and all modern amenities for the discerning traveler.',
    },
    {
      id: 2,
      name: 'Executive Suite',
      size: '750 sq ft',
      image: '/room-images/DSC03893-HDR_1.jpg',
      features: [
        'Premium City View',
        'Separate Living Area',
        'Extended Workspace',
        'Luxury Bathroom',
        'Smart Home Features',
        'Premium Toiletries',
      ],
      description: 'Perfect for extended stays and business travelers. Features a dedicated workspace and luxury finishes throughout.',
    },
    {
      id: 3,
      name: 'Comfort Studio',
      size: '550 sq ft',
      image: '/room-images/DSC03902.jpg',
      features: [
        'Well-Equipped Space',
        'Natural Light',
        'Modern Design',
        'Efficient Layout',
        'Quality Furnishings',
        'WiFi & Entertainment',
      ],
      description: 'Great value without compromising comfort. Ideal for short stays with all essential amenities included.',
    },
    {
      id: 4,
      name: 'Deluxe Studio',
      size: '700 sq ft',
      image: '/room-images/DSC03904.jpg',
      features: [
        'Partial City View',
        'Spacious Layout',
        'Upgraded Furnishing',
        'Dining Area',
        'Premium Appliances',
        'Extra Storage',
      ],
      description: 'A step up in comfort with upgraded furnishings and additional space for families or longer stays.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-5xl font-bold text-primary">Our Rooms</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully designed spaces featuring premium amenities and modern comfort
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden border-border/30 hover:shadow-lg transition-all group">
                <div className="h-64 relative overflow-hidden bg-muted">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-primary">{room.name}</h2>
                      <p className="text-sm text-muted-foreground mt-1">{room.size}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{room.description}</p>

                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-sm text-primary uppercase tracking-wide">Room Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {room.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Room Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: 'High-Speed WiFi' },
              { icon: Tv, label: 'Smart TV' },
              { icon: Bath, label: 'Premium Bath' },
              { icon: Wind, label: 'Air Conditioning' },
              { icon: Home, label: 'Kitchenette' },
              { icon: Phone, label: '24/7 Support' },
            ].map((amenity, i) => (
              <div key={i} className="text-center">
                <amenity.icon className="w-12 h-12 mx-auto mb-3 text-accent" />
                <p className="text-sm font-medium text-primary">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">Ready to Book?</h2>
          <p className="text-lg text-background/90">
            Contact us directly on WhatsApp to get our best dynamic rates and reserve your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" /> Book via WhatsApp
              </Button>
            </a>
          </div>
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
          <path d="M12.031 6.173c-3.314 0-6.003 2.689-6.003 6.003 0 1.058.277 2.09.803 2.996l-1.21 4.425 4.53-1.188a5.98 5.98 0 002.88.734h.003c3.314 0 6.003-2.689 6.003-6.003 0-1.603-.624-3.112-1.758-4.246a5.95 5.95 0 00-4.245-1.758zm0 10.806h-.002a4.95 4.95 0 01-2.526-.692l-.181-.108-1.876.492.5-1.827-.118-.19a4.96 4.96 0 01-.757-2.614c0-2.746 2.235-4.981 4.981-4.981a4.96 4.96 0 013.522 1.461 4.96 4.96 0 011.46 3.522c0 2.746-2.235 4.981-4.981 4.981zm2.72-3.725c-.149-.075-.88-.434-1.016-.484-.136-.05-.235-.075-.334.075-.1.15-.384.484-.471.584-.086.1-.173.112-.322.037-.149-.075-.63-.232-1.199-.741-.443-.395-.742-.883-.829-1.033-.086-.15-.009-.231.066-.305.068-.068.15-.177.225-.265.075-.088.1-.15.15-.25.05-.1.025-.188-.012-.263-.037-.075-.334-.805-.458-1.103-.122-.293-.246-.253-.334-.258-.086-.005-.185-.006-.284-.006-.1 0-.263.037-.401.187-.138.15-.525.513-.525 1.251s.537 1.451.612 1.551c.075.1 1.06 1.618 2.568 2.269.358.154.637.246.855.314.36.115.688.099.947.06.288-.044.88-.36 1.004-.707.124-.347.124-.645.087-.707-.037-.063-.137-.1-.286-.175z" />
        </svg>
      </a>
    </div>
  )
}
