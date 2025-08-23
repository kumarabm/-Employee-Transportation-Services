import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articlesData = [
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
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[62.7px] font-normal text-[#111827] tracking-[-1.60px] leading-[83.9px] [font-family:'Inter',Helvetica] mb-[46px]">
          News &amp; Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articlesData.map((article) => (
            <Card
              key={article.id}
              className="rounded-[21.33px] border-[1.33px] border-[#e0dee4] overflow-hidden h-[512px]"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative h-[234px] overflow-hidden">
                  <img
                    src={article.image}
                    alt="Article image"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-normal text-gray-0 tracking-[-0.44px] leading-9 [font-family:'Inter',Helvetica] mb-4">
                      {article.title}
                    </h3>

                    <p className="text-[18.7px] font-normal text-gray-0 leading-8 [font-family:'Inter',Helvetica] mb-8">
                      {article.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge
                      className={`${article.categoryColor} text-gray-0 font-bold text-base tracking-[1.14px] [font-family:'Inter',Helvetica] rounded-[21.33px] px-4 py-2 h-8`}
                    >
                      {article.category}
                    </Badge>

                    <span className="text-[18.7px] font-normal text-[#82808a] [font-family:'Inter',Helvetica]">
                      {article.date}&nbsp;&nbsp;·&nbsp;&nbsp;{article.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="text-[#1778f0] text-2xl font-normal tracking-[-0.33px] [font-family:'Inter',Helvetica] h-auto p-0 hover:bg-transparent"
          >
            View more articles
            <ArrowRightIcon className="ml-2 w-8 h-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};
