import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/Card'
import { FileText, ShieldCheck, School, Building } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'CBSE Mandatory Disclosure | Renaissance Academy, Gorakhpur' },
  description: 'Official CBSE Mandatory Public Disclosure information and institutional details for Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/cbse-disclosure',
  },
}

export default function CBSEDisclosurePage() {
  const generalInfo = [
    { label: 'Name of the School', value: 'Renaissance Academy' },
    { label: 'Complete Address', value: 'Baijnathpur, Balapar Road, Gorakhpur, Uttar Pradesh - 273007' },
    { label: 'Principal Name & Qualification', value: 'Mrs. Kanak Pandey (M.A., B.Ed.)' },
    { label: 'School Email', value: 'renaissance.academy14@gmail.com' },
    { label: 'Contact Phone', value: '+91-98-3886-3886' },
    { label: 'Affiliation Status', value: 'CBSE Affiliated' },
  ]

  const documentCategories = [
    'Copies of Affiliation / Extension Letter',
    'Society / Trust Registration Certificate',
    'No Objection Certificate (NOC) from State Govt.',
    'Recognition Certificate under RTE Act 2009',
    'Building Safety Certificate',
    'Fire Safety Certificate',
    'DEO Certificate for Affiliation',
    'Water, Health & Sanitation Certificates',
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold/40">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">CBSE Mandatory Public Disclosure</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Official institutional disclosures in compliance with CBSE directives and regulatory standards.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'CBSE Mandatory Disclosure' }]} />
        <div className="space-y-12 mt-6">
        {/* Section A: General Information */}
        <Card className="border-neutral-200 shadow-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-50 text-brand-700 p-2.5 rounded-lg">
                <School className="h-6 w-6" />
              </div>
              <H2 className="text-xl">Section A: General Information</H2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700 font-semibold border-b border-neutral-200">
                    <th className="py-3 px-4 w-1/3">Information Parameter</th>
                    <th className="py-3 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {generalInfo.map((item, index) => (
                    <tr key={index} className="hover:bg-neutral-50/50">
                      <td className="py-3 px-4 font-semibold text-neutral-800">{item.label}</td>
                      <td className="py-3 px-4 text-neutral-700">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Section B: Documents & Information */}
        <Card className="border-neutral-200 shadow-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-50 text-brand-700 p-2.5 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <H2 className="text-xl">Section B: Documents & Information</H2>
                <p className="text-xs text-neutral-500 mt-1">Compliance certificates and institutional accreditations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentCategories.map((doc, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-brand-700 shrink-0" />
                    <span className="text-sm font-medium text-neutral-800">{doc}</span>
                  </div>
                  <span className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded font-medium shrink-0 ml-2">
                    Available on Request
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section C: Infrastructure & Academics */}
        <Card className="border-neutral-200 shadow-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-50 text-brand-700 p-2.5 rounded-lg">
                <Building className="h-6 w-6" />
              </div>
              <H2 className="text-xl">Section C: Academic & Campus Infrastructure Overview</H2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-brand-50/50 p-5 rounded-lg border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-1">Campus Ground Area</h3>
                <p className="text-neutral-600">Extensive playfield area providing facilities for athletic training and outdoor sports.</p>
              </div>

              <div className="bg-brand-50/50 p-5 rounded-lg border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-1">Classroom & Lab Infrastructure</h3>
                <p className="text-neutral-600">Well-ventilated classrooms, computer literacy lab, and science laboratories.</p>
              </div>

              <div className="bg-brand-50/50 p-5 rounded-lg border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-1">Library Knowledge Hub</h3>
                <p className="text-neutral-600">Spacious library repository holding reference volumes, periodicals, and reading resources.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </Container>
    </div>
  )
}
