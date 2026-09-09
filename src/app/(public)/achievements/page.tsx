import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { 
  Award, 
  BookOpen, 
  Trophy, 
  Star, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar,
  Medal,
  Globe2,
  Users
} from 'lucide-react'

export const metadata = {
  title: { absolute: 'Achievements & Milestones | Renaissance Academy, Gorakhpur' },
  description: 'Discover the international math competition medals, Aaveg sports meet, Unnati scholarship program, and civic milestones of Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/achievements',
  },
}

export default function AchievementsPage() {
  const verifiedAchievements = [
    {
      year: '2017',
      title: '7th International Young Mathematician\'s Competition (IYMC)',
      badge: 'International Honor',
      desc: 'Renaissance Academy students represented the institution on a global platform, securing Silver & Bronze Medals in mathematics problem-solving against international competitors.',
      icon: Medal,
      color: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      year: '2016',
      title: 'Regional Paryavaran Mitra Seminar 2016',
      badge: 'Environmental Leadership',
      desc: 'Hosted the regional Paryavaran Mitra Seminar focusing on sustainable ecology, tree plantation drives, and student environmental awareness in Uttar Pradesh.',
      icon: Globe2,
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      year: '2016',
      title: 'Inaugural Annual Sports Meet "Aaveg – 2016"',
      badge: 'Athletic Excellence',
      desc: 'Inaugurated the flagship inter-house athletic sports tournament "Aaveg", encouraging sportsmanship, track events, and prefectorial captaincy.',
      icon: Trophy,
      color: 'bg-blue-100 text-blue-900 border-blue-300'
    },
    {
      year: '2019',
      title: 'Snehalay Shelter Home Community Outreach',
      badge: 'Social Impact',
      desc: 'Students visited Snehalay Shelter Home for donation drives and interactive sessions, cultivating deep social empathy and community responsibility.',
      icon: HeartHandshake,
      color: 'bg-rose-100 text-rose-900 border-rose-300'
    },
    {
      year: '2024-25',
      title: 'Unnati Merit Scholarship Program',
      badge: 'Academic Opportunity',
      desc: 'Launched the Unnati Scholarship Program providing up to 100% scholarships for high-achieving students from Nursery to Senior Secondary levels.',
      icon: Sparkles,
      color: 'bg-purple-100 text-purple-900 border-purple-300'
    },
    {
      year: '2026-31',
      title: 'CBSE Affiliation Extension (No. 2139 / ID: 2132397)',
      badge: 'Board Excellence',
      desc: 'Achieved formal CBSE board affiliation validity through 2031, reflecting continuous excellence in academic standards and infrastructure.',
      icon: ShieldCheck,
      color: 'bg-amber-100 text-amber-900 border-amber-300'
    }
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-24">
      
      {/* Hero Banner */}
      <div className="bg-brand-primary text-white py-14 sm:py-16 border-b-4 border-accent-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <span className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-accent-gold/40 shadow-xs">
            <Trophy className="h-3.5 w-3.5 text-accent-gold" /> Hall of Institutional Pride
          </span>
          <H1 className="text-white mb-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Achievements & Institutional Milestones
          </H1>
          <Text className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            Celebrating international mathematics honors, athletic meets, environmental seminars, and scholarship excellence at Renaissance Academy.
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-6xl">
        <Breadcrumb items={[{ label: 'Achievements' }]} />

        {/* 4 Pillars Header Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 mb-12">
          
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
              <Medal className="h-5 w-5" />
            </div>
            <div className="text-lg font-extrabold text-brand-primary">International Medals</div>
            <div className="text-xs text-text-secondary mt-1">Silver & Bronze at 7th International Young Mathematician&apos;s Competition</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-sky flex items-center justify-center mb-3">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="text-lg font-extrabold text-brand-primary">Aaveg Sports Meet</div>
            <div className="text-xs text-text-secondary mt-1">Annual multi-disciplinary sports festival across Four House prefects</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-lg font-extrabold text-brand-primary">Unnati Scholarship</div>
            <div className="text-xs text-text-secondary mt-1">Up to 100% merit scholarships for outstanding academic performance</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div className="text-lg font-extrabold text-brand-primary">Snehalay Outreach</div>
            <div className="text-xs text-text-secondary mt-1">Student social empathy drives & shelter home support initiatives</div>
          </div>

        </div>

        {/* Major Achievements Grid */}
        <div className="space-y-6 mb-16">
          <div className="text-left mb-6">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              HONORS & RECOGNITION
            </span>
            <H2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mt-2">
              Key Historic Accolades
            </H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verifiedAchievements.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-2 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs hover:shadow-md transition-all">
                  <div className="bg-white p-6 sm:p-7 rounded-[calc(2rem-0.375rem)] text-left h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-brand-primary bg-neutral-100 px-2.5 py-0.5 rounded-md">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-extrabold text-brand-primary leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Verified Renaissance Academy Event Record</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </Container>
    </div>
  )
}
