import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { H1, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Photo Gallery | Renaissance Academy, Gorakhpur' },
  description: 'Visual gallery showcasing campus facilities, classroom environments, and student life at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/gallery',
  },
}

export default function GalleryPage() {
  const images = [
    '/welcome.jpg',
    '/classroom.jpg',
    '/science-lab.jpg',
    '/computer-lab.jpg',
    '/sports-ground.jpg',
    '/indoor-games.jpg',
    '/auditorium.jpg',
    '/music-room.jpg',
    '/school-transport.jpg',
    '/kids-learning-hub.jpg',
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
    '/gallery-7.jpg',
    '/gallery-8.jpg',
    '/gallery-9.jpg',
    '/gallery-10.jpg',
    '/gallery-11.jpg',
    '/gallery-12.jpg',
    '/gallery-13.jpg',
    '/gallery-14.jpg',
    '/gallery-15.jpg',
    '/gallery-16.jpg',
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Campus Photo Gallery</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            A visual journey through campus facilities, academic environment, and student life at Renaissance Academy.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Gallery' }]} />

        {/* Gallery Grid — Pure Photos Block by Block (No text titles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 bg-neutral-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <Image
                src={src}
                alt={`Renaissance Academy Photo ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
