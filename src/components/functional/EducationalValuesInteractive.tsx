'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  UserCheck, 
  Trophy, 
  HeartHandshake, 
  CheckCircle2, 
  X, 
  ChevronRight,
  Sparkles,
  RotateCcw
} from 'lucide-react'

export interface PillarDetail {
  id: number
  title: string
  shortDesc: string
  fullDesc: string
  icon: React.ElementType
  badge: string
  badgeClass: string
  bgColor: string
  accentClasses: {
    bgLight: string
    border: string
    borderActive: string
    text: string
    badgeBg: string
    badgeText: string
    dotBg: string
  }
  highlights: string[]
  metrics: {
    label: string
    value: string
  }[]
}

const pillars: PillarDetail[] = [
  {
    id: 0,
    title: 'K-12 CBSE Excellence',
    shortDesc: 'Complete academic pathway from Nursery to Class 12th with interactive smart learning.',
    fullDesc: 'Renaissance Academy provides a seamless educational journey following the CBSE curriculum. From foundational phonics in Nursery to Board exam prep in Senior Secondary, our approach emphasizes concept clarity.',
    icon: BookOpen,
    badge: 'ACADEMIC FRAMEWORK',
    bgColor: 'bg-[#FFF9D8]',
    badgeClass: 'bg-[#FEF9C3] text-amber-900 border-amber-300',
    accentClasses: {
      bgLight: 'bg-amber-50/80',
      border: 'border-amber-200/90',
      borderActive: 'border-amber-400 ring-2 ring-amber-400/20',
      text: 'text-amber-900',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900 border-amber-300/80',
      dotBg: 'bg-amber-500'
    },
    highlights: [
      'Structured CBSE Board Syllabus from Nursery to Class XII',
      'Smart Classrooms with audio-visual teaching aids',
      'Continuous assessment, term evaluations & doubt clearing',
      'Fully-equipped Science, Mathematics & Computer laboratories'
    ],
    metrics: [
      { label: 'Curriculum', value: 'CBSE K-12' },
      { label: 'Classrooms', value: 'Smart AV Equipped' },
      { label: 'Methodology', value: 'Concept Clarity' }
    ]
  },
  {
    id: 1,
    title: 'In-House Student Counsellor',
    shortDesc: 'Dedicated school counsellor providing personal guidance, emotional wellness, and career mentorship.',
    fullDesc: 'Our full-time resident Student Counsellor provides a compassionate, confidential space for 1-on-1 guidance. Students navigate emotional changes, exam stress, and career choices with professional care.',
    icon: UserCheck,
    badge: 'SIGNATURE CARE',
    bgColor: 'bg-[#EBF3FF]',
    badgeClass: 'bg-[#EBF3FF] text-blue-900 border-blue-300',
    accentClasses: {
      bgLight: 'bg-blue-50/80',
      border: 'border-blue-200/90',
      borderActive: 'border-brand-sky ring-2 ring-brand-sky/20',
      text: 'text-brand-primary',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-900 border-blue-300/80',
      dotBg: 'bg-brand-sky'
    },
    highlights: [
      '1-on-1 confidential counselling & emotional wellness sessions',
      'Exam stress management & personalized study habit guidance',
      'Class 9–12 career mentorship & academic stream selection',
      'Collaborative parent-counsellor progress check-ins'
    ],
    metrics: [
      { label: 'Guidance', value: '1-on-1 Sessions' },
      { label: 'Privacy', value: '100% Confidential' },
      { label: 'Counsellor', value: 'Full-Time Resident' }
    ]
  },
  {
    id: 2,
    title: 'Personality & Leadership',
    shortDesc: 'Nurturing self-confidence, public speaking, teamwork, and leadership skills for every child.',
    fullDesc: 'Stage fear is eliminated through daily assembly presentations, intra-school debates, declamations, and house activities. Students learn decision-making, sportsmanship, and leadership.',
    icon: Trophy,
    badge: 'HOLISTIC GROWTH',
    bgColor: 'bg-[#E8F8F0]',
    badgeClass: 'bg-[#E8F8F0] text-emerald-900 border-emerald-300',
    accentClasses: {
      bgLight: 'bg-emerald-50/80',
      border: 'border-emerald-200/90',
      borderActive: 'border-emerald-500 ring-2 ring-emerald-500/20',
      text: 'text-emerald-900',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900 border-emerald-300/80',
      dotBg: 'bg-emerald-600'
    },
    highlights: [
      'Mandatory stage presentations in morning assemblies',
      'Intra-school debate, declamation & public speaking events',
      'Four-House prefectorial council & captaincy leadership',
      'Teamwork, sportsmanship & moral character building'
    ],
    metrics: [
      { label: 'Stage Exposure', value: '100% Students' },
      { label: 'Student Houses', value: '4 Active Houses' },
      { label: 'Focus', value: 'Public Speaking' }
    ]
  },
  {
    id: 3,
    title: 'English-Medium Culture',
    shortDesc: 'Fluent communication skills and supportive environment where children express ideas freely.',
    fullDesc: 'English fluency is cultivated naturally in a supportive, encouraging atmosphere. Daily spoken communication, story discussions, and literary activities empower students to express ideas with confidence.',
    icon: HeartHandshake,
    badge: 'FLUENT COMMUNICATION',
    bgColor: 'bg-[#FFF0F0]',
    badgeClass: 'bg-[#FFF0F0] text-rose-900 border-rose-300',
    accentClasses: {
      bgLight: 'bg-rose-50/80',
      border: 'border-rose-200/90',
      borderActive: 'border-rose-400 ring-2 ring-rose-400/20',
      text: 'text-rose-900',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-900 border-rose-300/80',
      dotBg: 'bg-rose-500'
    },
    highlights: [
      'Immersive English-medium environment across all wings',
      'Literary clubs, creative writing & vocabulary building',
      'Supportive & encouraging classroom discussion culture',
      'Confidence building for national competitive platforms'
    ],
    metrics: [
      { label: 'Medium', value: '100% English' },
      { label: 'Clubs', value: 'Literary & Oratory' },
      { label: 'Culture', value: 'Expressive Learning' }
    ]
  }
]

const smoothSpring = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 26,
  mass: 0.8
}

export function EducationalValuesInteractive() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const activePillar = activeId !== null ? pillars.find(p => p.id === activeId) : null

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden" id="educational-values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block bg-[#EBF3FF] text-[#3B82F6] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            OUR EDUCATIONAL VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] mb-4 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Beyond academic excellence, we prioritize student well-being, confidence, leadership, and emotional growth.
          </p>
        </div>

        {/* Dynamic Container */}
        <motion.div layout transition={smoothSpring} className="w-full">

          {/* ============================================================ */}
          {/* STATE 1: UNEXPANDED STATE — Double-Bezel White Cards Grid */}
          {/* ============================================================ */}
          {activeId === null && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch"
            >
              {pillars.map((item, index) => {
                const IconComp = item.icon
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    onClick={() => setActiveId(item.id)}
                    className="p-1.5 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs group cursor-pointer transition-all duration-300 flex flex-col h-full active:scale-[0.99]"
                  >
                    <div className="bg-white p-5 sm:p-6 rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2.5rem-0.5rem)] h-full flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:border-blue-300/80 transition-colors">
                      <div className="flex flex-col items-center text-center">
                        {/* Centered Icon Container */}
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.accentClasses.badgeBg} ${item.accentClasses.text} flex items-center justify-center border ${item.accentClasses.border} shadow-2xs mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComp className="h-7 w-7 sm:h-8 sm:w-8" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#1B2559] mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                          {item.shortDesc}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="w-full space-y-2 pt-3 border-t border-neutral-100 text-left">
                          {item.highlights.slice(0, 3).map((point, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                              <div className={`w-1.5 h-1.5 rounded-full ${item.accentClasses.dotBg} shrink-0`} />
                              <span className="leading-snug truncate">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Click Indicator */}
                      <div className="mt-5 pt-3 border-t border-neutral-100 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#1B2559]/70 group-hover:text-blue-600 transition-colors">
                        <span>Click to view details</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* STATE 2: EXPANDED VIEW — Matching CounsellingSection Framework */}
          {/* ============================================================ */}
          {activeId !== null && activePillar && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch min-h-[380px] max-w-6xl mx-auto"
            >
              
              {/* LEFT SIDE (4 Cols): 4 Small Tiles Sidebar */}
              <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] border border-neutral-200 shadow-2xs flex flex-col justify-between h-full">
                
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 sm:pb-3 sm:mb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-[11px] font-extrabold text-[#1B2559] uppercase tracking-wider">
                        Educational Pillars
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-500 hover:text-[#1B2559] bg-neutral-100 hover:bg-blue-100/70 px-2.5 py-1 rounded-full transition-colors cursor-pointer active:scale-95"
                      title="Show all 4 cards"
                    >
                      <RotateCcw className="w-3 h-3 text-neutral-600" />
                      <span>Show All</span>
                    </button>
                  </div>

                  {/* 4 Small Tiles Stack */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                    {pillars.map((tile) => {
                      const IconComp = tile.icon
                      const isSelected = tile.id === activeId

                      if (isSelected) {
                        return (
                          <motion.button
                            key={tile.id}
                            layout
                            onClick={() => setActiveId(tile.id)}
                            className={`w-full text-left p-2.5 sm:p-3 rounded-xl bg-slate-50 border-2 ${tile.accentClasses.borderActive} shadow-xs cursor-pointer flex items-center justify-between gap-2 sm:gap-3`}
                          >
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${tile.accentClasses.badgeBg} ${tile.accentClasses.text} flex items-center justify-center shrink-0 border ${tile.accentClasses.border}`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-800 uppercase tracking-wider truncate">
                                  {tile.badge}
                                </div>
                                <div className="text-xs font-bold text-[#1B2559] truncate">
                                  {tile.title}
                                </div>
                              </div>
                            </div>

                            <ChevronRight className="w-4 h-4 text-[#1B2559] shrink-0 hidden sm:block lg:block" />
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
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white text-neutral-600 group-hover:text-blue-600 flex items-center justify-center shrink-0 border border-neutral-200">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[9px] sm:text-[10px] font-semibold text-neutral-400 truncate">
                                {tile.badge}
                              </div>
                              <div className="text-xs font-bold text-[#1B2559] truncate">
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

              {/* RIGHT SIDE (8 Cols): Detailed View Matching CounsellingSection */}
              <div className="lg:col-span-8 bg-white p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] border border-neutral-200 shadow-md flex flex-col justify-between h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 ${activePillar.accentClasses.badgeBg} ${activePillar.accentClasses.badgeText} text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border`}>
                          <activePillar.icon className="h-3.5 w-3.5" />
                          <span>{activePillar.badge}</span>
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
                      <h3 className="text-lg sm:text-2xl font-extrabold text-[#1B2559] mb-2 leading-snug">
                        {activePillar.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                        {activePillar.fullDesc}
                      </p>

                      {/* Compact Highlights List */}
                      <div className="space-y-2 mb-4">
                        {activePillar.highlights.map((point, idx) => (
                          <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start sm:items-center gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 ${activePillar.accentClasses.text} shrink-0 mt-0.5 sm:mt-0`} />
                            <span className="text-xs font-semibold text-neutral-800 leading-snug">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metric Pills Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {activePillar.metrics.map((m, idx) => (
                          <div key={idx} className={`p-2 rounded-xl ${activePillar.accentClasses.bgLight} border ${activePillar.accentClasses.border} text-center`}>
                            <div className="text-[10px] text-neutral-500 font-medium truncate">{m.label}</div>
                            <div className={`text-xs font-bold ${activePillar.accentClasses.text} truncate`}>{m.value}</div>
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

      </div>
    </section>
  )
}
