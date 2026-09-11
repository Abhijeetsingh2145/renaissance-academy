import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, H3, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ZoomableImage } from '@/components/ui/ZoomableImage'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { 
  BookOpen, 
  FlaskConical, 
  Laptop, 
  Stethoscope, 
  Music, 
  Building2, 
  Trophy, 
  Baby, 
  ShieldCheck, 
  Droplet, 
  Bus, 
  Flame, 
  UserCheck,
  Sparkles
} from 'lucide-react'

export const metadata = {
  title: { absolute: 'Campus & Facilities | Renaissance Academy, Gorakhpur' },
  description: 'Explore campus facilities including science labs, computer lab, modern library, medical room, music room, auditorium, junior interactive learning hub, and school transport at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/campus',
  },
}

export default function Page() {
  const facilities = [
    { 
      title: 'Smart Digital Classrooms', 
      desc: 'Interactive classrooms equipped with modern audio-visual teaching aids, digital content, and comfortable seating.', 
      asset: 'Smart Classrooms', 
      image: '/classroom.jpg',
      theme: 'sky' as const,
      icon: Laptop,
      badge: 'Interactive Learning',
      variant: 'surface-sky' as const,
    },
    { 
      title: 'Science Laboratories', 
      desc: 'Fully-equipped Physics, Chemistry, and Biology laboratories enabling hands-on practical experiments.', 
      asset: 'Science Labs', 
      image: '/science-lab.jpg',
      theme: 'royal' as const,
      icon: FlaskConical,
      badge: 'Practical Science',
      variant: 'surface-sky' as const,
    },
    { 
      title: 'Computer Laboratory', 
      desc: 'Modern computing station with high-speed internet for digital literacy, coding, and ICT learning.', 
      asset: 'Computer Lab', 
      image: '/computer-lab.jpg',
      theme: 'sky' as const,
      icon: Laptop,
      badge: 'Digital Literacy',
      variant: 'surface-sky' as const,
    },
    { 
      title: 'Outdoor Sports Field', 
      desc: 'Spacious outdoor grounds for athletics, football, cricket, volleyball, and daily physical fitness.', 
      asset: 'Sports Ground', 
      image: '/sports-ground.jpg',
      theme: 'mint' as const,
      icon: Trophy,
      badge: 'Physical Health',
      variant: 'surface-mint' as const,
    },
    { 
      title: 'Indoor Games & Recreation', 
      desc: 'Dedicated indoor sports facility for table tennis, chess, carrom, and indoor physical activities.', 
      asset: 'Indoor Games', 
      image: '/indoor-games.jpg',
      theme: 'mint' as const,
      icon: Trophy,
      badge: 'Indoor Sports',
      variant: 'surface-mint' as const,
    },
    { 
      title: 'Spacious School Auditorium', 
      desc: 'Large multipurpose assembly hall for cultural events, annual functions, seminars, and debate contests.', 
      asset: 'School Auditorium', 
      image: '/auditorium.jpg',
      theme: 'royal' as const,
      icon: Building2,
      badge: 'Events & Functions',
      variant: 'surface-cream' as const,
    },
    { 
      title: 'Junior Interactive Learning Hub', 
      desc: 'Specialized study and activity section designed for early years students, featuring interactive learning kits, activity tables, and foundational discovery tools.', 
      asset: 'Junior Learning Hub', 
      image: '/kids-learning-hub.jpg',
      theme: 'gold' as const,
      icon: Baby,
      badge: 'Early Learning Wing',
      variant: 'surface-yellow' as const,
    },
    { 
      title: 'Modern Knowledge Library', 
      desc: 'Spacious reading sanctuary featuring curated reference books, storybooks, periodicals, and quiet study areas.', 
      asset: 'Library', 
      theme: 'cream' as const,
      icon: BookOpen,
      badge: 'Knowledge Hub',
      variant: 'surface-cream' as const,
    },
    { 
      title: 'Medical & First Aid Room', 
      desc: 'Dedicated healthcare corner equipped with first-aid facilities and emergency care for student wellness.', 
      asset: 'Medical Room', 
      image: '/medical-room.jpg',
      theme: 'mint' as const,
      icon: Stethoscope,
      badge: 'Healthcare',
      variant: 'surface-mint' as const,
    },
    { 
      title: 'Music & Arts Room', 
      desc: 'Creative studio for vocal music, instrumental practice, drawing, and performing arts development.', 
      asset: 'Music Room', 
      image: '/music-room.jpg',
      theme: 'coral' as const,
      icon: Music,
      badge: 'Creative Arts',
      variant: 'surface-coral' as const,
    },
    { 
      title: 'School Transport Fleet', 
      desc: 'Safe, dedicated bus fleet covering major routes in Gorakhpur with trained drivers and attendants.', 
      asset: 'School Transport', 
      image: '/school-transport.jpg',
      theme: 'mint' as const,
      icon: Bus,
      badge: 'Safe Commute',
      variant: 'surface-mint' as const,
    },
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Standardized Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Campus & Facilities</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Modern Educational Infrastructure, Safety Systems, and Learning Spaces at Renaissance Academy
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Campus & Facilities' }]} />

        <div className="mt-6 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 bg-surface-yellow text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 border border-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-800" /> Complete Student Infrastructure
            </span>
            <H2 className="text-brand-primary mb-3 text-3xl font-bold">Facilities Designed for Growth & Safety</H2>
            <Text className="text-text-secondary text-base md:text-lg">
              We provide a safe, well-equipped, and inspiring environment supporting academic learning, health, physical fitness, and creative expression.
            </Text>
          </div>

          {/* 1. Facility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const IconComp = fac.icon
              return (
                <Card key={idx} variant={fac.variant} className="p-6 flex flex-col justify-between hover:-translate-y-1 transition-all">
                  <div>
                    {fac.image ? (
                      <ZoomableImage
                        src={fac.image}
                        alt={fac.title}
                        caption={`${fac.title} — ${fac.desc}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        containerClassName="aspect-video w-full rounded-xl shadow-xs mb-4 border border-neutral-200/80"
                      />
                    ) : (
                      <PlaceholderImage assetName={fac.asset} aspectRatio="video" themeVariant={fac.theme} className="w-full rounded-xl overflow-hidden shadow-xs mb-4" />
                    )}
                    
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-brand-primary px-2.5 py-0.5 rounded-full border border-neutral-200 shadow-2xs">
                        {fac.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 bg-white text-brand-primary rounded-lg flex items-center justify-center border border-neutral-200 shrink-0">
                        <IconComp className="h-4 w-4 text-brand-primary" />
                      </div>
                      <H3 className="text-lg font-bold text-brand-primary">{fac.title}</H3>
                    </div>

                    <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">{fac.desc}</Text>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
