import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ZoomableImage } from '@/components/ui/ZoomableImage'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Quote, Award, ShieldCheck, UserCheck } from 'lucide-react'

export const metadata = {
  title: { absolute: 'Meet Our Leadership | Renaissance Academy, Gorakhpur' },
  description: 'Meet the Chairman, Director, and Principal of Renaissance Academy, Gorakhpur and read their official vision messages.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/principal-message',
  },
}

export default function Page() {
  return (
    <div className="bg-surface-cream/30 min-h-screen pb-20">
      {/* 1. Compact Normal Blue Page Header */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-gold">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">
            Meet Our Leadership
          </H1>
          <Text className="text-blue-100 text-base md:text-lg">
            The visionaries, directors, and academic leaders guiding Renaissance Academy.
          </Text>
        </Container>
      </div>

      <Container className="mt-8 max-w-5xl">
        <Breadcrumb items={[{ label: 'Meet Our Leadership' }]} />

        <div className="space-y-12 mt-6">
          {/* ================================================= */}
          {/* 1. CHAIRMAN'S MESSAGE (TOP)                       */}
          {/* ================================================= */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-8 md:p-10 shadow-2xs">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-4/12 shrink-0 space-y-3">
                <ZoomableImage 
                  src="/chairman.jpg"
                  alt="Chairman Portrait" 
                  width={400}
                  height={500}
                  className="w-full h-auto shadow-sm rounded-xl overflow-hidden object-cover" 
                />
                <div className="bg-surface-cream p-4 rounded-xl border border-amber-200 text-center">
                  <h3 className="font-bold text-brand-primary text-base">Chairman</h3>
                  <p className="text-xs text-amber-900 font-semibold">Chairman, Renaissance Academy</p>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 bg-surface-yellow px-3 py-1 rounded-full w-max border border-amber-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-800" /> Chairman&apos;s Vision
                </div>

                <H2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                  Building a Legacy of Character & Knowledge
                </H2>

                <div className="bg-brand-50/70 p-5 rounded-xl border border-brand-100 relative">
                  <Quote className="h-7 w-7 text-brand-primary/20 absolute top-3 right-3" />
                  <p className="italic text-base md:text-lg text-brand-900 font-medium leading-relaxed">
                    &quot;Education is the most powerful foundation for building character, integrity, and a compassionate society.&quot;
                  </p>
                </div>

                <div className="prose prose-neutral text-neutral-700 space-y-3 text-sm md:text-base leading-relaxed">
                  <p>
                    Welcome to Renaissance Academy. From our inception, our mission has been to provide an educational ecosystem where academic rigor meets timeless moral values. We believe that true education extends beyond grades—it shapes young men and women of strong character, integrity, and social responsibility.
                  </p>
                  <p>
                    We remain committed to supporting our teachers, enhancing campus facilities, and ensuring every student who walks through our doors is empowered to fulfill their highest potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* 2. DIRECTOR'S MESSAGE (MIDDLE)                    */}
          {/* ================================================= */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-4/12 shrink-0 space-y-3">
                <ZoomableImage 
                  src="/director.png"
                  alt="Director Portrait" 
                  width={400}
                  height={500}
                  className="w-full h-auto shadow-sm rounded-xl overflow-hidden object-cover" 
                />
                <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-center">
                  <h3 className="font-bold text-brand-900 text-base">Director</h3>
                  <p className="text-xs text-brand-700 font-medium">Director, Renaissance Academy</p>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full w-max border border-brand-100">
                  <UserCheck className="h-3.5 w-3.5" /> Executive Leadership
                </div>

                <H2 className="text-2xl md:text-3xl font-bold text-brand-900">
                  Fostering Innovation & Holistic Excellence
                </H2>

                <div className="bg-brand-50/70 p-5 rounded-xl border border-brand-100 relative">
                  <Quote className="h-7 w-7 text-brand-primary/20 absolute top-3 right-3" />
                  <p className="italic text-base md:text-lg text-brand-900 font-medium leading-relaxed">
                    &quot;Our commitment is to create an environment where innovation, discipline, and curiosity thrive side by side.&quot;
                  </p>
                </div>

                <div className="prose prose-neutral text-neutral-700 space-y-3 text-sm md:text-base leading-relaxed">
                  <p>
                    At Renaissance Academy, we constantly upgrade our pedagogical methods, infrastructure, and co-curricular programs to keep pace with global educational standards. Our focus is on holistic development—nurturing intellectual curiosity alongside physical fitness, artistic expression, and analytical thinking.
                  </p>
                  <p>
                    We work closely with parents and educators to ensure a safe, inclusive, and stimulating learning space for every child.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* 3. PRINCIPAL'S MESSAGE (BOTTOM)                   */}
          {/* ================================================= */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-4/12 shrink-0 space-y-3">
                <ZoomableImage 
                  src="/principal.jpg"
                  alt="Principal Portrait (Mrs. Kanak Pandey)" 
                  width={400}
                  height={500}
                  className="w-full h-auto shadow-sm rounded-xl overflow-hidden object-cover" 
                />
                <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-center">
                  <h3 className="font-bold text-brand-900 text-base">Mrs. Kanak Pandey</h3>
                  <p className="text-xs text-brand-700 font-medium">Principal & Academic Leader</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">M.A., B.Ed.</p>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full w-max border border-brand-100">
                  <Award className="h-3.5 w-3.5" /> Academic Leadership
                </div>

                <H2 className="text-2xl md:text-3xl font-bold text-brand-900">
                  Guiding Students with Care & Excellence
                </H2>

                <div className="bg-brand-50/70 p-5 rounded-xl border border-brand-100 relative">
                  <Quote className="h-7 w-7 text-brand-primary/20 absolute top-3 right-3" />
                  <p className="italic text-base md:text-lg text-brand-900 font-medium leading-relaxed">
                    &quot;Education is not the filling of a pail, but the lighting of a fire.&quot;
                  </p>
                  <span className="block text-xs font-semibold text-brand-700 uppercase tracking-wider mt-2">
                    – W.B. Yeats
                  </span>
                </div>

                <div className="prose prose-neutral text-neutral-700 space-y-3 text-sm md:text-base leading-relaxed">
                  <p>
                    At Renaissance Academy, we strive to ignite curiosity and confidence in our students, guiding them to grow into thoughtful, responsible, and knowledgeable young individuals.
                  </p>
                  <p>
                    Our students participate in joyful learning and co-curricular activities throughout the year. Their enthusiasm, creativity, academic performance, and personal growth bring great pride to our school community.
                  </p>
                  <p>
                    We invite parents to partner with us in nurturing the unique talents of every child in a safe, encouraging, and value-driven environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
