'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will get back to you soon!')
    setFormData({ name: '', email: '', phone: '', checkInDate: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-5xl font-bold text-primary">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or to learn more about The Vilton
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 border-border/30">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-primary mb-2">Location</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Front of Magneto The Mall, Vishal Nagar<br />
                Raipur, Chhattisgarh 492001
              </p>
            </Card>

            <Card className="p-8 border-border/30">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-primary mb-2">Phone</h3>
              <p className="text-accent font-semibold text-sm mb-2">062629 77772</p>
              <p className="text-muted-foreground text-xs">Available 24/7 for inquiries</p>
            </Card>

            <Card className="p-8 border-border/30">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
              <p className="text-accent font-semibold text-sm mb-2">info@thevilton.com</p>
              <p className="text-muted-foreground text-xs">Response within 2 hours</p>
            </Card>

            <Card className="p-8 border-border/30">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-primary mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Check-in: 2:00 PM<br />
                Check-out: 11:00 AM<br />
                <span className="text-accent font-semibold">24/7 Support</span>
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-border/30">
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="rounded-sm border-border/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="rounded-sm border-border/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      required
                      className="rounded-sm border-border/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkInDate" className="block text-sm font-medium text-primary mb-2">
                      Check-in Date
                    </label>
                    <Input
                      id="checkInDate"
                      name="checkInDate"
                      type="date"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className="rounded-sm border-border/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry or special requests..."
                    rows={5}
                    className="rounded-sm border-border/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm h-12 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8 text-primary">Visit Us</h2>
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-sm h-96 flex items-center justify-center border border-border/30">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-accent/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Front of Magneto The Mall, Vishal Nagar<br />
                Raipur, Chhattisgarh 492001
              </p>
              <a
                href="https://maps.google.com/?q=Vishal+Nagar+Magneto+Mall+Raipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">Need More Information?</h2>
          <p className="text-lg text-background/90">
            Our team is here to help with any questions or special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:06262977772">
              <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 w-full sm:w-auto">
                Call Us
              </Button>
            </a>
            <a href="https://wa.me/919685117934" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 text-primary rounded-sm px-8 h-12 w-full sm:w-auto">
                WhatsApp Us
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
