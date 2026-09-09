import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Mail, Briefcase, UserCheck, Heart } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Careers | Renaissance Academy, Gorakhpur' },
  description: 'Explore career opportunities and educator culture at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/careers',
  },
}

export default function CareersPage() {
  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Standardized Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Careers at Renaissance Academy</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            We welcome passionate educators and staff dedicated to academic excellence, student mentorship, and positive institutional culture.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Careers' }]} />

        {/* Culture Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-16">
          <Card variant="surface-mint" className="p-6">
            <div className="bg-white text-emerald-700 p-3 rounded-xl w-fit mb-4 border border-emerald-200 shadow-xs">
              <UserCheck className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Student-Centered Teaching</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Empowering educators to innovate, engage, and support every learner&apos;s individual growth.</p>
          </Card>

          <Card variant="surface-sky" className="p-6">
            <div className="bg-white text-brand-sky p-3 rounded-xl w-fit mb-4 border border-blue-200 shadow-xs">
              <Heart className="h-6 w-6 text-brand-sky" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Collaborative Environment</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Working alongside supportive colleagues, academic coordinators, and institutional leadership.</p>
          </Card>

          <Card variant="surface-cream" className="p-6">
            <div className="bg-white text-amber-700 p-3 rounded-xl w-fit mb-4 border border-amber-200 shadow-xs">
              <Briefcase className="h-6 w-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Professional Growth</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Continuous teacher training workshops, skill development, and clear career progression paths.</p>
          </Card>
        </div>

        {/* How to Apply Section */}
        <Card className="max-w-2xl mx-auto p-8 text-center bg-white border border-neutral-200 rounded-2xl shadow-sm">
          <div className="bg-surface-cream text-brand-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <Mail className="h-8 w-8 text-brand-primary" />
          </div>
          <H2 className="text-2xl font-bold text-brand-primary mb-3">Application Process</H2>
          <Text className="text-text-secondary leading-relaxed mb-6">
            Interested candidates are invited to submit their resume along with a cover letter stating their teaching qualifications and experience.
          </Text>

          <div className="bg-surface-neutral p-4 rounded-xl inline-block border border-neutral-200">
            <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1">Email Resume To:</span>
            <a href="mailto:renaissance.academy14@gmail.com" className="font-bold text-brand-primary hover:underline text-base md:text-lg">
              renaissance.academy14@gmail.com
            </a>
          </div>
        </Card>
      </Container>
    </div>
  )
}
