import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CallToActionSection = (): JSX.Element => {
  const leftColumnFaqs = [
    {
      id: "item-1",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-2",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-3",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-4",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-5",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-6",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  const rightColumnFaqs = [
    {
      id: "item-7",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-8",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-9",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-10",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-11",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-12",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center px-[101px] py-0">
          <div className="w-fit mt-[-0.93px] rotate-[0.22deg] bg-[linear-gradient(103deg,rgba(255,156,18,1)_0%,rgba(255,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[18.6px] text-center tracking-[1.86px] leading-[28.0px] whitespace-nowrap">
            ???
          </div>

          <h2 className="w-[1197.28px] rotate-[0.22deg] [font-family:'Inter',Helvetica] font-normal text-[#111827] text-[62.7px] text-center tracking-[-1.60px] leading-[83.9px] mt-4">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="w-[995.87px] rotate-[0.22deg] [font-family:'Inter',Helvetica] font-normal text-[#111827] text-lg text-center tracking-[0] leading-[34.1px] mt-4">
            Got questions? We&apos;ve got answers! Find solutions to common
            queries about our services, processes, and technology.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-[1389px] flex gap-[113px]">
          <div className="w-[652px]">
            <Accordion type="single" collapsible defaultValue="item-1">
              {leftColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger className="text-left [font-family:'DM_Sans',Helvetica] font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-[21.3px] tracking-[0] leading-[27.1px] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="[font-family:'DM_Sans',Helvetica] font-normal text-[#303a42] text-[17.4px] tracking-[0] leading-[29.1px] pb-6">
                      {faq.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-[637px]">
            <Accordion type="single" collapsible defaultValue="item-9">
              {rightColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger className="text-left [font-family:'DM_Sans',Helvetica] font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-[21.3px] tracking-[0] leading-[27.1px] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="[font-family:'DM_Sans',Helvetica] font-normal text-[#303a42] text-[17.4px] tracking-[0] leading-[29.1px] pb-6">
                      {faq.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
