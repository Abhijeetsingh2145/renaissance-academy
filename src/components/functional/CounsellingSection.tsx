'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { H2, Text } from '@/components/ui/Typography'
import { 
  UserCheck, 
  Mic, 
  Trophy, 
  X,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ChevronRight
} from 'lucide-react'

export interface CounsellingTile {
  id: number
  title: string
  badge: string
  shortDesc: string
  fullOverview: string
  icon: React.ElementType
  accentClasses: {
    bgLight: string
    border: string
    borderActive: string
    text: string
    badgeBg: string
    badgeText: string
    dotBg: string
    buttonText: string
  }
  bullets: string[]
  detailedFeatures: {
    title: string
    desc: string
  }[]
  metrics: {
    label: string
    value: string
  }[]
}

const tilesData: CounsellingTile[] = [
  {
    id: 0,
    title: 'In-House Student Counselling',
    badge: '1-on-1 Guidance',
    shortDesc: 'Confidential 1-on-1 counseling support for adolescent emotional growth, exam stress management, peer relationships, and positive self-esteem.',
    fullOverview: 'Our dedicated resident counsellor provides a safe, 100% confidential space to help students manage exam stress, emotional growth, and healthy habit formation.',
    icon: UserCheck,
    accentClasses: {
      bgLight: 'bg-amber-50/80',
      border: 'border-amber-200/90',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/20',
      text: 'text-amber-900',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900 border-amber-300/80',
      dotBg: 'bg-amber-500',
      buttonText: 'text-amber-800'
    },
    bullets: [
      'Full-Time Resident Certified Counsellor',
      'Confidential Emotional & Stress Relief',
      'Collaborative Parent-Counsellor Check-ins'
    ],
    detailedFeatures: [
      {
        title: 'Emotional & Stress Management',
        desc: '1-on-1 coping techniques for exam pressure and peer dynamics.'
      },
      {
        title: 'Parent-Counsellor Consultations',
        desc: 'Regular check-ins to align home and school emotional wellbeing.'
      },
      {
        title: 'Habit & Resilience Mentorship',
        desc: 'Tailored study habits and self-esteem building frameworks.'
      }
    ],
    metrics: [
      { label: 'Counsellor', value: 'Daily On-Campus' },
      { label: 'Privacy', value: '100% Confidential' },
      { label: 'Support', value: 'Class K–12' }
    ]
  },
  {
    id: 1,
    title: 'Confidence & Stage Presence',
    badge: 'Public Speaking & Debates',
    shortDesc: 'Interactive debates, morning assembly public speaking opportunities, declamation events, and stage activities designed to overcome fear early.',
    fullOverview: 'Stage fear is systematically eliminated. Every student participates in rotational podium speeches during morning assemblies, intra-house debates, and declamations.',
    icon: Mic,
    accentClasses: {
      bgLight: 'bg-blue-50/80',
      border: 'border-blue-200/90',
      borderActive: 'border-brand-sky ring-2 ring-brand-sky/20',
      text: 'text-brand-primary',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-900 border-blue-300/80',
      dotBg: 'bg-brand-sky',
      buttonText: 'text-brand-sky'
    },
    bullets: [
      'Mandatory Morning Assembly Speeches',
      'Intra-School Debates & Declamations',
      'English Body Language & Voice Modulation'
    ],
    detailedFeatures: [
      {
        title: 'Mandatory Assembly Speeches',
        desc: 'Rotational podium exposure for every single student.'
      },
      {
        title: 'Oratory & Voice Modulation',
        desc: 'Coaching in body language, vocal pitch, and articulation.'
      },
      {
        title: 'Intra-House Debates',
        desc: 'Fostering quick reasoning, logic, and expressive confidence.'
      }
    ],
    metrics: [
      { label: 'Podium Exposure', value: '100% Students' },
      { label: 'Assembly Speeches', value: 'Daily Routine' },
      { label: 'Focus', value: 'English Oratory' }
    ]
  },
  {
    id: 2,
    title: 'Leadership & Stream Mentorship',
    badge: 'Stream & Study Support',
    shortDesc: 'Four-House Prefectorial Council leadership roles, team sportsmanship, Class 9 to 12 academic stream selection support, and goal setting.',
    fullOverview: 'Senior students gain real responsibility through the Prefectorial Council, house captaincy, sports leadership, and expert Class 9 to 12 academic stream guidance.',
    icon: Trophy,
    accentClasses: {
      bgLight: 'bg-emerald-50/80',
      border: 'border-emerald-200/90',
      borderActive: 'border-emerald-500 ring-2 ring-emerald-500/20',
      text: 'text-emerald-900',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900 border-emerald-300/80',
      dotBg: 'bg-emerald-600',
      buttonText: 'text-emerald-800'
    },
    bullets: [
      'Four-House Student Prefectorial Council',
      'Class 9 to 12 Stream Selection & Aptitude Guidance',
      'Moral Courage, Ethics & Team Sports'
    ],
    detailedFeatures: [
      {
        title: 'Prefectorial Student Council',
        desc: 'Real student leadership roles in discipline and school events.'
      },
      {
        title: 'Class 9 to 12 Stream Guidance',
        desc: 'Aptitude mapping for Science, Commerce & Humanities.'
      },
      {
        title: 'Ethics & Sportsmanship',
        desc: 'Building moral courage and teamwork through house sports.'
      }
    ],
    metrics: [
      { label: 'Student Houses', value: '4 Active Houses' },
      { label: 'Stream Support', value: 'Class 9 to 12 Aptitude' },
      { label: 'Council', value: 'Prefect Roles' }
    ]
  }
]

const smoothSpring = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 26,
  mass: 0.8
}

export function CounsellingSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const activeTile = activeId !== null ? tilesData.find(t => t.id === activeId) : null

  return (
    <section className="py-16 sm:py-24 bg-surface-neutral/60 border-y border-neutral-200/80" id="counselling-personality">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 px-2">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/90 text-amber-900 text-xs font-bold px-3.5 sm:px-4 py-1.5 rounded-full uppercase tracking-wider border border-amber-300/80 mb-3 sm:mb-3.5 shadow-2xs">
            <UserCheck className="h-3.5 w-3.5 text-amber-800" /> Signature Institutional Advantage
          </span>
          <H2 className="text-brand-primary text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
            In-House Student Counselling & Personality Development
          </H2>
          <Text className="text-text-secondary leading-relaxed text-sm sm:text-lg">
            What truly sets Renaissance Academy apart is our full-time <strong className="text-brand-primary font-bold">In-House Student Counsellor</strong> and structured personality development framework—nurturing emotional well-being, stage confidence, and ethical leadership.
          </Text>
        </div>

        {/* Dynamic Container */}
        <motion.div layout transition={smoothSpring} className="w-full">
          
          {/* ========================================================================= */}
          {/* INITIAL STATE: 3 Full Cards Grid */}
          {/* ========================================================================= */}
          {activeId === null && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch"
            >
              {tilesData.map((tile) => {
                const IconComp = tile.icon
                return (
                  <motion.div
                    key={tile.id}
                    layout
                    whileHover={{ y: -6 }}
                    onClick={() => setActiveId(tile.id)}
                    className="p-1.5 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs group cursor-pointer transition-all duration-300 flex flex-col h-full active:scale-[0.99]"
                  >
                    <div className="bg-white p-5 sm:p-7 rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2.5rem-0.5rem)] text-left h-full flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:border-amber-300/60 transition-colors">
                      <div>
                        {/* Top Icon & Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${tile.accentClasses.badgeBg} ${tile.accentClasses.text} flex items-center justify-center border ${tile.accentClasses.border} shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                            <IconComp className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          <span className={`text-[11px] sm:text-xs font-bold ${tile.accentClasses.badgeText} ${tile.accentClasses.badgeBg} px-2.5 sm:px-3 py-1 rounded-full border`}>
                            {tile.badge}
                          </span>
                        </div>

                        {/* Title & Short Description */}
                        <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-2 group-hover:text-amber-800 transition-colors">
                          {tile.title}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mb-4 sm:mb-5">
                          {tile.shortDesc}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-neutral-100">
                          {tile.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                              <div className={`w-1.5 h-1.5 rounded-full ${tile.accentClasses.dotBg} shrink-0`} />
                              <span className="leading-snug">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* EXPANDED STATE: Compact Mobile & Desktop Responsive View */}
          {/* ========================================================================= */}
          {activeId !== null && activeTile && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch min-h-[380px] max-w-6xl mx-auto"
            >
              
              {/* MOBILE & DESKTOP PILLAR SELECTOR */}
              <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] border border-neutral-200 shadow-2xs flex flex-col justify-between h-full">
                
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 sm:pb-3 sm:mb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-[11px] font-extrabold text-brand-primary uppercase tracking-wider">
                        Advantage Pillars
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-500 hover:text-brand-primary bg-neutral-100 hover:bg-amber-100/70 px-2.5 py-1 rounded-full transition-colors cursor-pointer active:scale-95"
                      title="Show all 3 cards"
                    >
                      <RotateCcw className="w-3 h-3 text-neutral-600" />
                      <span>Show All</span>
                    </button>
                  </div>

                  {/* 3 Pillar Selector Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-2.5">
                    {tilesData.map((tile) => {
                      const IconComp = tile.icon
                      const isSelected = tile.id === activeId

                      if (isSelected) {
                        return (
                          <motion.button
                            key={tile.id}
                            layout
                            onClick={() => setActiveId(tile.id)}
                            className={`w-full text-left p-2.5 sm:p-3 rounded-xl bg-amber-50/90 border-2 ${tile.accentClasses.borderActive} shadow-xs cursor-pointer flex items-center justify-between gap-2 sm:gap-3`}
                          >
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${tile.accentClasses.badgeBg} ${tile.accentClasses.text} flex items-center justify-center shrink-0 border ${tile.accentClasses.border}`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[9px] sm:text-[10px] font-extrabold text-amber-900 uppercase tracking-wider truncate">
                                  {tile.badge}
                                </div>
                                <div className="text-xs font-bold text-brand-primary truncate">
                                  {tile.title}
                                </div>
                              </div>
                            </div>

                            <ChevronRight className="w-4 h-4 text-amber-800 shrink-0 hidden sm:block lg:block" />
                          </motion.button>
                        )
                      }

                      return (
                        <motion.button
                          key={tile.id}
                          layout
                          onClick={() => setActiveId(tile.id)}
                          className="w-full text-left p-2.5 sm:p-3 rounded-xl bg-neutral-50/80 hover:bg-neutral-100 border border-neutral-200/80 transition-all cursor-pointer flex items-center justify-between gap-2 sm:gap-3 group"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white text-neutral-600 group-hover:text-amber-800 flex items-center justify-center shrink-0 border border-neutral-200">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[9px] sm:text-[10px] font-semibold text-neutral-400 truncate">
                                {tile.badge}
                              </div>
                              <div className="text-xs font-bold text-brand-primary truncate">
                                {tile.title}
                              </div>
                            </div>
                          </div>

                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform shrink-0 hidden sm:block lg:block" />
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE (8 Cols): Detailed View */}
              <div className="lg:col-span-8 bg-white p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] border border-neutral-200 shadow-md flex flex-col justify-between h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTile.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 ${activeTile.accentClasses.badgeBg} ${activeTile.accentClasses.badgeText} text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border`}>
                          <activeTile.icon className="h-3.5 w-3.5" />
                          <span>{activeTile.badge}</span>
                        </span>

                        <button
                          onClick={() => setActiveId(null)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded-full transition-colors cursor-pointer active:scale-95"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Close</span>
                        </button>
                      </div>

                      {/* Main Title & Short Overview */}
                      <h3 className="text-lg sm:text-2xl font-extrabold text-brand-primary mb-2 leading-snug">
                        {activeTile.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                        {activeTile.fullOverview}
                      </p>

                      {/* Compact Highlights List */}
                      <div className="space-y-2 mb-4">
                        {activeTile.detailedFeatures.map((feat, idx) => (
                          <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start sm:items-center gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 ${activeTile.accentClasses.text} shrink-0 mt-0.5 sm:mt-0`} />
                            <div className="min-w-0">
                              <span className="text-xs font-bold text-brand-primary">{feat.title}: </span>
                              <span className="text-xs text-text-secondary">{feat.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Metric Pills Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {activeTile.metrics.map((m, idx) => (
                          <div key={idx} className={`p-2 rounded-xl ${activeTile.accentClasses.bgLight} border ${activeTile.accentClasses.border} text-center`}>
                            <div className="text-[10px] text-neutral-500 font-medium truncate">{m.label}</div>
                            <div className={`text-xs font-bold ${activeTile.accentClasses.text} truncate`}>{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          )}

        </motion.div>

      </Container>
    </section>
  )
}
