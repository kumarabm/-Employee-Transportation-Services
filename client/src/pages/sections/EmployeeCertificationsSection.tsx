import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Certification {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const EmployeeCertificationsSection = (): JSX.Element => {
  const certifications: Certification[] = [
    { 
      id: 1, 
      title: "ISO 9001:2015", 
      description: "Quality Management System",
      image: "/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
    },
    { 
      id: 2, 
      title: "Safety Excellence Award", 
      description: "Best Transportation Safety",
      image: "/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
    },
    { 
      id: 3, 
      title: "Green Transport Certification", 
      description: "Eco-Friendly Fleet Management",
      image: "/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
    }
  ];

  return (
    <section id="certifications" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Our Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognized for quality, safety, and excellence in transportation services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <CardTitle className="text-xl mb-4 text-gray-900">{cert.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};