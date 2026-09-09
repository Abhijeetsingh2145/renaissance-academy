import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { H1, H2, H3, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BookOpen, Sparkles, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: { absolute: 'Academics | Renaissance Academy, Gorakhpur' },
  description: 'Explore the academic curriculum, teaching methodology, and educational framework at Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/academics',
  },
}

export default function AcademicsPage() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'CBSE Curriculum',
      description: 'Structured academic learning following CBSE guidelines, building strong fundamentals in Science, Mathematics, Languages, and Social Sciences.',
      variant: 'surface-sky' as const,
    },
    {
      icon: Sparkles,
      title: 'Practical Learning',
      description: 'Hands-on projects, activities, and visual aids that help children understand concepts easily instead of just memorizing text.',
      variant: 'surface-yellow' as const,
    },
    {
      icon: Users,
      title: 'Personal Guidance',
      description: 'Small class sizes ensuring every student gets personal attention, encouraging questions, and building confidence in learning.',
      variant: 'surface-cream' as const,
    },
    {
      icon: Award,
      title: 'Continuous Evaluation',
      description: 'Regular progress tracking, constructive feedback, and gentle guidance to prepare students smoothly for board examinations.',
      variant: 'surface-mint' as const,
    },
  ]

  const wings = [
    {
      title: 'Primary Wing',
      grade: 'Nursery to Class V',
      description: 'Focusing on foundational literacy, numeracy, creative expression, and building a love for learning in a caring environment.',
      points: ['Phonics & Language Building', 'Basic Math & Logical Puzzles', 'Creative Arts & Music', 'Activity-Based Discovery'],
      variant: 'surface-sky' as const,
    },
    {
      title: 'Middle Wing',
      grade: 'Class VI to VIII',
      description: 'Developing deeper subject understanding, scientific inquiry, critical thinking, and collaborative group projects.',
      points: ['Science & Computer Labs', 'Mathematics Problem Solving', 'Social & Environmental Studies', 'Co-curricular Competitions'],
      variant: 'surface-mint' as const,
    },
    {
      title: 'Senior Wing',
      grade: 'Class IX & X',
      description: 'Rigorous CBSE board preparation, concept clarity, regular practice tests, and individual academic mentorship.',
      points: ['CBSE Board Syllabus Coverage', 'Lab Practical Training', 'Regular Assessment & Doubts', 'Career Guidance & Counseling'],
      variant: 'surface-cream' as const,
    },
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* 1. Standardized Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">
            Academics & Curriculum
          </H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Building strong fundamentals, practical understanding, and lifelong confidence for every student.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Academics' }]} />

        {/* 2. Academic Approach & Pillars */}
        <div className="mt-6 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 bg-surface-sky text-brand-sky text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-blue-200">
              CBSE Educational Framework
            </span>
            <H2 className="text-brand-primary mb-3 text-3xl font-bold">Our Learning Framework</H2>
            <Text className="text-text-secondary text-base md:text-lg">
              We combine structured CBSE academics with practical, child-centered teaching methods to ensure every student excels naturally.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon
              return (
                <Card key={idx} variant={item.variant} className="p-6 text-center hover:-translate-y-1">
                  <div className="mx-auto w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-neutral-200 shadow-xs">
                    <IconComp className="h-6 w-6 text-brand-primary" />
                  </div>
                  <H3 className="text-lg font-bold text-text-primary mb-2">{item.title}</H3>
                  <Text className="text-xs md:text-sm text-text-secondary leading-relaxed">{item.description}</Text>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 3. Academic Wings Breakdown */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <H2 className="text-brand-primary mb-3 text-3xl font-bold">Academic Wings</H2>
            <Text className="text-text-secondary text-base md:text-lg">
              Tailored curriculum structures designed for every stage of your child&apos;s educational journey.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {wings.map((wing, idx) => (
              <Card key={idx} variant={wing.variant} className="p-8 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <span className="inline-block bg-white text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-neutral-200 shadow-2xs">
                    {wing.grade}
                  </span>
                  <H3 className="text-2xl font-bold text-brand-primary mb-3">{wing.title}</H3>
                  <Text className="text-sm text-text-secondary leading-relaxed mb-6">{wing.description}</Text>
                  
                  <div className="space-y-2.5 border-t border-neutral-200/60 pt-4 mb-6">
                    {wing.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center text-xs font-medium text-text-primary gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/admissions">
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold bg-white hover:bg-brand-primary hover:text-white">
                    Apply for {wing.title} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* 4. Classroom & Academic Pedagogy Showcase */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-brand-sky uppercase tracking-wider bg-surface-sky px-3 py-1 rounded-full border border-blue-200">
              Interactive Learning Environment
            </span>
            <H2 className="text-2xl md:text-3xl font-bold text-brand-primary">Smart Digital Learning & Pedagogy</H2>
            <Text className="text-text-secondary leading-relaxed text-sm md:text-base">
              At Renaissance Academy, classroom teaching goes beyond traditional lecture methods. Every classroom is integrated with smart audio-visual teaching aids that make complex scientific and mathematical concepts easy to visualize and retain.
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-surface-neutral p-3 rounded-xl border border-neutral-200/60">
                <CheckCircle2 className="h-4 w-4 text-brand-sky shrink-0" />
                <span className="text-xs font-semibold text-text-primary">Smart Board Presentations</span>
              </div>
              <div className="flex items-center gap-2.5 bg-surface-neutral p-3 rounded-xl border border-neutral-200/60">
                <CheckCircle2 className="h-4 w-4 text-brand-sky shrink-0" />
                <span className="text-xs font-semibold text-text-primary">Concept-Based Learning</span>
              </div>
              <div className="flex items-center gap-2.5 bg-surface-neutral p-3 rounded-xl border border-neutral-200/60">
                <CheckCircle2 className="h-4 w-4 text-brand-sky shrink-0" />
                <span className="text-xs font-semibold text-text-primary">Regular Doubt Clearing</span>
              </div>
              <div className="flex items-center gap-2.5 bg-surface-neutral p-3 rounded-xl border border-neutral-200/60">
                <CheckCircle2 className="h-4 w-4 text-brand-sky shrink-0" />
                <span className="text-xs font-semibold text-text-primary">Continuous Progress Reports</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/admissions">
                <Button variant="accent" size="md">
                  Enquire for Admissions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <Image
              src="/classroom.jpg"
              alt="Smart Classrooms at Renaissance Academy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
