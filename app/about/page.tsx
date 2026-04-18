'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Lightbulb, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-accent">The Vilton</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/rooms" className="text-sm hover:text-accent transition-colors">Rooms</Link>
            <Link href="/gallery" className="text-sm hover:text-accent transition-colors">Gallery</Link>
            <Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-5xl font-bold text-primary">About The Vilton</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafted for modern travelers who deserve the best
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-96 bg-gradient-to-br from-accent/30 to-primary/10 rounded-sm flex items-center justify-center order-2 md:order-1">
              <div className="text-center">
                <Heart className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Designed with Care</p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-serif text-4xl font-bold text-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Vilton was born from a simple idea: create a space where travelers don&apos;t just stay, but truly feel at home. In a world where business travel can be exhausting and leisure time is precious, we understood the need for something different.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Raipur, our luxury serviced apartments combine the comfort of a home with the amenities of a premium hotel. Every detail has been thoughtfully designed to create an experience that exceeds expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our fully furnished studios to our attentive service, The Vilton represents our commitment to hospitality excellence and guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/30">
              <Lightbulb className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide an exceptional hospitality experience that transforms stays into cherished memories. We&apos;re committed to delivering comfort, elegance, and personalized service that exceeds every guest&apos;s expectations.
              </p>
            </Card>
            <Card className="p-8 border-border/30">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence in service, attention to detail, and genuine care for our guests. We believe that luxury is not just about amenities, but about creating an atmosphere where every guest feels valued and respected.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Why Choose The Vilton</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Premium Amenities',
                desc: 'State-of-the-art facilities including high-speed WiFi, smart TVs, fully equipped kitchenettes, and climate control in every room.'
              },
              {
                icon: Users,
                title: 'Personalized Service',
                desc: 'Our dedicated team is available 24/7 to ensure your stay is comfortable and memorable. Your needs are our priority.'
              },
              {
                icon: Heart,
                title: 'Prime Location',
                desc: 'Located in Vishal Nagar, front of Magneto Mall, perfectly positioned for business and leisure activities.'
              },
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

      {/* Perfect For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Perfect For Business & Leisure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/30">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Business Travelers</h3>
              <ul className="space-y-3">
                {[
                  'High-speed WiFi for seamless connectivity',
                  'Dedicated workspace in select rooms',
                  'Flexible check-in/check-out options',
                  'Conference facilities available',
                  'Proximity to business districts',
                  'Professional concierge service'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 border-border/30">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Leisure Travelers</h3>
              <ul className="space-y-3">
                {[
                  'Comfortable and stylish living spaces',
                  'Kitchenette for flexible dining options',
                  'Smart TV for entertainment',
                  'Spacious rooms for relaxation',
                  'Prime location for exploring Raipur',
                  'Personalized concierge recommendations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">Experience The Vilton Difference</h2>
          <p className="text-lg text-background/90">
            A stay that feels too good to end
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 text-base">
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-background border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">The Vilton</h3>
            <p className="text-sm text-background/80">Luxury serviced apartments in Raipur</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-accent transition-colors">Rooms</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-background/80">Vishal Nagar, Raipur</p>
            <p className="text-sm text-background/80">Front of Magneto Mall</p>
            <p className="text-accent font-semibold mt-2">+91 XXXX-XXXX-XX</p>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2024 The Vilton. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.663-2.379 1.724-3.256 3.514-.857 1.671-1.203 3.623-.291 5.471 1.623 3.447 5.461 5.742 9.052 5.742h.004c1.44 0 2.941-.278 4.263-.842l3.656 1.409-.96-3.104c2.07-1.221 3.87-3.119 5.156-5.404 1.02-2.756.412-5.371-1.597-7.282-1.322-1.221-3.021-1.901-4.921-1.901z" />
        </svg>
      </a>
    </div>
  )
}
