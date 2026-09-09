import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Info, HelpCircle } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Fee Structure 2025–26 | Renaissance Academy' },
  description: 'Official fee schedule for Renaissance Academy, Gorakhpur for the academic session 2025–26.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/fees',
  },
}

export default function FeesPage() {
  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Fee Structure (2025–26)</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Transparent, competitive fee schedules designed to support quality education and student facilities at Renaissance Academy.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Fee Structure' }]} />
        <Card className="shadow-sm border-neutral-200 overflow-hidden mb-8 mt-6 bg-white rounded-2xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-neutral-200 pb-4">
              <div>
                <H2 className="text-xl md:text-2xl text-brand-primary mb-1">Schedule of Fees</H2>
                <p className="text-xs md:text-sm text-neutral-500 font-medium">All figures listed in Indian Rupees (₹)</p>
              </div>
              <span className="bg-surface-yellow text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-amber-300 shadow-xs">
                Session 2025–26
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-brand-primary text-white text-sm font-semibold">
                    <th className="py-4 px-6 rounded-tl-xl">Fee Details</th>
                    <th className="py-4 px-6 text-center">Class I to V</th>
                    <th className="py-4 px-6 text-center">Class VI to VIII</th>
                    <th className="py-4 px-6 text-center">Class IX & X</th>
                    <th className="py-4 px-6 text-center rounded-tr-xl">Class XI & XII</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-900">Admission Fee</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹2,000</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹4,000</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹6,000</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹8,000</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-900">Tuition Fee (Yearly)</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹26,040</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹33,840</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹42,000</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹49,200</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-900">Development Charges (Yearly)</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹0</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹0</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹0</td>
                    <td className="py-4 px-6 text-center font-medium text-neutral-700">₹0</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors bg-brand-50/30">
                    <td className="py-4 px-6 font-semibold text-neutral-900">Annual Other Facilities Charges (Quarterly)</td>
                    <td className="py-4 px-6 text-center font-medium text-brand-900">₹420</td>
                    <td className="py-4 px-6 text-center font-medium text-brand-900">₹840</td>
                    <td className="py-4 px-6 text-center font-medium text-brand-900">₹960</td>
                    <td className="py-4 px-6 text-center font-medium text-brand-900">₹1,020</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mandatory Guidance Note */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3 text-amber-900 text-sm">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Fee information shown above is for the academic session 2025–26. Parents/guardians should contact the school for confirmation of the applicable fee structure for the upcoming admission session.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Callout */}
        <div className="bg-white rounded-xl p-8 border border-neutral-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="bg-brand-100 text-brand-primary p-3 rounded-full shrink-0 hidden sm:block">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Have questions about admissions or fees?</h3>
              <p className="text-sm text-neutral-600">
                Our admissions counselor is available to guide you through payment schedules and documentation requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link href="/admissions" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full">
                Enquire Now
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Contact School
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
