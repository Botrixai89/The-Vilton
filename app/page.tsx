'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, MapPin, Wifi, Tv, ParkingCircle, Home } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img 
          src="/room-images/DSC03879-HDR_1.jpg" 
          alt="The Vilton Experience" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight shadow-sm">
              Experience Comfort That Feels Like Home
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto shadow-sm">
              Premium serviced apartments in Raipur's prime location. Where comfort meets modern luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm px-8 h-12 text-base w-full sm:w-auto">
                  Book Now
                </Button>
              </a>
              <Link href="/rooms">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-sm px-8 h-12 text-base backdrop-blur-sm shadow-sm transition-colors">
                  Explore Rooms
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Why Choose The Vilton</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: 'Fully Furnished Studios', desc: '650+ sq ft spaces with complete furnishings' },
              { icon: Wifi, title: 'High-Speed WiFi', desc: 'Seamless connectivity for business & leisure' },
              { icon: Tv, title: 'Smart TV', desc: 'Entertainment at your fingertips' },
              { icon: MapPin, title: 'Prime Location', desc: 'Front of Magneto Mall, Vishal Nagar' },
              { icon: ParkingCircle, title: 'Parking Available', desc: 'Hassle-free parking on premises' },
              { icon: Star, title: '5-Star Amenities', desc: 'Premium facilities for a luxury experience' },
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center border-border/30 hover:border-accent/50 transition-all">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center text-primary">Our Signature Studio</h2>
          <Card className="overflow-hidden border-border/30 shadow-lg flex flex-col md:flex-row bg-background">
            <div className="w-full md:w-1/2 relative bg-muted group">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {[
                    '/room-images/DSC03879-HDR_1.jpg',
                    '/room-images/DSC03893-HDR_1.jpg',
                    '/room-images/DSC03902.jpg',
                    '/room-images/DSC03904.jpg',
                  ].map((img, i) => (
                    <CarouselItem key={i}>
                      <div className="h-64 md:h-full min-h-[300px] relative overflow-hidden">
                        <img src={img} alt={`Luxury Studio View ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                  <div className="pointer-events-auto">
                    <CarouselPrevious className="static translate-y-0 bg-white/80 hover:bg-white text-black border-none shadow-md" />
                  </div>
                  <div className="pointer-events-auto">
                    <CarouselNext className="static translate-y-0 bg-white/80 hover:bg-white text-black border-none shadow-md" />
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Luxury Studio</h3>
              <p className="text-muted-foreground mb-6">
                Our flagship room featuring premium furnishings, a stunning city view, and all modern amenities for the discerning traveler.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  '650 sq ft', 'City View', 'Balcony', 'En-suite Bathroom', 'Kitchenette', 'Smart TV'
                ].map((f, j) => (
                  <div key={j} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{f}
                  </div>
                ))}
              </div>
              <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm px-8 h-12 text-base">
                  Book Your Stay
                </Button>
              </a>
            </div>
          </Card>
          <div className="text-center mt-12">
            <Link href="/rooms">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 rounded-sm px-8 h-10">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 relative overflow-hidden rounded-sm bg-muted group shadow-md border border-border/30">
               <img src="/room-images/DSC03935.jpg" alt="The Vilton Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-primary">The Vilton Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Designed for modern travelers who demand comfort without compromise. The Vilton represents the perfect blend of elegance, functionality, and warmth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide an exceptional hospitality experience where every guest feels valued and every stay becomes a cherished memory.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 rounded-sm">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Guest Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Business Traveler', text: 'Outstanding service and exceptional comfort. The Vilton is now my go-to place for all my Raipur stays.' },
              { name: 'Priya Sharma', role: 'Staycation Guest', text: 'Great location, premium amenities, and attention to detail. A truly luxurious experience!' },
              { name: 'Amit Patel', role: 'Corporate Client', text: 'Perfect for business stays. The WiFi is blazing fast and the rooms are beautifully designed.' },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border-border/30">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What is the check-in time?', a: 'Check-in is available from 2:00 PM. Early check-in can be arranged upon request based on availability.' },
              { q: 'What amenities are included?', a: 'All rooms include high-speed WiFi, Smart TV, fully equipped kitchenette, air conditioning, and access to premium facilities.' },
              { q: 'What is the cancellation policy?', a: 'Free cancellation up to 7 days before booking. Standard terms apply for closer cancellations. Please contact us for details.' },
              { q: 'Is parking available?', a: 'Yes, complimentary parking is available on premises for all guests.' },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-border/30">
                <h3 className="font-semibold text-primary mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">Ready to Experience Luxury?</h2>
          <p className="text-lg text-background/90">A stay that feels too good to end</p>
          <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 text-base">
              Book Your Stay Today
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
          <path d="M12.031 6.173c-3.314 0-6.003 2.689-6.003 6.003 0 1.058.277 2.09.803 2.996l-1.21 4.425 4.53-1.188a5.98 5.98 0 002.88.734h.003c3.314 0 6.003-2.689 6.003-6.003 0-1.603-.624-3.112-1.758-4.246a5.95 5.95 0 00-4.245-1.758zm0 10.806h-.002a4.95 4.95 0 01-2.526-.692l-.181-.108-1.876.492.5-1.827-.118-.19a4.96 4.96 0 01-.757-2.614c0-2.746 2.235-4.981 4.981-4.981a4.96 4.96 0 013.522 1.461 4.96 4.96 0 011.46 3.522c0 2.746-2.235 4.981-4.981 4.981zm2.72-3.725c-.149-.075-.88-.434-1.016-.484-.136-.05-.235-.075-.334.075-.1.15-.384.484-.471.584-.086.1-.173.112-.322.037-.149-.075-.63-.232-1.199-.741-.443-.395-.742-.883-.829-1.033-.086-.15-.009-.231.066-.305.068-.068.15-.177.225-.265.075-.088.1-.15.15-.25.05-.1.025-.188-.012-.263-.037-.075-.334-.805-.458-1.103-.122-.293-.246-.253-.334-.258-.086-.005-.185-.006-.284-.006-.1 0-.263.037-.401.187-.138.15-.525.513-.525 1.251s.537 1.451.612 1.551c.075.1 1.06 1.618 2.568 2.269.358.154.637.246.855.314.36.115.688.099.947.06.288-.044.88-.36 1.004-.707.124-.347.124-.645.087-.707-.037-.063-.137-.1-.286-.175z" />
        </svg>
      </a>
    </div>
  )
}
