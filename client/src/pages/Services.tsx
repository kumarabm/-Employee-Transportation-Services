import React from "react";

const services = [
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

const ServicesDropdown: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-10">
      {/* Main Box */}
      <div className="bg-[#f9f9f9] shadow-xl rounded-2xl px-10 py-8 flex gap-16 relative">
        {/* Top Pointer */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#f9f9f9] rotate-45 shadow-md"></div>

        {/* Sections */}
        {services.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="font-semibold text-[15px] text-[#1a1a40]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-600 text-sm hover:text-black transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;
