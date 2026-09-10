import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/Card'
import { ZoomableImage } from '@/components/ui/ZoomableImage'
import { Activity, Compass, Users, Sparkles, Trophy } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Activities & Student Life | Renaissance Academy, Gorakhpur' },
  description: 'Co-curricular development, physical fitness, and creative expression at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/activities',
  },
}

export default function ActivitiesPage() {
  const pillars = [
    {
      icon: Activity,
      title: 'Physical Health & Sports',
      description: 'Encouraging sports, healthy habits, and outdoor games for physical fitness.',
      variant: 'surface-mint' as const,
      themeVariant: 'mint' as const,
    },
    {
      icon: Compass,
      title: 'Creative Arts & Expression',
      description: 'Helping children express their ideas through drawing, music, and creative projects.',
      variant: 'surface-coral' as const,
      themeVariant: 'coral' as const,
    },
    {
      icon: Users,
      title: 'Academic Clubs & Teamwork',
      description: 'Building friendliness, respect, and cooperation through group activities and debate clubs.',
      variant: 'surface-sky' as const,
      themeVariant: 'sky' as const,
    },
    {
      icon: Sparkles,
      title: 'Cultural Events & Celebrations',
      description: 'Building confidence, discipline, and cultural appreciation through annual school functions.',
      variant: 'surface-yellow' as const,
      themeVariant: 'gold' as const,
    }
  ]

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Activities & Student Life</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Encouraging physical health, creative activities, and teamwork alongside daily studies at Renaissance Academy. Click any photo to enlarge.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Activities & Sports' }]} />

        {/* Core Development Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-16">
          {pillars.map((item, idx) => {
            const IconComp = item.icon
            return (
              <Card key={idx} variant={item.variant} className="hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-neutral-200/80 shadow-xs">
                    <IconComp className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 text-lg">{item.title}</h3>
                  <Text className="text-sm text-text-secondary">{item.description}</Text>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Sports & Games Showcase */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-surface-mint text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-emerald-300">
            <Trophy className="h-3.5 w-3.5 text-emerald-700" /> Sports & Physical Development
          </span>
          <H2 className="mb-2 text-brand-primary font-bold">Sports & Games Facilities</H2>
          <Text className="mb-8 text-neutral-600">
            Dedicated spaces for both indoor active games and outdoor athletic field sports to build teamwork and physical fitness.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-surface-neutral p-5 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all">
              <ZoomableImage
                src="/indoor-games.jpg"
                alt="Indoor Active Games - Renaissance Academy"
                caption="Indoor Active Games — Table tennis, chess, carrom, and indoor recreation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                containerClassName="aspect-video w-full rounded-xl mb-4 border border-neutral-200"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-2 inline-block">
                Indoor Facility
              </span>
              <h3 className="font-bold text-brand-primary text-xl mb-1">Indoor Active Games</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Table tennis, chess, carrom, and active indoor recreational games promoting mental focus, quick reflexes, and sportsmanship.
              </p>
            </div>

            <div className="group bg-surface-neutral p-5 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all">
              <ZoomableImage
                src="/sports-ground.jpg"
                alt="Outdoor Sports & Field Games - Renaissance Academy"
                caption="Outdoor Sports Field — Athletics, football, cricket & physical training"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                containerClassName="aspect-video w-full rounded-xl mb-4 border border-neutral-200"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200 mb-2 inline-block">
                Outdoor Field
              </span>
              <h3 className="font-bold text-brand-primary text-xl mb-1">Outdoor Sports & Field Games</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Spacious athletic field for football, cricket, volleyball, running track, physical training, and annual sports day competitions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
