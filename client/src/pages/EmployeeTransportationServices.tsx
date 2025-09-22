import React, { useState } from "react";
import { Link } from "wouter";

const EmployeeTransportationServices = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "#services", hasMenu: true },
    { label: "Tour Packages", href: "#tour-packages" },
    { label: "Luxury Car Rentals", href: "#luxury-rentals" },
    { label: "Clients", href: "/clients" },
    { label: "Contact Us", href: "#contact" },
  ];

  const servicesMenuItems = [
    { label: "Airport Transfers", href: "#airport-transfers" },
    { label: "Corporate Travel", href: "#corporate-travel" },
    { label: "Employee Commute", href: "#employee-commute" },
    { label: "Event Transportation", href: "#event-transportation" },
  ];

  const services = [
    {
      title: "Executive Transportation Solutions",
      description: "Premium executive transportation with dedicated chauffeurs for corporate leadership and VIP clients",
      icon: "🚗",
      color: "bg-blue-100"
    },
    {
      title: "Airport Transfer",
      description: "Professional airport pickup and drop-off services with real-time flight tracking and punctual service",
      icon: "✈️",
      color: "bg-yellow-100"
    },
    {
      title: "Corporate Transportation",
      description: "Comprehensive corporate travel solutions for business meetings, conferences, and official events",
      icon: "🏢",
      color: "bg-orange-100"
    },
    {
      title: "Special Event Handling",
      description: "Specialized transportation services for corporate events, product launches, and special occasions",
      icon: "🎯",
      color: "bg-purple-100"
    },
    {
      title: "Long Distance Transportation",
      description: "Comfortable and safe long-distance travel solutions for outstation business requirements",
      icon: "🛣️",
      color: "bg-blue-100"
    },
    {
      title: "Corporate Cab with GPS Tracker",
      description: "Advanced GPS-enabled corporate cabs with real-time tracking for enhanced safety and monitoring",
      icon: "📍",
      color: "bg-yellow-100"
    }
  ];

  const features = [
    {
      title: "100% RTO Enabled",
      description: "All vehicles are fully RTO certified and compliant with government regulations for legal operation",
      icon: "🏛️",
      color: "bg-blue-100"
    },
    {
      title: "Vehicles with Verified Documentation",
      description: "Complete documentation verification including registration, insurance, and permit validation",
      icon: "📋",
      color: "bg-yellow-100"
    },
    {
      title: "Luxury and Well-Maintained Vehicles",
      description: "Premium fleet of luxury vehicles with regular maintenance and cleanliness standards",
      icon: "🚙",
      color: "bg-orange-100"
    },
    {
      title: "Multilingual Chauffeurs",
      description: "Professional drivers fluent in multiple languages for seamless communication with clients",
      icon: "👨‍💼",
      color: "bg-purple-100"
    },
    {
      title: "Safety & Security Ensured Through High-End GPS",
      description: "Advanced GPS tracking systems with real-time monitoring for enhanced security and safety",
      icon: "📡",
      color: "bg-green-100"
    },
    {
      title: "Best Pricing Among Premium Segment Service Providers",
      description: "Competitive pricing without compromising on quality and service excellence in premium segment",
      icon: "💰",
      color: "bg-blue-100"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Requirement Mapping",
      description: "We understand your workforce size, shifts, routes, and security requirements.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Deployment Plan",
      description: "We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools",
      icon: "📋"
    },
    {
      number: "03",
      title: "Live Execution",
      description: "Vehicles are dispatched on time with real-time monitoring and backup protocols",
      icon: "📦"
    },
    {
      number: "04",
      title: "Transparent Billing",
      description: "Automated trip logs, easy reconciliation, and centralized invoicing.",
      icon: "📊"
    }
  ];

  const industries = [
    { title: "IT Companies", icon: "💻", color: "from-blue-500 to-cyan-500" },
    { title: "Healthcare", icon: "🏥", color: "from-red-500 to-pink-500" },
    { title: "Manufacturing", icon: "🏭", color: "from-gray-500 to-slate-500" },
    { title: "Financial Services", icon: "🏦", color: "from-green-500 to-emerald-500" },
    { title: "Education", icon: "🎓", color: "from-purple-500 to-violet-500" },
    { title: "Retail & E-commerce", icon: "🛍️", color: "from-orange-500 to-amber-500" },
    { title: "Hospitality", icon: "🏨", color: "from-indigo-500 to-blue-500" },
    { title: "Government", icon: "🏛️", color: "from-teal-500 to-cyan-500" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "HR Director",
      company: "Tech Solutions Inc.",
      content: "ENTREX has transformed our employee transportation. The reliability and professionalism is unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      position: "Operations Manager",
      company: "Global Manufacturing Co.",
      content: "Real-time tracking and dedicated chauffeurs have made our corporate travel seamless.",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "CEO", 
      company: "Innovation Labs",
      content: "Cost-effective, reliable, and professional. ENTREX has been our trusted partner for 3 years.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What types of vehicles do you provide for employee transportation?",
      answer: "We offer a range of vehicles including sedans, SUVs, and mini-buses to accommodate different group sizes and comfort requirements."
    },
    {
      question: "How do you ensure driver safety and reliability?",
      answer: "All our chauffeurs undergo thorough background checks, regular training, and are equipped with GPS tracking for real-time monitoring."
    },
    {
      question: "Can you customize routes for our employees?", 
      answer: "Yes, we work with you to design optimal routes based on your employee locations and office timings for maximum efficiency."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing including monthly packages, per-trip rates, and custom corporate contracts based on your specific needs."
    },
    {
      question: "Do you provide services during weekends and holidays?",
      answer: "Yes, we provide 24/7 services including weekends and holidays based on your requirements."
    },
    {
      question: "How can we track our employees during their commute?",
      answer: "Our advanced GPS tracking system provides real-time location updates and trip notifications for enhanced safety and monitoring."
    }
  ];

  return (
    <div className="bg-[#f2f2f2] w-full min-h-screen">
      {/* Top Contact Bar */}
      <div className="w-full h-auto py-2 lg:h-[42px] bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-3xl items-center justify-between mx-auto lg:pt-3 px-4 lg:px-16 xl:px-24 2xl:px-32 3xl:px-[120px] gap-2 lg:gap-0">
          <div className="font-medium text-black text-sm lg:text-base tracking-[0] leading-[normal]">
            bookings@entrex.in
          </div>
          <div className="font-medium text-black text-sm lg:text-base tracking-[0] leading-[normal] text-center lg:text-right">
            <span className="hidden lg:inline">+91 44 4953 0055&nbsp;&nbsp;|&nbsp;&nbsp;+91 98400 27990&nbsp;&nbsp;|&nbsp;&nbsp;+91 91767 81444</span>
            <span className="lg:hidden">+91 44 4953 0055<br />+91 98400 27990</span>
          </div>
        </div>
      </div>

      {/* Hero Header with Navigation */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[898px] bg-[url(/figmaAssets/side-view-man-holding-suitcase--1--1.png)] bg-cover bg-center bg-no-repeat relative">
        {/* Navigation Header */}
        <div className="flex w-full max-w-screen-2xl items-center justify-between mx-auto pt-3 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-[129px] relative z-10">
          <Link href="/">
            <img
              className="w-[150px] sm:w-[180px] lg:w-[211.86px] h-12 sm:h-16 lg:h-20 object-cover"
              alt="Entrex Logo"
              src="/figmaAssets/background--3--1.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-[50px]">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  href={item.href}
                  className="font-medium text-white text-lg hover:text-[#f3aa45] transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>
                
                {item.hasMenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid gap-3">
                        {servicesMenuItems.map((menuItem, idx) => (
                          <Link
                            key={idx}
                            href={menuItem.href}
                            className="block p-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-[#ed2628] transition-colors"
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
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
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16 pt-20 lg:pt-0">
          <div className="w-full max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-full justify-center">
              
              {/* Left Column - Content */}
              <div className="text-white space-y-4 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-12 h-8 lg:w-16 lg:h-10 text-white fill-current" viewBox="0 0 64 40">
                    <path d="M8 24h4v8H8v-8zm40 0h4v8h-4v-8zM4 16l8-8h40l8 8v16h-8v8H12v-8H4V16z"/>
                  </svg>
                </div>

                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl [text-shadow:0px_4px_27.7px_#00000040] leading-tight">
                  Seamless, Safe, and Smart<br />Corporate Solutions for<br />Employee Commute
                </h1>

                <p className="font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                  Transform your employee transportation with ENTREX's comprehensive corporate commute solutions. We ensure safe, reliable, and efficient travel for your workforce.
                </p>

                <button className="bg-gradient-to-r from-[#f3aa45] to-[#ed2628] text-white px-6 py-3 rounded-full font-medium text-base hover:opacity-90 transition-opacity shadow-lg">
                  Call Us Now
                </button>

                <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 xl:gap-12 pt-4">
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">Verified</div>
                    <div className="text-xs lg:text-sm opacity-90">Chauffeurs</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">Real-time</div>
                    <div className="text-xs lg:text-sm opacity-90">Tracking</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">24×7</div>
                    <div className="text-xs lg:text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div className="bg-gradient-to-br from-[#ed2628] to-[#f3aa45] rounded-2xl p-6 lg:p-8 shadow-xl w-full max-w-md lg:max-w-none order-1 lg:order-2">
                <h2 className="text-white font-bold text-xl lg:text-2xl mb-6 text-center">
                  Book Your Employee Transport
                </h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-gray-600 focus:ring-2 focus:ring-white/50 outline-none">
                      <option>Number of Employees</option>
                      <option>10-25</option>
                      <option>26-50</option>
                      <option>51-100</option>
                      <option>100+</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Tell us about your transportation requirements"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-white text-[#ed2628] font-bold hover:bg-gray-100 transition-colors"
                  >
                    GET FREE CONSULTATION
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transportation solutions designed to meet all your corporate mobility needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:border-[#ed2628]/20"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ed2628] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-[#ed2628] font-medium hover:text-[#f3aa45] transition-colors duration-300">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ENTREX Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                  Why ENTREX for<br />Employee Commute?
                </h2>
                <p className="text-lg lg:text-xl text-gray-600">
                  Experience the difference with our comprehensive corporate transportation solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <div className="text-xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

            <div className="lg:order-last">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#ed2628] to-[#f3aa45] rounded-2xl p-8 lg:p-12 text-center shadow-xl">
                  <div className="text-white">
                    <svg className="w-32 h-20 lg:w-40 lg:h-24 mx-auto mb-6" fill="currentColor" viewBox="0 0 640 400">
                      <path d="M80 240h80v80H80v-80zm400 0h80v80h-80v-80zM40 160l80-80h400l80 80v160h-80v80H120v-80H40V160z"/>
                    </svg>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Premium Fleet</h3>
                    <p className="text-lg opacity-90">Modern vehicles equipped with advanced safety features</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Your Website Is Your Best Salesperson Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 lg:p-12">
                  <img
                    src="/figmaAssets/mask-group-1.png"
                    alt="Professional Car Service"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                  Why Your Website Is Your Best Salesperson
                </h2>
                <p className="text-lg lg:text-xl text-gray-600">
                  Discover how professional corporate transportation services can transform your business operations and employee satisfaction.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Increased Employee Satisfaction
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional transportation services boost employee morale and productivity by providing reliable, comfortable commute solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cost-Effective Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce overall transportation costs while providing premium service quality to your employees and business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Enhanced Company Reputation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional transportation services elevate your company's image and demonstrate care for employee welfare and business standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Reliability and Punctuality Assured
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ensure your employees and business operations run smoothly with our commitment to timely, reliable transportation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience seamless corporate transportation with our simple 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#ed2628]/20 relative">
                  
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#ed2628] to-[#f3aa45] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="text-4xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ed2628] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-transparent group-hover:scale-105">
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-2xl">
                      {industry.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ed2628] transition-colors duration-300">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ed2628] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ed2628] mb-2">50K+</div>
              <div className="text-gray-600">Trips Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ed2628] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ed2628] mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>

          {/* Book Your Journey Now Button */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-[#ed2628] to-[#f3aa45] text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Book Your Journey Now
            </button>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ed2628] to-[#f3aa45] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-[#ed2628] font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by 500+ Companies Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by 500+ popular companies
            </h2>
            <p className="text-lg text-gray-600">
              Leading organizations across industries trust ENTREX for their transportation needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm h-20 flex items-center justify-center">
                <div className="text-gray-400 font-bold text-lg">LOGO</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Our Certifications
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Recognized for excellence in service quality and safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#ed2628] to-[#f3aa45] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Certified</h3>
              <p className="text-gray-600">ISO certified for quality management and service excellence</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#ed2628] to-[#f3aa45] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Award</h3>
              <p className="text-gray-600">Recognized for outstanding safety records and protocols</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#ed2628] to-[#f3aa45] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 14l5.5-5.5L16 16l-5.5 5.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Leader</h3>
              <p className="text-gray-600">Leading provider in corporate transportation solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Find answers to common questions about our employee transportation services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              News & Updates
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Stay updated with the latest news and developments in corporate transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-[#ed2628] to-[#f3aa45]"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">December 22, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Latest Transportation Trends for Corporate Sector
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover how modern corporate transportation is evolving with technology and sustainability...
                  </p>
                  <a href="#" className="text-[#ed2628] font-medium hover:text-[#f3aa45] transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="w-full bg-gray-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Let's Talk
            </h2>
            <p className="text-lg lg:text-xl text-gray-300">
              Ready to transform your employee transportation? Get in touch with us today.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed2628] focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed2628] focus:border-transparent outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed2628] focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed2628] focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="md:col-span-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed2628] focus:border-transparent outline-none resize-none"
              ></textarea>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ed2628] to-[#f3aa45] text-white px-12 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div>
              <img
                className="w-48 h-16 object-cover mb-6"
                alt="Entrex Logo"
                src="/figmaAssets/background--3--1.png"
              />
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for seamless, safe, and smart corporate transportation solutions.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Clients</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Employee Commute</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Event Transportation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <p>bookings@entrex.in</p>
                <p>+91 44 4953 0055</p>
                <p>+91 98400 27990</p>
                <p>+91 91767 81444</p>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ENTREX. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default EmployeeTransportationServices;