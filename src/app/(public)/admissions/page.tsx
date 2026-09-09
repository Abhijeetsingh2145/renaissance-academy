import React from 'react'
import { AdmissionsClient } from '@/components/functional/AdmissionsClient'

export const metadata = {
  title: { absolute: 'Admissions | Renaissance Academy, Gorakhpur' },
  description: 'Apply for admission at Renaissance Academy, Gorakhpur. Submit your admission enquiry for the upcoming academic session online.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/admissions',
  },
}

export default function AdmissionsPage() {
  return <AdmissionsClient />
}
