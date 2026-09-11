'use client'

import React from 'react'
import { Container } from '@/components/layout/Container'
import { H2, Text } from '@/components/ui/Typography'
import { 
  Calendar, 
  Award, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Trophy, 
  HeartHandshake, 
  Globe2,
  BookOpen
} from 'lucide-react'
import { motion } from 'framer-motion'

export interface Milestone {
  year: string
  dateLabel?: string
  title: string
  description: string
  category: string
  tag: string
  icon: React.ElementType
  accentColor: string
}

export const schoolMilestones: Milestone[] = [
  {
    year: '2014',
    dateLabel: '22 March 2014',
    title: 'Inauguration & Founding Vision',
    description: 'Inaugurated on 22 March 2014. The name "Renaissance" was chosen to signify the rebirth of archaic education, integrating traditional moral values with modern English-medium pedagogy.',
    category: 'Foundation',
    tag: 'Established 2014',
    icon: Building2,
    accentColor: 'border-amber-400 text-amber-900 bg-amber-100'
  },
  {
    year: '2016',
    dateLabel: 'Environmental Leadership',
    title: 'Hosted Paryavaran Mitra Seminar 2016',
    description: 'Renaissance Academy hosted the Paryavaran Mitra Seminar, bringing together students and educators to champion environmental ecology, sustainability, and green initiatives.',
    category: 'Environmental',
    tag: 'Paryavaran Mitra 2016',
    icon: Globe2,
    accentColor: 'border-emerald-400 text-emerald-900 bg-emerald-100'
  },
  {
    year: '2016',
    dateLabel: 'First Annual Sports Meet',
    title: 'Inaugural Annual Sports Meet "Aaveg 2016"',
    description: 'Hosted the first edition of the school’s annual sports extravaganza "Aaveg 2016", establishing a strong tradition of track and field athletics, discipline, and team spirit.',
    category: 'Sports & Athletics',
    tag: 'Aaveg 2016',
    icon: Trophy,
    accentColor: 'border-blue-400 text-brand-primary bg-blue-100'
  },
  {
    year: '2017',
    dateLabel: '7th International Mathematics Competition',
    title: 'Silver & Bronze Medals at International Math Olympiad',
    description: 'Students achieved international recognition by winning Silver and Bronze Medals at the 7th International Young Mathematician’s Competition (IYMC), demonstrating high analytical excellence.',
    category: 'International Honor',
    tag: 'IYMC Medals',
    icon: Award,
    accentColor: 'border-purple-400 text-purple-900 bg-purple-100'
  },
  {
    year: '2019',
    dateLabel: 'Social Outreach',
    title: 'Snehalay Shelter Home Community Service',
    description: 'Organized student outreach visits and donation drives at Snehalay Shelter Home, nurturing empathy, civic duty, and social compassion in young learners.',
    category: 'Community Service',
    tag: 'Snehalay Outreach',
    icon: HeartHandshake,
    accentColor: 'border-rose-400 text-rose-900 bg-rose-100'
  },
  {
    year: '2024-2026',
    dateLabel: 'CBSE Affiliation No. 2139',
    title: 'Unnati Scholarship & Academic Conventions (ICON & MEDICON)',
    description: 'Maintains CBSE affiliation (Affiliation No. 2139 / ID: 2132397 valid through 2031). Offers the "Unnati Scholarship Program" providing up to 100% merit scholarships alongside flagship ICON & MEDICON academic events.',
    category: 'Academic Excellence',
    tag: '100% Scholarship',
    icon: Sparkles,
    accentColor: 'border-amber-500 text-amber-900 bg-amber-100'
  }
]

export function SchoolTimeline({ milestones = schoolMilestones }: { milestones?: Milestone[] }) {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-200/80 relative overflow-hidden" id="journey">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/90 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-amber-300/80 mb-3.5 shadow-2xs">
            <Calendar className="h-3.5 w-3.5 text-amber-800" /> Historic Milestones & Achievements
          </span>
          <H2 className="text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our Journey & Key Accomplishments
          </H2>
          <Text className="text-text-secondary text-base sm:text-lg leading-relaxed">
            From our founding on 22 March 2014 to international mathematics medals, environmental seminars, and community outreach.
          </Text>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-amber-300/80 ml-4 sm:ml-32 space-y-10 my-6">
          {milestones.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-7 sm:pl-10 group"
              >
                {/* Year Marker Badge for Desktop */}
                <div className="hidden sm:flex absolute -left-32 top-1 w-24 text-right flex-col items-end">
                  <span className="text-2xl font-extrabold text-brand-primary tracking-tight leading-none">{m.year}</span>
                  {m.dateLabel && (
                    <span className="text-[10px] font-bold text-amber-800 mt-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                      {m.dateLabel}
                    </span>
                  )}
                </div>

                {/* Timeline Node Icon Circle */}
                <div className="absolute -left-[17px] top-1.5 w-9 h-9 rounded-full bg-white border-2 border-brand-primary text-brand-primary flex items-center justify-center shadow-xs group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Milestone Content Card */}
                <div className="p-1.5 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/70 shadow-2xs group-hover:shadow-md transition-all duration-300">
                  <div className="bg-white p-6 sm:p-7 rounded-[calc(2rem-0.375rem)] text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    
                    {/* Mobile Year Badge */}
                    <div className="flex items-center gap-2 sm:hidden mb-3 flex-wrap">
                      <span className="text-xs font-bold text-brand-primary bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                        {m.year}
                      </span>
                      {m.dateLabel && (
                        <span className="text-[10px] font-semibold text-text-secondary">
                          {m.dateLabel}
                        </span>
                      )}
                    </div>

                    {/* Top Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${m.accentColor}`}>
                        {m.category}
                      </span>
                      <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                        {m.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-primary mb-2 leading-snug">
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                      {m.description}
                    </p>

                    {/* Verification Footer */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Verified Milestone • Renaissance Academy</span>
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
