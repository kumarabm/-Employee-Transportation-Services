import React from "react";

export const WhyWebsiteSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Dashboard Analytics",
      description: "Real-time insights into your transportation operations with comprehensive analytics and reporting."
    },
    {
      id: 2,
      title: "Mobile Access", 
      description: "Access your transport management system from anywhere with our mobile-responsive platform."
    },
    {
      id: 3,
      title: "Efficient Route Tracking",
      description: "Optimized route planning and live tracking capabilities for maximum efficiency and transparency."
    },
    {
      id: 4,
      title: "Billing Workflow and Integration",
      description: "Streamlined billing processes with automated invoicing and seamless integration with your existing systems."
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Car Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-600 to-gray-500 rounded-3xl p-8 relative overflow-hidden">
              {/* Car image from assets */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-400 to-gray-300 rounded-2xl overflow-hidden">
                <img 
                  src="/figmaAssets/bento-card.png" 
                  alt="Professional car service"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-500 rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="text-white">
            <h2 className="font-bold text-4xl lg:text-5xl mb-8 leading-tight">
              Why Your Website Is Your Best Salesperson
            </h2>
            
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};