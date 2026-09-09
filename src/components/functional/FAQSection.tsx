'use client'

import React, { useState, useMemo } from 'react'
import { Container } from '@/components/layout/Container'
import { H2, Text } from '@/components/ui/Typography'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion'
import { Search, HelpCircle, GraduationCap, DollarSign, Bus, Info } from 'lucide-react'
import { FadeUp } from '@/components/ui/Motion'

export interface FAQItem {
  id: string
  category: 'Admissions' | 'Academics' | 'Fees' | 'Facilities' | 'General'
  question: string
  answer: string
}

export const defaultFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'What classes are currently open for admission at Renaissance Academy?',
    answer: 'Admissions are open for Nursery through Class IX for the upcoming academic session. You can fill out our online Enquiry Form or visit the school administrative office.',
  },
  {
    id: 'faq-2',
    category: 'Admissions',
    question: 'What documents are required during the admission process?',
    answer: 'Basic required documents include the student’s Birth Certificate, Aadhaar Card copy, previous school Transfer Certificate (TC), recent passport-size photographs, and parent identity proof.',
  },
  {
    id: 'faq-3',
    category: 'Academics',
    question: 'Which educational board does Renaissance Academy follow?',
    answer: 'Renaissance Academy is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, delivering a comprehensive curriculum from primary to senior classes.',
  },
  {
    id: 'faq-4',
    category: 'Academics',
    question: 'What is the average teacher-student ratio in classrooms?',
    answer: 'We maintain an optimal 1:16 teacher-student ratio, ensuring personalized attention, active participation, and individual mentorship for every child.',
  },
  {
    id: 'faq-5',
    category: 'Fees',
    question: 'What is the fee payment schedule for the academic year 2025–26?',
    answer: 'Tuition fees are structured transparently and paid in quarterly installments. Details regarding composite monthly fees, admission fees, and annual charges can be viewed on our Fee Structure page.',
  },
  {
    id: 'faq-6',
    category: 'Fees',
    question: 'Are there any hidden or unexpected extra charges during the session?',
    answer: 'No. Renaissance Academy strictly maintains transparent fee schedules with zero hidden charges. All approved fees are listed upfront in the 2025–26 official fee document.',
  },
  {
    id: 'faq-7',
    category: 'Facilities',
    question: 'Does the school provide transport facilities for students in Gorakhpur?',
    answer: 'Yes, Renaissance Academy operates dedicated transport buses covering major routes in Gorakhpur along Balapar Road and surrounding areas with trained drivers and attendants.',
  },
  {
    id: 'faq-8',
    category: 'Facilities',
    question: 'What safety and security measures are in place on campus?',
    answer: 'Our campus is secured with 24/7 CCTV surveillance, boundary walls, entry verification at gates, fire safety compliance, and trained security personnel.',
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'Where is Renaissance Academy located and what are the office hours?',
    answer: 'The campus is located at Baijnathpur, Balapar Road, Gorakhpur, Uttar Pradesh - 273007. Office hours are Monday through Saturday, 8:00 AM to 3:00 PM.',
  },
]

export function FAQSection({ faqs = defaultFAQs }: { faqs?: FAQItem[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = [
    { label: 'All', icon: HelpCircle },
    { label: 'Admissions', icon: GraduationCap },
    { label: 'Academics', icon: HelpCircle },
    { label: 'Fees', icon: DollarSign },
    { label: 'Facilities', icon: Bus },
    { label: 'General', icon: Info },
  ]

  const filteredFAQs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [faqs, selectedCategory, searchTerm])

  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <Container>
        <FadeUp className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-brand-100">
            <HelpCircle className="h-3.5 w-3.5 text-brand-primary" /> Frequently Asked Questions
          </span>
          <H2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-3">
            Got Questions? We Have Answers
          </H2>
          <Text className="text-neutral-600 text-base md:text-lg">
            Find quick answers regarding admissions, CBSE curriculum, fee schedules, transport, and campus facilities.
          </Text>
        </FadeUp>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          {/* Instant Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search questions or keywords (e.g. admission, fees, transport)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-sm shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = selectedCategory === cat.label
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-md shadow-brand-200'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto bg-neutral-50/50 rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-2">
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-xl border border-neutral-200 px-5 transition-all hover:border-brand-200 shadow-2xs"
                >
                  <AccordionTrigger className="text-base font-semibold text-neutral-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-neutral-600 leading-relaxed pb-4 border-t border-neutral-100 pt-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 text-neutral-500">
              <HelpCircle className="h-10 w-10 text-neutral-300 mx-auto mb-3" />
              <p className="font-semibold text-neutral-700">No questions found</p>
              <p className="text-xs text-neutral-500 mt-1">Try searching with a different term or select another category.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
