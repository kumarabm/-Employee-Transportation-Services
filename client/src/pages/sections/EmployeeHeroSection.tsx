import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EmployeeHeroSection = (): JSX.Element => {
  return (
    <div id="hero" className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 relative">
      {/* Hero Content */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm">
                🛡️ Trusted by 5000+ Companies
              </div>
              
              <h1 className="font-bold text-4xl lg:text-6xl leading-tight">
                Seamless, Safe, and Smart
                <br />
                <span className="text-orange-400">Corporate Solutions</span>
              </h1>
              
              <p className="font-medium text-lg leading-relaxed max-w-lg">
                Professional employee transportation services that ensure your team travels safely, 
                arrives on time, and stays productive. From daily shuttles to executive chauffeur services.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Get Quote Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Quick Booking Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Instant Quote
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="company-name" className="sr-only">Company Name</Label>
                  <Input
                    id="company-name"
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="business-email" className="sr-only">Business Email</Label>
                  <Input
                    id="business-email"
                    type="email"
                    placeholder="Business Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone-number" className="sr-only">Phone Number</Label>
                  <Input
                    id="phone-number"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employee-count" className="sr-only">Number of Employees</Label>
                    <select 
                      id="employee-count"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>No. of Employees</option>
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="service-type" className="sr-only">Service Type</Label>
                    <select 
                      id="service-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Service Type</option>
                      <option>Daily Shuttle</option>
                      <option>On-demand</option>
                      <option>Executive</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Get Custom Quote
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};