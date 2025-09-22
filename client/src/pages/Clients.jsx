
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { Link } from "wouter";

export default function ClientsPage() {
  const navigationItems = ["About Us", "Services", "Tour Packages", "Luxury Car Rentals", "Clients", "Contact Us"];
  
  const companyLogos = [
    { name: "Google", src: "/figmaAssets/google-logo.png" },
    { name: "Creative", src: "/figmaAssets/creative-logo.png" },
    { name: "Airbnb", src: "/figmaAssets/airbnb-logo.png" },
    { name: "Shopify", src: "/figmaAssets/shopify-logo.png" },
    { name: "Amazon", src: "/figmaAssets/amazon-logo.png" },
    { name: "Dropbox", src: "/figmaAssets/dropbox-logo.png" },
    { name: "Spotify", src: "/figmaAssets/spotify-logo.png" },
    { name: "Asana", src: "/figmaAssets/asana-logo.png" },
    { name: "Deliveroo", src: "/figmaAssets/deliveroo-logo.png" },
    { name: "Nissan", src: "/figmaAssets/nissan-logo.png" },
  ];

  const services = [
    {
      icon: "🚗",
      title: "Executive Chauffeur Services",
      description: "Discreet, professional chauffeurs for directors, VIPs, and senior leadership.",
      color: "bg-blue-100"
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      description: "Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
      color: "bg-yellow-100"
    },
    {
      icon: "👥",
      title: "Employee Commute Programs",
      description: "Safe, app-tracked transportation for staff with route optimization and rostering.",
      color: "bg-orange-100"
    },
    {
      icon: "🌍",
      title: "Expat & Guest Handling",
      description: "Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
      color: "bg-purple-100"
    },
    {
      icon: "📊",
      title: "Centralized Billing & MIS Reports",
      description: "Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
      color: "bg-cyan-100"
    },
    {
      icon: "📱",
      title: "App-Based Booking & Trip Management",
      description: "Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.",
      color: "bg-yellow-100"
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Iyer",
      role: "Cricket Enthusiast, Mumbai",
      text: "Reliable, courteous, and always on time. ENTREX is more than a transport provider—they're our mobility partner.",
      rating: 5
    },
    {
      name: "Masha Pillai",
      role: "Finance Coach, Bangalore",
      text: "As an expat, I felt completely at ease with ENTREX. Every ride was smooth, safe, and incredibly professional.",
      rating: 5
    },
    {
      name: "Aryan Khan",
      role: "School Football Coach, Delhi",
      text: "Best service I've used in a while. My entire team now orders from here—reliable and affordable.",
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Contact Bar */}
      <div className="w-full bg-gray-100 py-2 text-center text-sm text-gray-600">
        <span>+91 44 4953 0055 | +91 98400 27990 | +91 91767 81444</span>
      </div>

      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <img src="/figmaAssets/background--3--1.png" alt="Entrex" className="h-12" />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <Link 
                key={index} 
                href={item === "Clients" ? "/clients" : "/"}
                className={`text-gray-700 hover:text-orange-500 transition-colors ${
                  item === "Clients" ? "text-orange-500 font-semibold" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Trusted by 1500+ popular companies
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
        </p>
        
        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
          {companyLogos.map((company, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <div className="text-gray-400 font-semibold text-lg">
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What We Offer</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our services are designed to meet your business requirements, offering seamless, safe, and reliable ground transportation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-6 text-center ${service.color} border-0 shadow-md hover:shadow-lg transition-shadow`}>
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-md">
                <CardContent className="p-0">
                  <div className="flex mb-4 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-center bg-gray-50 rounded-lg p-8 w-[280px]">
              <img src="/figmaAssets/itta-logo1-1.png" alt="ITTA" className="h-20 mx-auto mb-4" />
              <p className="text-sm font-bold text-gray-800 mb-2">Affiliations: ITTA – Indian</p>
              <p className="text-sm font-bold text-gray-800 mb-4">Association of Tour Operators</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency and safety features you can depend on.
              </p>
            </div>
            
            <div className="relative flex-1 flex justify-center">
              <img src="/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png" alt="Certification Frame" className="h-48" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">Our</div>
                  <div className="text-3xl font-bold text-gray-900">Certifications</div>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-8 w-[280px]">
              <img src="/figmaAssets/iato-1.png" alt="IATO" className="h-20 mx-auto mb-4" />
              <p className="text-sm font-bold text-gray-800 mb-2">Affiliations: IATO – Indian</p>
              <p className="text-sm font-bold text-gray-800 mb-4">Association of Tour Operators</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency and safety features you can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Talk</h2>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:bookings@entrex.in" className="text-blue-600 hover:underline">
                  bookings@entrex.in
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Socials</h3>
              <div className="space-y-2">
                <div><a href="#" className="text-blue-600 hover:underline">Instagram</a></div>
                <div><a href="#" className="text-blue-600 hover:underline">Twitter</a></div>
                <div><a href="#" className="text-blue-600 hover:underline">Facebook</a></div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Name" className="border-gray-300" />
                <Input placeholder="Email" type="email" className="border-gray-300" />
              </div>
              
              <Select>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="What service are you interested in" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chauffeur">Chauffeur Services</SelectItem>
                  <SelectItem value="airport">Airport Transfers</SelectItem>
                  <SelectItem value="commute">Employee Commute</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Below $500</SelectItem>
                  <SelectItem value="med">$500 - $2000</SelectItem>
                  <SelectItem value="high">Above $2000</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea placeholder="Message" className="border-gray-300 min-h-[120px]" />
              
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/figmaAssets/background--3--1.png" alt="Entrex" className="h-12 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Entrex has been serving Pune for several months. Offering our corporate clientele, the most reliable corporate transport service in Pune.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-600 hover:text-gray-900">About</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Packages</a></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Team Solutions</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Privacy and Security</a></div>
                <div><a href="#" className="text-gray-600 hover:text-gray-900">Resources</a></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>2nd Floor, Thakor Plaza, SG No. 305-306,<br />Pune 411014</div>
                <div>bookings@entrex.in</div>
                <div>+91 44 4953 0055</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-600 text-sm">Copyright © 2024 Entrex. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
