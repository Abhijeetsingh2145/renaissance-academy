import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FAQSection } from '@/components/functional/FAQSection'

export const metadata = {
  title: { absolute: 'Frequently Asked Questions (FAQ) | Renaissance Academy, Gorakhpur' },
  description: 'Find clear answers to common questions about admissions, CBSE curriculum, fee structure, campus facilities, and transport at Renaissance Academy.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Standardized Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Answers to common queries regarding admissions, curriculum, fees, and campus life.
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-5xl">
        <Breadcrumb items={[{ label: 'FAQ' }]} />
      </Container>

      <FAQSection />
    </div>
  )
}
