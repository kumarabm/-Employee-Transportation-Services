import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const ContactUs = () => {
 const navigationItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Tour Packages", href: "/employee-transportation-services" },
  { label: "Luxury Car Rentals", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact-us" },
];
  
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

export default ContactUs;