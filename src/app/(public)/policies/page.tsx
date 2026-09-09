import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { ShieldCheck, Clock, HeartHandshake, Bus } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'School Policies | Renaissance Academy, Gorakhpur' },
  description: 'Institutional guidelines and student conduct framework at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/policies',
  },
}

export default function PoliciesPage() {
  const policyFramework = [
    {
      icon: Clock,
      title: 'Attendance & Punctuality',
      description: 'Regular attendance and coming on time help children stay consistent in studies and build good discipline.',
      variant: 'surface-sky' as const,
    },
    {
      icon: ShieldCheck,
      title: 'Student Conduct & Respect',
      description: 'Creating a safe, respectful environment where students speak politely and treat everyone with care.',
      variant: 'surface-cream' as const,
    },
    {
      icon: HeartHandshake,
      title: 'Campus Safety & Care',
      description: 'Keeping the school premises safe, clean, and caring for every student&apos;s well-being.',
      variant: 'surface-mint' as const,
    },
    {
      icon: Bus,
      title: 'Transport & Safety',
      description: 'Ensuring safe, supervised travel and proper safety rules during daily school bus commutes.',
      variant: 'surface-yellow' as const,
    }
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Standardized Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">School Policies & Guidelines</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Our institutional guidelines help maintain a respectful, safe, and well-organized educational environment for all students.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'School Policies' }]} />
        <div className="max-w-4xl mx-auto space-y-8 mt-6">
          <Card className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <H2 className="text-2xl font-bold mb-3 text-brand-primary">Institutional Environment</H2>
            <Text className="text-text-secondary leading-relaxed mb-6">
              At Renaissance Academy, clear expectations and mutual respect form the foundation of our daily school life. Our policies guide student conduct, academic integrity, and campus safety, ensuring every child thrives in a nurturing academic community.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policyFramework.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <Card key={idx} variant={item.variant} className="p-5">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-white text-brand-primary p-2 rounded-xl border border-neutral-200 shadow-xs">
                        <IconComp className="h-5 w-5 text-brand-primary" />
                      </div>
                      <h3 className="font-bold text-text-primary text-base">{item.title}</h3>
                    </div>
                    <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">{item.description}</Text>
                  </Card>
                )
              })}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
}
