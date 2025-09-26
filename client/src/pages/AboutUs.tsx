import React, { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronDown } from "lucide-react";
import mugundhanImg from "../../../attached_assets/4388243b170dd9d4c60f4aac1c90e1116efbd5c5.png";
import balajiImg from "../../../attached_assets/b50e807326be58e8dae4929f129342f08b6a8c84.png";
import man from "../pages/Assets/backman.png";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

 const navigationItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Tour Packages", href: "/employee-transportation-services" },
  { label: "Luxury Car Rentals", href: "#luxury-rentals" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact-us" },
];


const AboutUsPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const services = [
    {
      icon: "🏢",
      title: "Corporate",
      description: "Professional chauffeur services for business executives and corporate events with premium vehicles.",
      color: "bg-blue-50"
    },
    {
      icon: "✈️",
      title: "Airport",
      description: "Reliable airport transfers with flight tracking, punctual pickup and drop-off services.",
      color: "bg-orange-50"
    },
    {
      icon: "🎯",
      title: "On-time",
      description: "Guaranteed punctual service with real-time tracking and professional chauffeurs.",
      color: "bg-green-50"
    }
  ];

  const founders = [
    {
      name: "Founder Name 1",
      role: "Chief Executive Officer",
      image: "/figmaAssets/mask-group.png",
      description: "Leading the company with vision and strategic direction for premium transportation services."
    },
    {
      name: "Founder Name 2", 
      role: "Chief Operating Officer",
      image: "/figmaAssets/mask-group-1.png",
      description: "Overseeing operations and ensuring excellence in service delivery across all touchpoints."
    }
  ];

  const journeySteps = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize corporate transportation" },
    { year: "2019", title: "Service Expansion", description: "Extended services to cover major cities across India" },
    { year: "2020", title: "Digital Platform", description: "Launched advanced booking and tracking technology" },
    { year: "2021", title: "Premium Fleet", description: "Introduced luxury vehicle segment for VIP clients" },
    { year: "2022", title: "Corporate Partnerships", description: "Established partnerships with leading corporations" },
    { year: "2023", title: "Technology Innovation", description: "AI-powered route optimization and customer experience" }
  ];

  const testimonials = [
    {
      name: "Ramesh Iyer",
      role: "Cricket Enthusiast, Mumbai",
      text: "“Reliable, courteous, and always on time. ENTREX is more than a transport provider—they’re our mobility partner.”",
      rating: 5
    },
    {
      name: "Sneha Pillai", 
      role: "Fitness Coach, Bangalore",
      text: "As an expat, I felt completely at ease with ENTREX. Every ride was smooth, safe, and incredibly professional.",
      rating: 5
    },
    {
      name: "Ayaan Khan",
      role: "School Football Coach, Delhi", 
      text: "Best football I’ve used in a while. My entire team now orders from here – reliable and affordable.",
      rating: 5
    }
  ];

  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", "Facebook", "Netflix", "Uber", "Airbnb", "Spotify", "Tesla", "Adobe", "Salesforce"
  ];

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We provide chauffeur services across major cities in India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune."
    },
    {
      question: "How do I book a ride?",
      answer: "You can book through our website, mobile app, or by calling our 24/7 customer service hotline."
    },
    {
      question: "What types of vehicles are available?",
      answer: "We offer a range of vehicles from premium sedans to luxury SUVs, all maintained to the highest standards."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we specialize in airport transfers with flight tracking and meet & greet services."
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, credit cards, corporate accounts, and digital payment methods."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our customer support team is available round the clock for assistance and bookings."
    }
  ];

  const newsItems = [
    {
      title: "ENTREX Expands to 5 New Cities",
      date: "March 15, 2024",
      image: "/figmaAssets/image.png",
      description: "We're excited to announce our expansion to 5 new cities, bringing premium chauffeur services to more corporate clients."
    },
    {
      title: "New Fleet of Electric Vehicles",
      date: "February 28, 2024", 
      image: "/figmaAssets/image.png",
      description: "ENTREX introduces eco-friendly electric vehicles to our premium fleet, supporting sustainable transportation."
    },
    {
      title: "Partnership with Leading Hotels",
      date: "February 10, 2024",
      image: "/figmaAssets/image.png", 
      description: "Strategic partnerships with 5-star hotels to provide seamless guest transportation services."
    }
  ];

   // FAQs
  const leftColumnFaqs = [
    {
      id: "item-1",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-2",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-3",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-4",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-5",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-6",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  const rightColumnFaqs = [
    {
      id: "item-7",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-8",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-9",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-10",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-11",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-12",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  // News & Updates
  const newsUpdates = [
    {
      id: 1,
      title: "Surviving through tough times as a first time SaaS…",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "BUSINESS",
      categoryColor: "bg-[#ffe9d9]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/mask-group-1.png",
    },
    {
      id: 2,
      title: "SaaS customer development and no-code prototypes",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "MARKETING",
      categoryColor: "bg-[#d8f4fc]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/image.png",
    },
    {
      id: 3,
      title: "Highnote Emerges from Stealth with $54 Million in …",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "ANALYTICS",
      categoryColor: "bg-[#e0f8de]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/mask-group.png",
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

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left order-2 lg:order-1">
              {/* Main Heading */}
              <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 text-gray-900">
                India's Premier<br />
                Chauffeur Partner for<br />
                Corporates & Expats
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-[500px]">
                ENTREX delivers reliable, professional, and tech-enabled ground transportation services across India, backed by premium vehicles, multilingual chauffeurs, and comprehensive MIS reporting—offering unmatched comfort and confidence for high-value travelers seeking more than just a ride.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services"
                  className="bg-gradient-to-r from-[#f3aa45] to-[#ed2628] text-white px-8 py-3 rounded-full font-medium text-base hover:opacity-90 transition-opacity shadow-lg text-center"
                  aria-label="Explore our services"
                >
                  Explore Our Services
                </a>
                <a 
                  href="#contact"
                  className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-base hover:bg-gray-900 hover:text-white transition-colors shadow-lg text-center"
                  aria-label="Talk to our team"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Right Column - Team Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2">
              <img 
                src={man}
                alt="Professional team collaboration at ENTREX"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col">
              {/* Flame Logo */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-[#f3aa45] to-[#ed2628] rounded-full flex items-center justify-center">
                  <div className="text-white text-3xl">🔥</div>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900" style={{color: '#f3aa45'}}>Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                Founded with a vision to transform corporate transportation in India, ENTREX has grown 
                from a startup to the country's most trusted chauffeur service provider. We understand 
                that every journey matters, whether it's getting an executive to an important meeting 
                or ensuring VIP guests experience the finest hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Our commitment to excellence, safety, and customer satisfaction has made us the preferred 
                choice for leading corporations, hotels, and discerning individuals across India.
              </p>
            </div>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className={`p-6 rounded-lg ${service.color} shadow-sm`}>
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-4">{service.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    {/* Meet the Founders */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* OUR TEAM Badge */}
    <div className="flex justify-center mb-4">
      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
        OUR TEAM
      </span>
    </div>

    {/* Section Title */}
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-2 text-gray-900">
      Meet the Founders
    </h2>

    {/* Subtitle */}
    <p className="text-center text-gray-600 mb-16">
      Vision-Driven. Execution-Focused.
    </p>

    {/* Founders Grid */}
    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
      
      {/* Founder 1 */}
      <div className="text-center md:text-left">
        {/* Image with yellow background */}
        <div 
          className="w-72 h-80 mx-auto mb-6 rounded-xl overflow-hidden flex items-center justify-center" 
          style={{ backgroundColor: '#FFC300' }}
        >
          <img 
            src={mugundhanImg}
            alt="Mugundhan Sankar" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h3 className="text-lg font-semibold text-gray-900">Mugundhan Sankar</h3>
        <p className="text-gray-600 text-sm mb-4">Founder & Managing Director</p>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">
          With 15+ years in logistics and operations, Mugundhan built ENTEX to redefine 
          Indian ground transport with global standards and Indian values. His vision continues 
          to guide the company’s expansion and operational discipline.
        </p>
      </div>

      {/* Founder 2 */}
      <div className="text-center md:text-left">
        {/* Image with red background */}
        <div 
          className="w-72 h-80 mx-auto mb-6 rounded-xl overflow-hidden flex items-center justify-center" 
          style={{ backgroundColor: '#FF3C3C' }}
        >
          <img 
            src={balajiImg}
            alt="Balaji A" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h3 className="text-lg font-semibold text-gray-900">Balaji A</h3>
        <p className="text-gray-600 text-sm mb-4">Director – Strategy & Partnerships</p>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">
          Focused on client growth and digital transformation, Balaji leads ENTEX’s enterprise 
          engagements, tech roadmap, and innovation-driven service model.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Join Our Team */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Join our team</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe it takes great people to make a great product. That's why we hire not only the perfect professional fits, but people who embody our company values.
            </p>
            <a 
              href="#careers" 
              className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
            >
              Explore integrations →
            </a>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for team illustration - can be replaced with actual image */}
            <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Team Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREX - Our Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">ENTREX - Our Journey</h2>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Colorful 3D Box */}
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 ${
                    index % 6 === 0 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                    index % 6 === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                    index % 6 === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                    index % 6 === 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    index % 6 === 4 ? 'bg-gradient-to-br from-red-400 to-red-600' :
                    'bg-gradient-to-br from-pink-400 to-pink-600'
                  }`}>
                    <span className="text-white font-bold text-sm">{step.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-md bg-white">
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

{/* Trusted by Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trusted by 1500+ popular companies
          </h1>
          <p className="mx-auto mt-[-40px] w-fit font-medium text-black text-xs xs:text-base text-center tracking-[0] leading-relaxed whitespace-nowrap">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <div className="text-gray-400 font-semibold text-lg text-center">
                  {company}
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-full flex justify-center">
          <img
            className="w-[900px] h-[350px] object-contain"
            alt="Logos"
            src="/figmaAssets/logos.png"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-center bg-white rounded-lg p-8 w-[280px]">
              <img
                src="/figmaAssets/itta-logo1-1.png"
                alt="ITTA"
                className="w-[275px] h-[183px] object-cover"
              />
              &nbsp;
              <p className="text-sm font-bold text-gray-800 mb-2 lg:text-left">
                Affiliations: ITTA – Indian Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>

            <div className="relative flex-1 flex justify-center">
              <img
                src="/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
                alt="Certification Frame"
                className="h-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    Our
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    Certifications
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-white rounded-lg p-8 w-[280px]">
              <img
                src="/figmaAssets/iato-1.png"
                alt="IATO"
                className="w-[275px] h-[183px] object-cover"
              />
              &nbsp;
              <p className="text-sm font-bold text-gray-800 mb-2 lg:text-left">
                Affiliations: IATO – Indian Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-fit bg-[linear-gradient(103deg,rgba(255,156,18,1)_0%,rgba(255,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-lg tracking-[1.86px] leading-[28.0px] mb-4">
              FAQ
            </div>

            <h2 className="font-bold text-[#111827] text-3xl lg:text-5xl xl:text-[62.7px] text-center tracking-[-1.60px] leading-tight mb-6">
              Frequently Asked Questions (FAQs)
            </h2>

            <p className="font-normal text-[#111827] text-base lg:text-lg text-center tracking-[0] leading-relaxed max-w-[800px]">
              Got questions? We've got answers! Find solutions to common queries
              about our services, processes, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1200px] mx-auto">
            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-1">
                {leftColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-9">
                {rightColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              News & Updates
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsUpdates.map((news) => (
              <div
                key={news.id}
                className="rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col"
              >
                {/* Image */}
                <div className="h-40 md:h-48 bg-gradient-to-br from-blue-50 to-orange-50">
                  <img
                    src={news.image}
                    alt="Article image"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {news.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`${news.categoryColor} text-gray-0 font-bold text-base tracking-[1.14px] [font-family:'Inter',Helvetica] rounded-[21.33px] px-4 py-2 h-8`}
                    >
                      {news.category}
                    </Badge>
                    <span>
                      {news.date} · {news.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-10">
            <Button
              variant="ghost"
              className="text-blue-600 text-base md:text-lg font-medium hover:bg-transparent flex items-center gap-2"
            >
              View more articles
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Let's Talk Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Let's Talk</h2>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2 text-gray-900 text-xl">Email</h3>
              <p className="text-gray-600 text-lg">
                <a href="mailto:bookings@entrex.in" className="text-blue-600 hover:underline">
                  bookings@entrex.in
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 text-xl">Socials</h3>
              <div className="space-y-3">
                <div><a href="#" className="text-blue-600 hover:underline text-lg">Instagram</a></div>
                <div><a href="#" className="text-blue-600 hover:underline text-lg">Twitter</a></div>
                <div><a href="#" className="text-blue-600 hover:underline text-lg">Facebook</a></div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Name" className="border-gray-300 h-12" />
                <Input placeholder="Email" type="email" className="border-gray-300 h-12" />
              </div>
              
              <Select>
                <SelectTrigger className="border-gray-300 h-12">
                  <SelectValue placeholder="What service are you interested in" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chauffeur">Chauffeur Services</SelectItem>
                  <SelectItem value="airport">Airport Transfers</SelectItem>
                  <SelectItem value="corporate">Corporate Travel</SelectItem>
                  <SelectItem value="events">Event Transportation</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="border-gray-300 h-12">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Below ₹10,000</SelectItem>
                  <SelectItem value="med">₹10,000 - ₹50,000</SelectItem>
                  <SelectItem value="high">Above ₹50,000</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea placeholder="Message" className="border-gray-300 min-h-[120px]" />
              
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded h-12">
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
                ENTREX has been serving India's corporate sector with premium chauffeur services. 
                Offering the most reliable and professional transportation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <div className="space-y-2 text-sm">
                <div><Link href="/about-us" className="text-gray-600 hover:text-gray-900">About</Link></div>
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
};

export default AboutUsPage;