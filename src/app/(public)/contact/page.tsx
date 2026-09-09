import React from 'react'
import { ContactClient } from '@/components/functional/ContactClient'

export const metadata = {
  title: { absolute: 'Contact Renaissance Academy | Gorakhpur' },
  description: 'Get in touch with Renaissance Academy at Baijnathpur, Balapar Road, Gorakhpur. View phone, email, Google Maps campus address, and send admission queries.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/contact',
  },
}

export default function Page() {
  return <ContactClient />
}
