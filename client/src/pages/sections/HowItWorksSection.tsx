import React from "react";

interface WorkStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const HowItWorksSection = (): JSX.Element => {
  const howItWorksSteps: WorkStep[] = [
    {
      id: 1,
      title: "Requirement Mapping",
      description: "We understand your workforce size, shifts, routes, and security requirements.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Deployment Plan",
      description: "We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools",
      icon: "📋"
    },
    {
      id: 3,
      title: "Live Execution",
      description: "Vehicles are dispatched on time with real-time monitoring and backup protocols",
      icon: "📦"
    },
    {
      id: 4,
      title: "Transparent Billing",
      description: "Automated trip logs, easy reconciliation, and centralized invoicing.",
      icon: "📦"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to get your employee transportation system up and running
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-shadow">
              {/* Step number in top right */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                0{step.id}
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};