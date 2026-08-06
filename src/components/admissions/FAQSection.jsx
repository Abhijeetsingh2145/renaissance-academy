import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  { question: "What is the admission procedure?", answer: "The admission process involves filling out an inquiry form, an interactive session with the student and parents, document verification, and fee payment." },
  { question: "Is there any entrance exam?", answer: "For primary classes, we focus on interactive sessions. For middle and senior school, a brief assessment in English, Math, and Science is conducted." },
  { question: "What are the school timings?", answer: "During summer, timings are 8:00 AM to 2:00 PM. In winter, they are 8:30 AM to 2:30 PM." },
  { question: "Do you provide transport facilities?", answer: "Yes, we have a fleet of buses covering major routes in and around Gorakhpur." },
  { question: "What board is the school affiliated to?", answer: "Renaissance Academy is affiliated to the Central Board of Secondary Education (CBSE)." },
];

export function FAQSection() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-serif text-primary font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full bg-card shadow-sm border rounded-2xl px-6 py-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
