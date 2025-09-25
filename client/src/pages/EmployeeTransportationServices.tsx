import React, { useState } from "react";
import { Link } from "wouter";
import {
  FaLaptopCode,
  FaHeadset,
  FaHeart,
  FaIndustry,
  FaUniversity,
  FaBuilding,
  FaChair,
  FaHotel,
  FaBoxOpen,
  FaLandmark,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "../../public/figmaAssets/heart.png";

const EmployeeTransportationServices = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Facebook",
    "Netflix",
    "Uber",
    "Airbnb",
    "Spotify",
    "Tesla",
    "Adobe",
    "Salesforce",
  ];

  // What We Offer Services - exactly as shown in uploaded design (6 services in 2x3 grid)
  const services = [
    {
      title: "Real-Time Tracking Solutions",
      description:
        "Monitor your journeys with live GPS tracking and receive real-time updates on vehicle location and estimated arrival times.",
      icon: "⚡",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Route Optimization",
      description:
        "Intelligent routing algorithms ensure the most efficient and time-saving travel routes for maximum productivity.",
      icon: "🐾",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      title: "Safety Management Solutions",
      description:
        "Comprehensive safety protocols and security measures ensuring worry-free employee transportation services.",
      icon: "🔧",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      title: "Smart Chauffeur Matching",
      description:
        "Advanced algorithms match employees with the most suitable professional chauffeurs based on preferences.",
      icon: "🔒",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Advanced Fleet Management",
      description:
        "Modern vehicle fleet with regular maintenance and quality assurance for reliable and comfortable service.",
      icon: "✈️",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Cost-Effective Solution Platform",
      description:
        "Optimized pricing models and efficient resource allocation to provide maximum value for corporate transportation.",
      icon: "💰",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  // Who We Serve Services - exactly as shown in uploaded design (10 icons in 2x5 grid)
  const whoWeServeServices = [
    {
      title: "IT Companies",
      icon: <FaLaptopCode className="text-gray-600" size={48} />,
    },
    {
      title: "BPO & Call Centers",
      icon: <FaHeadset className="text-blue-500" size={48} />,
    },
    {
      title: "Hospitals & Clinics",
      icon: <FaHeart className="text-red-500" size={48} />,
    },
    {
      title: "Manufacturing Units",
      icon: <FaIndustry className="text-orange-500" size={48} />,
    },
    {
      title: "Colleges & Universities",
      icon: <FaUniversity className="text-blue-600" size={48} />,
    },
    {
      title: "Business Parks",
      icon: <FaBuilding className="text-blue-400" size={48} />,
    },
    {
      title: "Shared Workspaces",
      icon: <FaChair className="text-teal-500" size={48} />,
    },
    {
      title: "Hotels & Hospitality",
      icon: <FaHotel className="text-yellow-500" size={48} />,
    },
    {
      title: "Warehousing & Logistics",
      icon: <FaBoxOpen className="text-yellow-600" size={48} />,
    },
    {
      title: "Government & PSU Offices",
      icon: <FaLandmark className="text-gray-500" size={48} />,
    },
  ];

  // How It Works Steps - exactly 4 steps as shown in design
  const steps = [
    {
      number: "01",
      title: "Requirement Mapping",
      description:
        "We understand your workforce size, shifts, routes, and security requirements.",
    },
    {
      number: "02",
      title: "Deployment Plan",
      description:
        "We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools.",
    },
    {
      number: "03",
      title: "Live Execution",
      description:
        "Vehicles are dispatched on time with real-time monitoring and backup protocols.",
    },
    {
      number: "04",
      title: "Transparent Billing",
      description:
        "Automated trip logs, easy reconciliation, and centralized invoicing.",
    },
  ];

  // Why ENTREX Features - exactly 6 as shown in design
  const whyEntrexFeatures = [
    {
      title: "Real-Time GPS Tracking",
      description:
        "Know exactly where your employees are during their commute with live tracking technology.",
      icon: "🎯",
    },
    {
      title: "Roster Management",
      description:
        "Efficiently manage employee schedules and transportation rosters with our advanced system.",
      icon: "🔒",
    },
    {
      title: "Smart Route Optimization",
      description:
        "AI-powered route planning ensures the most efficient paths and reduced travel time.",
      icon: "🛣️",
    },
    {
      title: "Professional Chauffeurs",
      description:
        "Experienced, vetted drivers with excellent safety records and customer service skills.",
      icon: "👨‍🦱",
    },
    {
      title: "Easy Booking and Tracking",
      description:
        "Simple booking process with comprehensive tracking capabilities through our mobile app.",
      icon: "📅",
    },
    {
      title: "Backup Vehicle and Driver Availability",
      description:
        "Redundancy built into our system ensures uninterrupted service even during peak demands.",
      icon: "🚗",
    },
  ];

  // Website Benefits
  const websiteBenefits = [
    {
      title: "Hassle-free Commute",
      description:
        "Enjoy stress-free daily commuting with reliable pickup and drop-off services.",
    },
    {
      title: "Cost-Effective",
      description:
        "Affordable corporate transportation solutions that fit within your budget constraints.",
    },
    {
      title: "Best-in-class Vehicle Tracking",
      description:
        "Advanced GPS tracking technology provides real-time location updates and route optimization.",
    },
    {
      title: "Backup in case of Vehicle/Driver Non-Availability",
      description:
        "Comprehensive backup systems ensure continuous service availability without disruptions.",
    },
  ];

  // Company Logos for Trusted By section
  // const companyLogos = [
  //   { name: "Google", src: "/figmaAssets/google-logo.png" },
  //   { name: "Creative", src: "/figmaAssets/creative-logo.png" },
  //   { name: "Airbnb", src: "/figmaAssets/airbnb-logo.png" },
  //   { name: "Shopify", src: "/figmaAssets/shopify-logo.png" },
  //   { name: "Amazon", src: "/figmaAssets/amazon-logo.png" },
  //   { name: "Dropbox", src: "/figmaAssets/dropbox-logo.png" },
  //   { name: "Spotify", src: "/figmaAssets/spotify-logo.png" },
  //   { name: "Asana", src: "/figmaAssets/asana-logo.png" },
  //   { name: "Deliveroo", src: "/figmaAssets/deliveroo-logo.png" },
  //   { name: "Nissan", src: "/figmaAssets/nissan-logo.png" },
  // ];

  // FAQs
  const faqs = [
    {
      question:
        "What types of vehicles do you provide for employee transportation?",
      answer:
        "We offer a comprehensive fleet including sedans, SUVs, and mini-buses to accommodate different group sizes and comfort requirements for corporate transportation.",
    },
    {
      question: "How do you ensure driver safety and reliability?",
      answer:
        "All our chauffeurs undergo thorough background verification, regular training programs, and are equipped with GPS tracking for real-time monitoring and safety compliance.",
    },
    {
      question: "Can you customize routes for our employees?",
      answer:
        "Yes, we work closely with you to design optimal routes based on your employee locations, office timings, and specific requirements for maximum efficiency.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing including monthly packages, per-trip rates, and custom corporate contracts based on your specific needs and usage patterns.",
    },
    {
      question: "Do you provide services during weekends and holidays?",
      answer:
        "Yes, we provide comprehensive 24/7 services including weekends and holidays based on your business requirements and schedules.",
    },
    {
      question: "How can we track our employees during their commute?",
      answer:
        "Our advanced GPS tracking system provides real-time location updates, trip notifications, and comprehensive reporting for enhanced safety and monitoring.",
    },
  ];

  // News & Updates
  const newsUpdates = [
    {
      title: "ENTREX Launches Advanced Fleet Management System",
      excerpt:
        "New AI-powered technology platform enhances real-time tracking capabilities and significantly improves customer experience across all corporate transportation services.",
      date: "March 15, 2024",
      image: "/figmaAssets/news-1.png",
    },
    {
      title: "Strategic Partnership with Leading Tech Companies",
      excerpt:
        "ENTREX announces major partnerships with Fortune 500 technology firms to provide comprehensive employee transportation solutions and corporate mobility services.",
      date: "March 10, 2024",
      image: "/figmaAssets/news-2.png",
    },
    {
      title: "Service Expansion to 15 New Cities Across India",
      excerpt:
        "ENTREX expands operations significantly to serve more corporate clients with premium transportation services and comprehensive mobility solutions nationwide.",
      date: "March 5, 2024",
      image: "/figmaAssets/news-3.png",
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
    <div className="bg-white w-full min-h-screen">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-6">
                <div>
                  <img
                    src={Image}
                    alt="Heart Icon"
                    style={{ width: "50px", height: "80px" }}
                  />
                </div>
                <div>
                  <span className="text-red-500 font-bold text-xl">
                    EMPLOYEE TRANSPORTATION SERVICES
                  </span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Seamless, Safe, and Smart
                <br />
                Corporate Solutions for
                <br />
                <span className="text-orange-500">Employee Commute</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your employee transportation with ENTREX's
                comprehensive corporate commute solutions. We ensure safe,
                reliable, and efficient travel for your workforce with advanced
                technology and professional service.
              </p>
            </div>

            {/* Right Column - Booking Form */}
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Book Your Ride Instantly
              </h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Number of Employees"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Service Required"
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none transition-all"
                />

                <textarea
                  placeholder="Tell us about your transportation requirements"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none resize-none transition-all"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg"
                >
                  LET'S BOOK NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200`}
              >
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ENTREX for Employee Commute Section */}
      <section id="why-entrex" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                Why ENTREX for
                <br />
                Employee Commute?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyEntrexFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                <img
                  src="/figmaAssets/car-interior.png"
                  alt="Professional Car Interior"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNzIuMDkxIDE4Mi4wOTEgMTkwIDE2MCAxOTBDMTM3LjkwOSAxOTAgMTIwIDE3Mi4wOTEgMTIwIDE1MEMxMjAgMTI3LjkwOSAxMzcuOTA5IDExMCAxNjAgMTEwQzE4Mi4wOTEgMTEwIDIwMCAxMjcuOTA5IDIwMCAxNTBaIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0yODAgMTUwQzI4MCAxNzIuMDkxIDI2Mi4wOTEgMTkwIDI0MCAxOTBDMjE3LjkwOSAxOTAgMjAwIDE3Mi4wOTEgMjAwIDE1MEMyMDAgMTI3LjkwOSAyMTcuOTA5IDExMCAyNDAgMTEwQzI2Mi4wOTEgMTEwIDI4MCAxMjcuOTA5IDI4MCAxNTBaIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5Q0EwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Q2FyIEludGVyaW9yPC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Website is Your Best Salesperson Section */}
      <section id="website-benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/figmaAssets/professional-car.png"
                  alt="Professional Car Service"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMTUwIiBjeT0iMjIwIiByPSIzMCIgZmlsbD0iIzlCOUNBMCIvPgo8Y2lyY2xlIGN4PSIzNTAiIGN5PSIyMjAiIHI9IjMwIiBmaWxsPSIjOUI5Q0EwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5Q0EwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+UHJvZmVzc2lvbmFsIENhcjwvdGV4dD4KPC9zdmc+";
                  }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Your Website Is Your Best Salesperson
              </h2>

              <div className="space-y-6">
                {websiteBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0"></div>
                )}
                <div className="relative z-10 bg-white border-2 border-orange-500 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    <span className="text-3xl">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
            Who We Serve
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
            {whoWeServeServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-gray-700 text-sm font-medium">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trusted by 1500+ popular companies
          </h2>
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
            className="w-[800px] h-[250px] object-contain"
            alt="Logos"
            src="/figmaAssets/logos.png"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-center bg-white rounded-lg p-8 w-[280px] shadow-md">
              <img
                src="/figmaAssets/itta-logo1-1.png"
                alt="ITTA"
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-bold text-gray-800 mb-2">
                Affiliations: ITTA – Indian
              </p>
              <p className="text-sm font-bold text-gray-800 mb-4">
                Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Certified member ensuring quality standards and professional
                service delivery.
              </p>
            </div>

            <div className="relative flex-1 flex justify-center">
              <img
                src="/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
                alt="Certification Frame"
                className="h-80"
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

            <div className="text-center bg-white rounded-lg p-8 w-[280px] shadow-md">
              <img
                src="/figmaAssets/iato-1.png"
                alt="IATO"
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-bold text-gray-800 mb-2">
                Affiliations: IATO – Indian
              </p>
              <p className="text-sm font-bold text-gray-800 mb-4">
                Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Licensed operator providing reliable and secure transportation
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              News & Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsUpdates.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjOUI5Q0EwIi8+Cjwvc3ZnPgo8L3N2Zz4=";
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Let's Talk
            </h2>

            <div className="mb-8">
              <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:bookings@entrex.in"
                  className="text-blue-600 hover:underline"
                >
                  bookings@entrex.in
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Socials</h3>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    Instagram
                  </a>
                </div>
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Name" className="border-gray-300" />
                <Input
                  placeholder="Email"
                  type="email"
                  className="border-gray-300"
                />
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

              <Textarea
                placeholder="Message"
                className="border-gray-300 min-h-[120px]"
              />

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

export default EmployeeTransportationServices;
