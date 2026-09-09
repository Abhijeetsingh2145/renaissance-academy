import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Target, Compass, Sparkles, HeartHandshake, BookOpen, ShieldCheck, Smile, Users } from 'lucide-react'

export const metadata = {
  title: { absolute: 'Vision & Mission | Renaissance Academy, Gorakhpur' },
  description: 'Explore the vision, mission, motto, and educational philosophy of Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/vision-mission',
  },
}

export default function Page() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Intellectual Empowerment',
      desc: 'Concept-driven CBSE learning that fosters analytical thinking, curiosity, and strong foundational knowledge in all subjects.',
    },
    {
      icon: ShieldCheck,
      title: 'Character & Moral Values',
      desc: 'Instilling honesty, discipline, empathy, and respect through daily school routines, assemblies, and personal guidance.',
    },
    {
      icon: Smile,
      title: 'Creative & Physical Growth',
      desc: 'Encouraging sports, creative arts, and co-curricular activities that help students develop confidence and leadership skills.',
    },
    {
      icon: Users,
      title: 'Social & Environmental Care',
      desc: 'Building civic awareness, teamwork, and respect for nature to shape responsible young citizens for tomorrow.',
    },
  ]

  return (
    <div className="bg-surface-neutral min-h-screen pb-20">
      {/* 1. Compact Normal Blue Page Header */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">
            Vision & Mission
          </H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Our institutional philosophy, guiding motto, and core educational pillars.
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-5xl">
        <Breadcrumb items={[{ label: 'Vision & Mission' }]} />

        <div className="space-y-10 mt-6">
          {/* 2. Vision, Mission & Motto 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <Card variant="surface-sky" className="p-6 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-4 border border-blue-200 shadow-xs">
                  <Target className="h-5 w-5 text-brand-sky" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Our Vision</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To nurture confident, knowledgeable, and responsible young citizens who possess strong moral character and are well-prepared to excel in a rapidly changing world.
                </p>
              </div>
            </Card>

            {/* Mission Card */}
            <Card variant="surface-cream" className="p-6 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 bg-white text-amber-700 rounded-xl flex items-center justify-center mb-4 border border-amber-200 shadow-xs">
                  <Compass className="h-5 w-5 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Our Mission</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To cultivate a joyful academic environment combining traditional Indian values with modern teaching tools, individual guidance, and comprehensive skill development.
                </p>
              </div>
            </Card>

            {/* Motto Card — Guiding Sanskrit Motto */}
            <Card variant="surface-yellow" className="p-6 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 bg-white text-amber-800 rounded-xl flex items-center justify-center mb-4 border border-amber-300 shadow-xs">
                  <Sparkles className="h-5 w-5 text-amber-800" />
                </div>
                <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">
                  Institutional Motto
                </span>
                <h3 className="text-lg font-extrabold text-brand-primary mb-2">
                  ll सा विद्या या विमुक्तये ll
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  &quot;That is knowledge which liberates the mind and fosters true enlightenment.&quot;
                </p>
              </div>
            </Card>
          </div>

          {/* 3. Core Educational Pillars */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100 uppercase tracking-wider">
                Educational Philosophy
              </span>
              <H2 className="text-2xl md:text-3xl font-bold text-brand-900 mt-3 mb-2">
                Pillars of Growth at Renaissance
              </H2>
              <Text className="text-neutral-600 text-sm md:text-base">
                Our curriculum and school life are built around four key pillars that support balanced child development.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div key={idx} className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white text-brand-primary rounded-lg shadow-sm border border-neutral-200 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 text-base mb-1">{pillar.title}</h4>
                      <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 4. Institutional Commitment */}
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Promise to Every Student & Parent</h3>
                <p className="text-brand-100 text-sm max-w-2xl">
                  We maintain small teacher-student ratios, transparent communication with families, and an encouraging environment where every child feels valued, safe, and inspired to learn.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 text-xs font-semibold text-white">
                <HeartHandshake className="h-4 w-4 text-amber-300" /> Dedicated Educational Care
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
