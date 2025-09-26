import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export const FAQsSection = (): JSX.Element => {
  return (
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
  );
};
