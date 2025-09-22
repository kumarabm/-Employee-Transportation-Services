import React from "react";

interface IndustryItem {
  id: number;
  label: string;
  icon: string;
}

export const WhoWeServeSection = (): JSX.Element => {
  const whoWeServeItems: IndustryItem[] = [
    { id: 1, label: "IT Companies", icon: "/figmaAssets/div-1.svg" },
    { id: 2, label: "Manufacturing", icon: "/figmaAssets/div-2.svg" },
    { id: 3, label: "Healthcare", icon: "/figmaAssets/div-3.svg" },
    { id: 4, label: "Finance", icon: "/figmaAssets/div-4.svg" },
    { id: 5, label: "Education", icon: "/figmaAssets/div-5.svg" },
    { id: 6, label: "Government", icon: "/figmaAssets/div-6.svg" }
  ];

  return (
    <section id="who-we-serve" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across various industries for their employee transportation needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {whoWeServeItems.map((item) => (
            <div key={item.id} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center p-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors border border-blue-200">
                  <img 
                    src={item.icon} 
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};