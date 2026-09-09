import React from 'react'

export function SchoolJsonLd() {
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    'name': 'Renaissance Academy',
    'url': 'https://renaissanceacademy.org.in',
    'logo': 'https://renaissanceacademy.org.in/logo.png',
    'image': 'https://renaissanceacademy.org.in/logo.png',
    'telephone': '+91-98-3886-3886',
    'email': 'renaissance.academy14@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Baijnathpur, Balapar Road',
      'addressLocality': 'Gorakhpur',
      'addressRegion': 'Uttar Pradesh',
      'postalCode': '273007',
      'addressCountry': 'IN',
    },
    'sameAs': [
      'https://www.facebook.com/profile.php?id=100057387973333',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Renaissance Academy',
    'url': 'https://renaissanceacademy.org.in',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
