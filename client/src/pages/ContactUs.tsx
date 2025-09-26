import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


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
      description:
        "Discreet, professional chauffeurs for directors, VIPs, and senior leadership.",
      color: "bg-blue-100",
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      description:
        "Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
      color: "bg-yellow-100",
    },
    {
      icon: "👥",
      title: "Employee Commute Programs",
      description:
        "Safe, app-tracked transportation for staff with route optimization and rostering.",
      color: "bg-orange-100",
    },
    {
      icon: "🌍",
      title: "Expat & Guest Handling",
      description:
        "Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
      color: "bg-purple-100",
    },
    {
      icon: "📊",
      title: "Centralized Billing & MIS Reports",
      description:
        "Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
      color: "bg-cyan-100",
    },
    {
      icon: "📱",
      title: "App-Based Booking & Trip Management",
      description:
        "Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.",
      color: "bg-yellow-100",
    },
  ];

  const servicesMenuItems = [
    {
      title: "Corporate Mobility Solutions",
      items: [
        "Employee Transportation",
        "Employee Trips",
        "Executive Leasing",
        "Roster Planning & Routing",
        "Management Reporting",
        "Systemized Billing",
        "Transport Desk & Ticketing",
      ],
    },
    {
      title: "Event & Custom Travel",
      items: [
        "Events & Seminars",
        "Elite Weddings",
        "Family Events & Holidays",
        "Customized Tours",
      ],
    },
    {
      title: "Tour & Rental Services",
      items: [
        "Pilgrim Tours",
        "Package Tours",
        "Premium Rent-a-Cab",
        "Ticketing",
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };


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
              <img
                src="/figmaAssets/background--3--1.png"
                alt="Entrex"
                className="h-12"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-[50px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-testid={`nav-${item.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <Link
                  href={item.href}
                  className="font-medium text-black text-lg hover:text-[#f3aa45] transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>

                {/* Mega Menu for Services */}
                {item.hasMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 px-10 py-8">
                    {/* Pointer */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-md"></div>

                    {/* 3-Column Grid */}
                    <div className="flex gap-16">
                      {servicesMenuItems.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                          <h3 className="font-semibold text-[15px] text-[#1a1a40]">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem, i) => (
                              <li
                                key={i}
                                className="text-gray-600 text-sm hover:text-[#ed2628] transition"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-30"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-white hover:text-[#f3aa45] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                  {/* Mega Menu for Services */}
                  {item.hasMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 px-10 py-8">
                      {/* Pointer */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-md"></div>

                      {/* 3-Column Grid */}
                      <div className="flex gap-16">
                        {servicesMenuItems.map((section, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            <h3 className="font-semibold text-[15px] text-[#1a1a40]">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem, i) => (
                                <li
                                  key={i}
                                  className="text-gray-600 text-sm hover:text-[#ed2628] transition"
                                >
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

 <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading + Icons Row */}
      <div className="flex items-start justify-between">
        
        {/* Left Side Text */}
        <div className="flex-1 text-left">
          <p className="text-sm text-gray-600 mb-2">Get Started</p>
          <h2 className="text-4xl font-bold text-black leading-snug">
            Get in touch with us. <br />
            We're here to assist you.
          </h2>
        </div>

        {/* Right Side Social Icons */}
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
          >
            <FaTwitter size={14} />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-12 space-y-6">
        
        {/* Row 1: Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black text-gray-800 placeholder-gray-400 py-2 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black text-gray-800 placeholder-gray-400 py-2 outline-none transition"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black text-gray-800 placeholder-gray-400 py-2 outline-none transition"
          />
        </div>

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-gray-300 focus:border-black text-gray-800 placeholder-gray-400 py-2 outline-none transition resize-none"
          required
        ></textarea>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition"
          >
            Leave us a Message →
          </Button>
        </div>
      </form>
    </section>


      {/* What We Offer Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our services are designed to meet your business requirements,
            offering seamless, safe, and reliable ground transportation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 text-center ${service.color} border-0 shadow-md hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
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
          Every ENTREX ride comes with thoughtful in-car provisions to ensure
          your comfort, safety, and satisfaction.
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
              <img
                src="/figmaAssets/background--3--1.png"
                alt="Entrex"
                className="h-12 mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Entrex has been serving Pune for several months. Offering our
                corporate clientele, the most reliable corporate transport
                service in Pune.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Services
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Packages
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Team Solutions
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy and Security
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Resources
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  2nd Floor, Thakor Plaza, SG No. 305-306,
                  <br />
                  Pune 411014
                </div>
                <div>bookings@entrex.in</div>
                <div>+91 44 4953 0055</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright © 2024 Entrex. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
