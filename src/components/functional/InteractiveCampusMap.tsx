'use client'

import React, { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { H2, Text } from '@/components/ui/Typography'
import { MapPin, Info, ExternalLink, X, Monitor, BookOpen, Trophy, Building2, FlaskConical, CheckCircle2 } from 'lucide-react'
import { FadeUp } from '@/components/ui/Motion'

export interface CampusSpot {
  id: string
  name: string
  category: 'Academic' | 'Laboratory' | 'Library' | 'Sports' | 'Admin'
  icon: React.ElementType
  coords: { x: number; y: number } // percentages
  description: string
  details: string[]
}

export const campusSpots: CampusSpot[] = [
  {
    id: 'spot-1',
    name: 'Smart Classrooms Wing',
    category: 'Academic',
    icon: Building2,
    coords: { x: 30, y: 35 },
    description: '22 spacious (500 sq.ft) classrooms equipped with interactive audio-visual digital learning tools.',
    details: ['Optimal 1:16 teacher-student ratio', 'Spacious & well-ventilated rooms', 'Digital smart boards for interactive learning'],
  },
  {
    id: 'spot-2',
    name: 'Science Laboratories',
    category: 'Laboratory',
    icon: FlaskConical,
    coords: { x: 65, y: 28 },
    description: 'Separate, fully equipped Physics (1000 sq.ft), Chemistry, and Biology laboratories for practical experiments.',
    details: ['Safety-compliant apparatus & chemicals', 'Supervised lab practical sessions', 'Individual experiment workstations'],
  },
  {
    id: 'spot-3',
    name: 'IT & Computer Center',
    category: 'Laboratory',
    icon: Monitor,
    coords: { x: 45, y: 55 },
    description: 'Modern computer lab equipped with high-speed internet, coding tools, and digital learning software.',
    details: ['High-speed internet Connectivity', 'Individual workstations for students', 'Guided computer literacy curriculum'],
  },
  {
    id: 'spot-4',
    name: 'Knowledge Library',
    category: 'Library',
    icon: BookOpen,
    coords: { x: 25, y: 70 },
    description: 'Well-stocked library featuring thousands of books, reference guides, children’s literature, and educational journals.',
    details: ['Quiet reading & study atmosphere', 'Age-appropriate storybooks & encyclopedias', 'Regular library periods scheduled'],
  },
  {
    id: 'spot-5',
    name: 'Sports Ground & Playground',
    category: 'Sports',
    icon: Trophy,
    coords: { x: 80, y: 65 },
    description: 'Spacious outdoors sports field for athletics, team games, physical fitness, and daily morning assemblies.',
    details: ['Football & cricket play area', 'Annual sports meet venue', 'Trained physical education instructors'],
  },
  {
    id: 'spot-6',
    name: 'Administrative Block & Reception',
    category: 'Admin',
    icon: MapPin,
    coords: { x: 50, y: 85 },
    description: 'School main office, principal desk, visitor reception, and admissions enquiry help desk.',
    details: ['Admission enquiry assistance', 'Fee payment & document verification', '24/7 campus security monitoring desk'],
  },
]

export function InteractiveCampusMap() {
  const [selectedSpot, setSelectedSpot] = useState<CampusSpot | null>(null)

  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        <FadeUp className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-brand-100">
            <MapPin className="h-3.5 w-3.5 text-brand-primary" /> 3-Acre Nausarh Campus
          </span>
          <H2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-3">
            Interactive Campus Map
          </H2>
          <Text className="text-neutral-600 text-base md:text-lg">
            Explore our state-of-the-art facilities in Nausarh, Gorakhpur. Click on any facility marker to view details.
          </Text>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Map Canvas Container */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-neutral-200 p-4 md:p-6 shadow-sm relative overflow-hidden">
            {/* Visual Campus Blueprint Graphic */}
            <div className="relative aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 border border-brand-800 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Campus Boundary Outline */}
              <div className="absolute inset-6 border-2 border-dashed border-brand-500/30 rounded-2xl pointer-events-none" />
              <span className="absolute top-8 left-8 text-[10px] font-bold text-brand-300 tracking-widest uppercase bg-brand-900/80 px-2 py-0.5 rounded border border-brand-700">
                RENAISSANCE ACADEMY CAMPUS (3 ACRES)
              </span>

              {/* Interactive Spot Pins */}
              {campusSpots.map((spot) => {
                const Icon = spot.icon
                const isSelected = selectedSpot?.id === spot.id

                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSpot(spot)}
                    style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none ${
                      isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                    }`}
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      )}
                      <span
                        className={`relative inline-flex rounded-full p-2 text-white shadow-lg transition-colors ${
                          isSelected
                            ? 'bg-amber-500 ring-4 ring-amber-300/40'
                            : 'bg-brand-primary group-hover:bg-amber-500 border border-white/30'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    </span>
                    <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                      {spot.name}
                    </span>
                  </button>
                )
              })}

              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.app.goo.gl/ar62HEUrWTtHgtnQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-brand-900 text-xs font-bold px-3 py-2 rounded-lg shadow-md transition-all border border-neutral-200"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5 text-brand-primary" />
                </a>
              </div>
            </div>

            {/* Quick Helper Legend */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 border-t border-neutral-100 pt-3">
              <span className="flex items-center gap-1.5">
                <Info className="h-4 w-4 text-brand-primary" /> Click any pin to inspect facility details
              </span>
              <span className="font-medium text-neutral-700">Baijnathpur, Balapar Road, Gorakhpur - 273007</span>
            </div>
          </div>

          {/* Facility Details Panel / Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm min-h-[380px] flex flex-col justify-between">
            {selectedSpot ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <span className="inline-block bg-brand-50 text-brand-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {selectedSpot.category}
                  </span>
                  <button
                    onClick={() => setSelectedSpot(null)}
                    className="text-neutral-400 hover:text-neutral-700 p-1 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <selectedSpot.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-lg">{selectedSpot.name}</h3>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">{selectedSpot.description}</p>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Key Highlights:</h4>
                  {selectedSpot.details.map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs text-neutral-700 gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center my-auto py-12 text-center text-neutral-400 space-y-3">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400">
                  <MapPin className="h-6 w-6 text-brand-primary/40" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-700 text-sm">No Facility Selected</p>
                  <p className="text-xs text-neutral-400 max-w-xs mt-1">
                    Click on any marker pin on the campus blueprint map to view facility details.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-neutral-100">
              <a
                href="/admissions"
                className="block text-center w-full bg-brand-primary hover:bg-brand-800 text-white font-medium text-xs py-3 rounded-xl transition-all shadow-sm"
              >
                Schedule a Physical Campus Tour
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
