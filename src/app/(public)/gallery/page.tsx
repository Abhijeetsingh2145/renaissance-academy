import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { GalleryGrid } from '@/components/functional/GalleryGrid'

export const metadata = {
  title: { absolute: 'Photo Gallery | Renaissance Academy, Gorakhpur' },
  description: 'Visual gallery showcasing campus facilities, classroom environments, and student life at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/gallery',
  },
}

export default function GalleryPage() {
  const images = [
    { src: '/welcome.jpg', caption: 'Campus Frontage & Welcome Building' },
    { src: '/classroom.jpg', caption: 'Smart Digital Classroom' },
    { src: '/science-lab.jpg', caption: 'Physics & Chemistry Laboratory' },
    { src: '/computer-lab.jpg', caption: 'Computer & ICT Laboratory' },
    { src: '/sports-ground.jpg', caption: 'Outdoor Sports & Athletics Field' },
    { src: '/indoor-games.jpg', caption: 'Indoor Games Arena' },
    { src: '/auditorium.jpg', caption: 'School Assembly Auditorium' },
    { src: '/music-room.jpg', caption: 'Music & Arts Studio' },
    { src: '/medical-room.jpg', caption: 'Medical & First Aid Room' },
    { src: '/school-transport.jpg', caption: 'School Bus Fleet & Transport' },
    { src: '/kids-learning-hub.jpg', caption: 'Junior Activity & Learning Hub' },
    { src: '/gallery-1.jpg', caption: 'Renaissance Academy Campus View 1' },
    { src: '/gallery-2.jpg', caption: 'Renaissance Academy Campus View 2' },
    { src: '/gallery-3.jpg', caption: 'Renaissance Academy Campus View 3' },
    { src: '/gallery-4.jpg', caption: 'Renaissance Academy Campus View 4' },
    { src: '/gallery-5.jpg', caption: 'Renaissance Academy Campus View 5' },
    { src: '/gallery-6.jpg', caption: 'Renaissance Academy Campus View 6' },
    { src: '/gallery-7.jpg', caption: 'Renaissance Academy Campus View 7' },
    { src: '/gallery-8.jpg', caption: 'Renaissance Academy Campus View 8' },
    { src: '/gallery-9.jpg', caption: 'Renaissance Academy Campus View 9' },
    { src: '/gallery-10.jpg', caption: 'Renaissance Academy Campus View 10' },
    { src: '/gallery-11.jpg', caption: 'Renaissance Academy Campus View 11' },
    { src: '/gallery-12.jpg', caption: 'Renaissance Academy Campus View 12' },
    { src: '/gallery-13.jpg', caption: 'Renaissance Academy Campus View 13' },
    { src: '/gallery-14.jpg', caption: 'Renaissance Academy Campus View 14' },
    { src: '/gallery-15.jpg', caption: 'Renaissance Academy Campus View 15' },
    { src: '/gallery-16.jpg', caption: 'Renaissance Academy Campus View 16' },
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Campus Photo Gallery</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            A visual journey through campus facilities, academic environment, and student life at Renaissance Academy. Click any photo to enlarge.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Gallery' }]} />

        {/* Gallery Grid with Lightbox Popup */}
        <GalleryGrid images={images} />
      </Container>
    </div>
  )
}

