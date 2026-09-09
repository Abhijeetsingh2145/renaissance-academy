import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { BookOpen, Users, Award, Heart, Sparkles, GraduationCap, Trophy } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Faculty & Pedagogy | Renaissance Academy, Gorakhpur' },
  description: 'Learn about our educational approach, academic mentorship, and dedicated teaching philosophy at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/faculty',
  },
}

export default function FacultyPage() {
  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* Standardized Header Banner */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Our Teachers & Mentors</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Dedicated to caring guidance, good character, and personal attention for every student.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Faculty' }]} />

        {/* Teaching Philosophy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-16">
          <Card variant="surface-sky" className="p-6">
            <div className="bg-white text-brand-sky p-3 rounded-xl w-fit mb-4 border border-blue-200 shadow-xs">
              <BookOpen className="h-6 w-6 text-brand-sky" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Thoughtful Pedagogy</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Structuring lessons to encourage active questioning, comprehension, and conceptual mastery.</p>
          </Card>

          <Card variant="surface-mint" className="p-6">
            <div className="bg-white text-emerald-600 p-3 rounded-xl w-fit mb-4 border border-emerald-200 shadow-xs">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Student Engagement</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Maintaining an interactive classroom atmosphere where every student feels encouraged to participate.</p>
          </Card>

          <Card variant="surface-yellow" className="p-6">
            <div className="bg-white text-amber-700 p-3 rounded-xl w-fit mb-4 border border-amber-300 shadow-xs">
              <Award className="h-6 w-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Continuous Training</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Facilitating regular CBSE teacher development workshops, modern digital tools, and peer collaboration.</p>
          </Card>

          <Card variant="surface-cream" className="p-6">
            <div className="bg-white text-amber-800 p-3 rounded-xl w-fit mb-4 border border-amber-200 shadow-xs">
              <Heart className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="font-bold text-text-primary text-lg mb-2">Caring Mentorship</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Fostering emotional growth, discipline, mutual respect, and ethical values alongside academic studies.</p>
          </Card>
        </div>

        {/* Educational Mentorship Framework */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <H2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">Our Academic Mentorship Framework</H2>
            <Text className="text-text-secondary text-sm md:text-base">
              Dedicated teaching teams guiding students through foundational learning, subject clarity, and holistic co-curricular growth.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="surface-sky" className="p-6 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-sky flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
                  <Sparkles className="h-6 w-6 text-brand-sky" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-brand-primary text-lg">Foundational Stage (Nursery – Class V)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-brand-sky px-2.5 py-0.5 rounded-full border border-blue-200 shrink-0">
                      Early Years
                    </span>
                  </div>
                  <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Helping young children build core literacy, numeracy, creative expression, and curiosity in a caring, encouraging environment.
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="surface-yellow" className="p-6 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-800 flex items-center justify-center shrink-0 border border-amber-300 shadow-xs">
                  <BookOpen className="h-6 w-6 text-amber-800" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-brand-primary text-lg">Middle Academic Stage (Class VI – VIII)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300 shrink-0">
                      Middle Years
                    </span>
                  </div>
                  <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Developing logical thinking, scientific inquiry, subject clarity, and teamwork through hands-on activities and projects.
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="surface-cream" className="p-6 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-900 flex items-center justify-center shrink-0 border border-amber-200 shadow-xs">
                  <GraduationCap className="h-6 w-6 text-amber-900" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-brand-primary text-lg">Senior Secondary Stage (Class IX – XII)</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200 shrink-0">
                      Senior Secondary
                    </span>
                  </div>
                  <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Providing thorough CBSE syllabus coverage, practical laboratory training, regular doubt sessions, and career guidance.
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="surface-mint" className="p-6 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-xs">
                  <Trophy className="h-6 w-6 text-emerald-700" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-brand-primary text-lg">Co-Curricular & Sports Mentorship</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                      Holistic Growth
                    </span>
                  </div>
                  <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Guiding physical fitness, sportsmanship, performing arts, public speaking, and overall personality development.
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
