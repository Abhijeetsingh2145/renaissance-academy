import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { ZoomableImage } from '@/components/ui/ZoomableImage'
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Laptop, 
  Award, 
  Users,
  Building2
} from 'lucide-react'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Motion'
import { EducationalValuesInteractive } from '@/components/functional/EducationalValuesInteractive'
import { CounsellingSection } from '@/components/functional/CounsellingSection'
import { FAQSection } from '@/components/functional/FAQSection'

export const metadata = {
  title: { absolute: 'Renaissance Academy | Gorakhpur' },
  description: 'Renaissance Academy is a premier co-educational English-medium K-12 school in Baijnathpur, Balapar Road, Gorakhpur, integrating academic rigor with personal guidance & leadership.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO — Royal Blue + Real Photo + Warm Gold Accent */}
      <section className="relative w-full h-[600px] bg-brand-primary flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Renaissance Academy Campus, Gorakhpur"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-primary/60 to-transparent" />
        </div>
        <Container className="relative z-10">
          <FadeUp className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-1.5 bg-accent-gold/20 text-accent-gold text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-accent-gold/40 backdrop-blur-xs shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent-gold" /> Nursery to Class XII CBSE English-Medium School
            </span>
            <H1 className="text-white mb-6 leading-tight">
              Nurturing Young Minds & Building Future Leaders
            </H1>
            <Text className="text-neutral-200 text-lg md:text-xl mb-8 leading-relaxed">
              Providing quality education from Nursery to Class 12th that combines academic excellence with personality development, confidence, leadership, and dedicated student counselling.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-md">
                  Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/60 hover:bg-white hover:text-brand-primary">
                  Discover Renaissance
                </Button>
              </Link>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 2. WELCOME / INTRODUCTION — Doppelrand Enclosure + Editorial Quote */}
      <section className="py-24 bg-surface-cream border-b border-amber-200/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <FadeUp className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-amber-300/80">
                <Building2 className="h-3.5 w-3.5 text-amber-800" /> About Our Institution
              </span>
              <H2 className="mb-6 text-brand-primary text-3xl sm:text-4xl font-extrabold tracking-tight">
                Welcome to Renaissance Academy
              </H2>
              <Text className="mb-5 leading-relaxed text-base sm:text-lg text-text-primary">
                Renaissance Academy is an English-medium CBSE school located in Baijnathpur, Balapar Road, Gorakhpur, UP, educating students from Nursery all the way to Class 12th.
              </Text>
              <Text className="mb-6 leading-relaxed text-base sm:text-lg text-text-primary">
                We believe education is more than textbooks. At Renaissance Academy, we focus on building confidence, strong character, public speaking skills, and leadership qualities so every child grows into a well-rounded personality.
              </Text>

              {/* Doppelrand Quote Card */}
              <div className="p-1.5 rounded-2xl bg-amber-200/60 border border-amber-300/80 shadow-2xs">
                <figure className="bg-amber-50/90 p-5 rounded-[calc(1rem-0.125rem)] border border-amber-200/90">
                  <blockquote className="text-base sm:text-lg font-bold text-brand-primary italic">
                    &quot;Education is not preparation for life; education is life itself.&quot;
                  </blockquote>
                  <figcaption className="text-xs font-semibold text-amber-900 mt-2">
                    — Institutional Philosophy, Renaissance Academy Gorakhpur
                  </figcaption>
                </figure>
              </div>
            </FadeUp>

            {/* Double-Bezel Enclosed Photo Container */}
            <FadeUp delay={0.2} className="lg:col-span-6">
              <div className="p-3 rounded-[2.5rem] bg-neutral-200/60 border border-neutral-300/70 shadow-md">
                <ZoomableImage
                  src="/welcome.jpg"
                  alt="Welcome to Renaissance Academy"
                  caption="Welcome to Renaissance Academy — Campus Frontage & Atmosphere"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-[calc(2.5rem-0.75rem)]"
                  containerClassName="aspect-[4/3] w-full rounded-[calc(2.5rem-0.75rem)] border border-neutral-200/80"
                />
              </div>
            </FadeUp>

          </div>
        </Container>
      </section>

      {/* 3. DISTINCTIVE PILLARS — Interactive Cards Showcase */}
      <EducationalValuesInteractive />

      {/* 4. INSTITUTIONAL EXCELLENCE HIGHLIGHTS — Double-Bezel Squircle Cards */}
      <section className="py-16 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1: K-12 CBSE */}
            <div className="p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md group hover:bg-white/15 transition-all">
              <div className="p-4 rounded-[calc(1rem-0.125rem)] bg-brand-deep/80 border border-white/10 flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/40 group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-accent-gold">Nursery – 12th</div>
                  <div className="text-xs text-neutral-300 font-medium">K-12 CBSE Curriculum</div>
                </div>
              </div>
            </div>

            {/* Box 2: Smart Classrooms */}
            <div className="p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md group hover:bg-white/15 transition-all">
              <div className="p-4 rounded-[calc(1rem-0.125rem)] bg-brand-deep/80 border border-white/10 flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-sky/20 text-brand-sky flex items-center justify-center shrink-0 border border-brand-sky/40 group-hover:scale-105 transition-transform">
                  <Laptop className="h-6 w-6 text-brand-sky" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">Smart Classrooms</div>
                  <div className="text-xs text-neutral-300 font-medium">Interactive Audio-Visual</div>
                </div>
              </div>
            </div>

            {/* Box 3: 100% Pass Result */}
            <div className="p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md group hover:bg-white/15 transition-all">
              <div className="p-4 rounded-[calc(1rem-0.125rem)] bg-brand-deep/80 border border-white/10 flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/40 group-hover:scale-105 transition-transform">
                  <Award className="h-6 w-6 text-emerald-300" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-accent-gold">100% Pass Result</div>
                  <div className="text-xs text-neutral-300 font-medium">Board Exam Excellence</div>
                </div>
              </div>
            </div>

            {/* Box 4: 1:16 Ratio */}
            <div className="p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md group hover:bg-white/15 transition-all">
              <div className="p-4 rounded-[calc(1rem-0.125rem)] bg-brand-deep/80 border border-white/10 flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-rose-400/20 text-rose-300 flex items-center justify-center shrink-0 border border-rose-400/40 group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6 text-rose-300" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">1:16 Ratio</div>
                  <div className="text-xs text-neutral-300 font-medium">Personalized Guidance</div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. SIGNATURE ADVANTAGE — IN-HOUSE STUDENT COUNSELLING & PERSONALITY DEVELOPMENT */}
      <CounsellingSection />

      {/* 6. CAMPUS VISUAL GALLERY */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 border border-neutral-200">
                <Building2 className="h-3.5 w-3.5 text-neutral-600" /> Campus Infrastructure
              </span>
              <H2 className="text-brand-primary text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Life at Renaissance</H2>
              <Text className="text-neutral-600">An environment designed for peaceful and concentrated study.</Text>
            </FadeUp>
            <Link href="/campus" className="inline-flex items-center gap-2 text-sm font-bold text-brand-sky hover:text-brand-primary transition-colors bg-surface-sky px-4 py-2 rounded-full border border-blue-200">
              <span>View All Facilities</span> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="p-2 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs group">
                <ZoomableImage
                  src="/classroom.jpg"
                  alt="Smart Classrooms - Renaissance Academy"
                  caption="Smart Classrooms — Interactive digital learning environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  containerClassName="aspect-[4/3] rounded-[calc(2rem-0.5rem)] border border-neutral-200/80"
                />
                <div className="mt-3 px-3 pb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-sky text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Smart Learning
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">Smart Classrooms</h3>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-2 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs group">
                <ZoomableImage
                  src="/science-lab.jpg"
                  alt="Science Laboratories - Renaissance Academy"
                  caption="Science Laboratories — Hands-on practical experiments & research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  containerClassName="aspect-[4/3] rounded-[calc(2rem-0.5rem)] border border-neutral-200/80"
                />
                <div className="mt-3 px-3 pb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-700 text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Practical Labs
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">Science Laboratories</h3>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-2 rounded-[2rem] bg-neutral-200/50 border border-neutral-300/60 shadow-2xs group">
                <ZoomableImage
                  src="/sports-ground.jpg"
                  alt="Sports Ground - Renaissance Academy"
                  caption="Sports Ground — Outdoor sports, athletics & physical training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  containerClassName="aspect-[4/3] rounded-[calc(2rem-0.5rem)] border border-neutral-200/80"
                />
                <div className="mt-3 px-3 pb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-700 text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Physical Health
                  </span>
                  <h3 className="text-base font-bold text-brand-primary">Sports Ground</h3>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* 7. FAQ SECTION */}
      <FAQSection />
      
      {/* 8. FINAL ADMISSION CTA — Floating Doppelrand Glass Card */}
      <section className="py-24 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 max-w-4xl">
          <div className="p-3 rounded-[3rem] bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="p-8 sm:p-12 rounded-[calc(3rem-0.75rem)] bg-brand-primary border border-white/10 text-center">
              <FadeUp>
                <span className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-accent-gold/30">
                  <Sparkles className="h-3.5 w-3.5 text-accent-gold" /> Admissions Open 2025–26 (Nursery to Class XII)
                </span>
                
                <H2 className="text-white mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Become a Part of Our Dynamic Community
                </H2>
                
                <Text className="text-base sm:text-lg mb-8 text-neutral-200 leading-relaxed max-w-2xl mx-auto">
                  Admissions for Nursery to Class 12th for the upcoming academic year are now open. Reach out to us for queries or begin your application today.
                </Text>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/admissions" className="group w-full sm:w-auto">
                    <div className="inline-flex items-center justify-between gap-4 bg-accent-gold text-brand-deep text-base font-extrabold px-8 py-4 rounded-full shadow-lg hover:bg-amber-300 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto">
                      <span>Start Admission Process</span>
                      <div className="w-8 h-8 rounded-full bg-brand-deep/15 text-brand-deep flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>

                  <Link href="/contact" className="w-full sm:w-auto">
                    <div className="inline-flex items-center justify-center gap-2 bg-white/10 text-white text-base font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto">
                      <span>Contact Admissions Desk</span>
                    </div>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>
      
    </div>
  )
}



