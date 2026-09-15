import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Info, HelpCircle } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Fee Structure 2026–27 | Renaissance Academy' },
  description: 'Official fee schedule for Renaissance Academy, Gorakhpur for the academic session 2026–27.',
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
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Fee Structure (2026–27)</H1>
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
                Session 2026–27
              </span>
            </div>

            {/* Desktop & Mobile Responsive Table View */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-brand-primary text-white text-xs md:text-sm font-semibold">
                    <th className="py-4 px-4 rounded-tl-xl whitespace-nowrap">Fee Head</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Nursery</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">LKG–UKG</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Class I–III</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Class IV–VI</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Class VII–VIII</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Class IX–X</th>
                    <th className="py-4 px-3 text-center whitespace-nowrap">Class XI–XII (Sci)</th>
                    <th className="py-4 px-3 text-center rounded-tr-xl whitespace-nowrap">Class XI–XII (Comm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs md:text-sm">
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-neutral-900">Admission Fees <span className="text-neutral-500 font-normal text-xs block sm:inline">(One Time)</span></td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹2,000</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹2,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹3,000</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹3,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹4,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹6,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹8,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹8,500</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-neutral-900">Annual Composite Fee <span className="text-neutral-500 font-normal text-xs block sm:inline">(Quarterly)</span></td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹5,850</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹6,030</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹8,040</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹8,880</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹10,500</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹12,390</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹16,740</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹14,760</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-neutral-900">Exam Fees <span className="text-neutral-500 font-normal text-xs block sm:inline">(Quarterly)</span></td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹150</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹150</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹255</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹285</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹345</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹600</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹750</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹750</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-neutral-900">ID Card <span className="text-neutral-500 font-normal text-xs block sm:inline">(Annual)</span></td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                    <td className="py-3.5 px-3 text-center font-medium text-neutral-700">₹100</td>
                  </tr>
                  <tr className="bg-neutral-100/70 font-semibold border-t border-neutral-300">
                    <td className="py-3.5 px-4 text-brand-primary">Quarterly Installment <span className="text-neutral-500 font-normal text-xs block sm:inline">(Jul, Oct, Jan)</span></td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹6,000</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹6,180</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹8,295</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹9,165</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹10,845</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹12,990</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹17,490</td>
                    <td className="py-3.5 px-3 text-center text-brand-primary">₹15,510</td>
                  </tr>
                  <tr className="bg-brand-50/60 font-semibold border-t border-brand-200">
                    <td className="py-3.5 px-4 text-brand-900">Total 1st Qtr Fee <span className="text-brand-700 font-normal text-xs block sm:inline">(April - New Admission)</span></td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹8,100</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹8,780</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹11,395</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹12,765</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹15,445</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹19,590</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹26,090</td>
                    <td className="py-3.5 px-3 text-center text-brand-900 font-bold">₹24,110</td>
                  </tr>
                  <tr className="bg-brand-100/50 font-bold border-t-2 border-brand-300">
                    <td className="py-3.5 px-4 text-neutral-900">Total Annual Fee <span className="text-neutral-600 font-normal text-xs block sm:inline">(1st Year Complete)</span></td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹26,100</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹27,320</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹36,280</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹40,260</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹47,980</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹58,560</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹78,560</td>
                    <td className="py-3.5 px-3 text-center text-neutral-900">₹70,640</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mandatory Guidance Note */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3 text-amber-900 text-sm">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Fee information shown above is for the academic session 2026–27. Parents/guardians should contact the school for confirmation of the applicable fee structure for the upcoming admission session.
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
