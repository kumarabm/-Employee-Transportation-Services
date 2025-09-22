import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const EmployeeFAQSection = (): JSX.Element => {
  const faqs: FAQItem[] = [
    {
      id: "faq1",
      question: "What areas do you cover for employee transportation?",
      answer: "We provide employee transportation services across all major cities in India, including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune."
    },
    {
      id: "faq2",
      question: "How do you ensure employee safety?",
      answer: "We have comprehensive safety measures including verified drivers, real-time GPS tracking, emergency contacts, and regular vehicle maintenance."
    },
    {
      id: "faq3",
      question: "Can we customize routes and schedules?",
      answer: "Yes, we offer fully customizable routes and schedules based on your company's specific requirements and employee locations."
    },
    {
      id: "faq4",
      question: "What is the minimum contract period?",
      answer: "We offer flexible contracts starting from 3 months, with options for monthly, quarterly, and annual agreements."
    },
    {
      id: "faq5",
      question: "Do you provide reporting and analytics?",
      answer: "Yes, we provide detailed reports on usage, punctuality, costs, and safety metrics through our management portal."
    },
    {
      id: "faq6",
      question: "How do you handle emergency situations?",
      answer: "We have 24/7 support team, emergency contact protocols, and backup vehicles to handle any unexpected situations."
    }
  ];

  return (
    <section id="faqs" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Common questions about our employee transportation services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-t-lg">
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};