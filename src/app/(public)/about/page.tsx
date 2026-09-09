import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { 
  BookOpen, 
  UserCheck, 
  Mic, 
  Award, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  Trophy,
  HeartHandshake,
  Globe2,
  ArrowRight
} from 'lucide-react'
import { SchoolTimeline } from '@/components/functional/SchoolTimeline'
import Link from 'next/link'

export const metadata = {
  title: { absolute: 'About Us & Journey | Renaissance Academy, Gorakhpur' },
  description: 'Learn about the history, founding vision (22 March 2014), CBSE affiliation (No. 2139), 3-acre campus, achievements, and milestones of Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/about',
  },
}

export default function Page() {
  const verifiedAchievements = [
    {
      year: '2017',
      title: '7th International Young Mathematician\'s Competition',
      badge: 'International Medals',
      desc: 'Students represented the institution internationally, winning Silver & Bronze Medals at the 7th IYMC mathematics olympiad.',
      icon: Award,
      color: 'bg-purple-100 text-purple-900 border-purple-300'
    },
    {
      year: '2016',
      title: 'Regional Paryavaran Mitra Seminar 2016',
      badge: 'Environmental Leadership',
      desc: 'Hosted the Paryavaran Mitra Seminar, engaging students in environmental ecology and tree plantation drives.',
      icon: Globe2,
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      year: '2016',
      title: 'Inaugural Annual Sports Meet "Aaveg – 2016"',
      badge: 'Athletic Tournament',
      desc: 'Launched the annual inter-house sports festival "Aaveg", encouraging track and field sportsmanship and leadership.',
      icon: Trophy,
      color: 'bg-blue-100 text-blue-900 border-blue-300'
    },
    {
      year: '2019',
      title: 'Snehalay Shelter Home Community Service',
      badge: 'Social Outreach',
      desc: 'Organized student visits and donation drives at Snehalay Shelter Home, nurturing civic responsibility and empathy.',
      icon: HeartHandshake,
      color: 'bg-rose-100 text-rose-900 border-rose-300'
    },
    {
      year: '2024–26',
      title: 'Unnati Merit Scholarship Program',
      badge: 'Up to 100% Scholarship',
      desc: 'Provides up to 100% merit scholarships for outstanding students alongside signature events like ICON & MEDICON.',
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      year: '2026–31',
      title: 'CBSE Affiliation Extension (No. 2139 / ID: 2132397)',
      badge: 'CBSE Affiliation',
      desc: 'Formally affiliated with the Central Board of Secondary Education (CBSE) under Affiliation No. 2139 (ID: 2132397).',
      icon: ShieldCheck,
      color: 'bg-amber-100 text-amber-900 border-amber-300'
    }
  ]

  return (
    <div className="bg-surface-cream/30 min-h-screen pb-24">
      
      {/* 1. HERO BANNER */}
      <div className="bg-brand-primary text-white py-14 sm:py-16 border-b-4 border-accent-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-accent-gold/40 shadow-xs">
            <Calendar className="h-3.5 w-3.5 text-accent-gold" /> Founded March 22, 2014 • Gorakhpur, UP
          </div>

          <H1 className="text-white mb-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            About Renaissance Academy
          </H1>

          <Text className="text-neutral-200 text-base sm:text-xl max-w-3xl leading-relaxed">
            Co-educational CBSE English-Medium Education | Integrating Traditional Wisdom with Modern Scientific Pedagogy
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-6xl">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* 2. STATS BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 mb-12">
          
          <div className="p-1.5 rounded-2xl bg-neutral-200/50 border border-neutral-300/60 shadow-2xs">
            <div className="bg-white p-5 rounded-[calc(1rem-0.125rem)] text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-amber-100/90 text-amber-900 flex items-center justify-center border border-amber-300/80 shadow-2xs mb-3">
                <Calendar className="h-5 w-5 text-amber-800" />
              </div>
              <div className="text-2xl font-extrabold text-brand-primary">Est. 2014</div>
              <div className="text-xs text-text-secondary mt-1 font-medium">Inaugurated 22 March 2014 in Gorakhpur</div>
            </div>
          </div>

          <div className="p-1.5 rounded-2xl bg-neutral-200/50 border border-neutral-300/60 shadow-2xs">
            <div className="bg-white p-5 rounded-[calc(1rem-0.125rem)] text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-100/90 text-brand-sky flex items-center justify-center border border-blue-300/80 shadow-2xs mb-3">
                <Building2 className="h-5 w-5 text-brand-sky" />
              </div>
              <div className="text-2xl font-extrabold text-brand-primary">3 Acres</div>
              <div className="text-xs text-text-secondary mt-1 font-medium">~12,140 sq.m total area & 3,018 sq.m sports ground</div>
            </div>
          </div>

          <div className="p-1.5 rounded-2xl bg-neutral-200/50 border border-neutral-300/60 shadow-2xs">
            <div className="bg-white p-5 rounded-[calc(1rem-0.125rem)] text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center border border-emerald-300/80 shadow-2xs mb-3">
                <ShieldCheck className="h-5 w-5 text-emerald-800" />
              </div>
              <div className="text-2xl font-extrabold text-brand-primary">CBSE 2139</div>
              <div className="text-xs text-text-secondary mt-1 font-medium">Affiliation No. 2139 (ID: 2132397, Valid 2026–31)</div>
            </div>
          </div>

          <div className="p-1.5 rounded-2xl bg-neutral-200/50 border border-neutral-300/60 shadow-2xs">
            <div className="bg-white p-5 rounded-[calc(1rem-0.125rem)] text-left h-full">
              <div className="w-10 h-10 rounded-xl bg-purple-100/90 text-purple-800 flex items-center justify-center border border-purple-300/80 shadow-2xs mb-3">
                <GraduationCap className="h-5 w-5 text-purple-800" />
              </div>
              <div className="text-2xl font-extrabold text-brand-primary">K-10 CBSE</div>
              <div className="text-xs text-text-secondary mt-1 font-medium">Nursery to Class X complete English-medium schooling</div>
            </div>
          </div>

        </div>

        {/* 3. FOUNDING STORY & VISION CARD */}
        <div className="p-2 rounded-[2.5rem] bg-amber-200/50 border border-amber-300/80 shadow-2xs mb-12">
          <div className="bg-white rounded-[calc(2.5rem-0.5rem)] p-8 sm:p-12 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100/90 text-amber-900 rounded-2xl flex items-center justify-center font-bold shrink-0 border border-amber-300/80 shadow-2xs">
                <BookOpen className="h-6 w-6 text-amber-800" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">FOUNDING PHILOSOPHY</span>
                <H2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary">Our Story & Educational Vision</H2>
              </div>
            </div>

            <div className="prose prose-lg text-neutral-700 leading-relaxed space-y-5 text-sm sm:text-base">
              <p>
                Inaugurated on <strong className="text-brand-primary font-bold">22 March 2014</strong>, Renaissance Academy is located in Baijnathpur, Balapar Road (Landmark: Omkar Ashram), Gorakhpur, UP – 273007 (~4 km from Maniram Railway Station). We offer complete co-educational English-medium schooling from <strong className="text-brand-primary font-bold">Nursery to Class X (K-10)</strong>.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 my-4">
                <p className="text-sm sm:text-base font-semibold text-amber-900 italic mb-1">
                  &quot;The word &apos;Renaissance&apos; signifies the rebirth of archaic education—integrating traditional moral teaching with modern scientific methods.&quot;
                </p>
                <span className="text-xs font-bold text-amber-800">— Institutional Philosophy, Renaissance Academy</span>
              </div>

              <p>
                We believe true education extends far beyond textbooks. At Renaissance Academy, we prioritize developing each student&apos;s <strong className="text-brand-primary font-bold">personality, self-confidence, public speaking skills, and leadership qualities</strong> alongside our dedicated In-House Student Counsellor system.
              </p>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 mt-8 border-t border-neutral-100">
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 flex items-start gap-3">
                <UserCheck className="h-5 w-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-primary text-xs sm:text-sm">In-House Counsellor</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-snug">Resident counsellor for 1-on-1 emotional & stress support.</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200/80 flex items-start gap-3">
                <Mic className="h-5 w-5 text-brand-sky shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-primary text-xs sm:text-sm">Stage Confidence</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-snug">Daily morning assembly speeches, debates & declamations.</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 flex items-start gap-3">
                <Trophy className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-primary text-xs sm:text-sm">Leadership Training</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-snug">Four-House Prefectorial Council & decision-making roles.</p>
                </div>
              </div>

              <div className="p-4 bg-purple-50/80 rounded-2xl border border-purple-200/80 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-purple-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-primary text-xs sm:text-sm">English Culture</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-snug">Fluent communication & immersive global learning culture.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. KEY ACHIEVEMENTS SHOWCASE GRID */}
        <div className="mb-14">
          <div className="text-left mb-6">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              HALL OF ACHIEVEMENTS
            </span>
            <H2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mt-2">
              Notable Accomplishments & Recognition
            </H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verifiedAchievements.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-2 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs hover:shadow-md transition-all">
                  <div className="bg-white p-6 rounded-[calc(2rem-0.375rem)] text-left h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-brand-primary bg-neutral-100 px-2 py-0.5 rounded-md">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-extrabold text-brand-primary leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Verified Event Record</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 5. INFRASTRUCTURE & CAMPUS SPECS */}
        <div className="p-2 rounded-[2.5rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs mb-16">
          <div className="bg-white rounded-[calc(2.5rem-0.5rem)] p-8 sm:p-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 text-brand-sky rounded-xl flex items-center justify-center font-bold shrink-0 border border-blue-200">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-sky uppercase tracking-wider">CAMPUS & FACILITIES</span>
                <h3 className="text-2xl font-extrabold text-brand-primary">3-Acre Masterplan Infrastructure</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Classrooms</div>
                <div className="text-base font-extrabold text-brand-primary mt-0.5">22 Smart Rooms</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Labs</div>
                <div className="text-base font-extrabold text-brand-sky mt-0.5">3 Specialized</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Play Area</div>
                <div className="text-base font-extrabold text-emerald-800 mt-0.5">3,018 sq.m</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Total Area</div>
                <div className="text-base font-extrabold text-amber-800 mt-0.5">12,140 sq.m</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Cultural</div>
                <div className="text-base font-extrabold text-purple-800 mt-0.5">Music/Dance/Art</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
                <div className="text-xs text-text-secondary font-medium">Services</div>
                <div className="text-base font-extrabold text-rose-800 mt-0.5">Transport & Clinic</div>
              </div>
            </div>
          </div>
        </div>

      </Container>

      {/* 6. HISTORIC TIMELINE SECTION */}
      <SchoolTimeline />

    </div>
  )
}
