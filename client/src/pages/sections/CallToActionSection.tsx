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
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-fit bg-[linear-gradient(103deg,rgba(255,156,18,1)_0%,rgba(255,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-lg tracking-[1.86px] leading-[28.0px] mb-4">
            FAQ
          </div>

          <h2 className="font-bold text-[#111827] text-3xl lg:text-5xl xl:text-[62.7px] text-center tracking-[-1.60px] leading-tight mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="font-normal text-[#111827] text-base lg:text-lg text-center tracking-[0] leading-relaxed max-w-[800px]">
            Got questions? We've got answers! Find solutions to common
            queries about our services, processes, and technology.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1200px] mx-auto">
            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-1">
                {leftColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-9">
                {rightColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
