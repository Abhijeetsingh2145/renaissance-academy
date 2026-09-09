import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, H2, Text } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar, Bell, Newspaper } from 'lucide-react'

import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata = {
  title: { absolute: 'Events & News | Renaissance Academy, Gorakhpur' },
  description: 'Stay updated with school events, academic calendars, and official notices from Renaissance Academy, Gorakhpur.',
  alternates: {
    canonical: 'https://renaissanceacademy.org.in/events',
  },
}

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-primary text-white py-10 md:py-12 border-b-4 border-accent-coral">
        <Container>
          <H1 className="text-white mb-2 text-3xl md:text-4xl font-bold tracking-tight">Events & School News</H1>
          <Text className="text-blue-100 text-base md:text-lg">
            Stay informed about campus activities, examination schedules, holiday circulars, and official updates.
          </Text>
        </Container>
      </div>

      <Container className="mt-8">
        <Breadcrumb items={[{ label: 'Events & News' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          
          {/* Left Column: Events & Updates Overview */}
          <div className="lg:col-span-7 space-y-6">
            <Card variant="surface-coral" className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white text-rose-600 p-2.5 rounded-xl border border-rose-200 shadow-xs">
                  <Calendar className="h-6 w-6 text-rose-500" />
                </div>
                <H2 className="text-xl text-text-primary">Academic Calendar & Cultural Celebrations</H2>
              </div>
              <Text className="text-text-secondary leading-relaxed mb-6">
                Renaissance Academy organizes academic sessions around structured terms, co-curricular celebrations, examination periods, and parent-teacher interactions.
              </Text>

              <div className="bg-white border border-rose-200/60 rounded-xl p-5 space-y-3">
                <div className="flex items-start space-x-3">
                  <Newspaper className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Official School Bulletins</h4>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Timely notices regarding examinations, fee schedules, and academic dates are issued through the digital Notice Board.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-neutral-200 shadow-sm bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-50 text-brand-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">Instant Notice Access</h3>
                <p className="text-xs text-neutral-600 max-w-md mx-auto">
                  Click the floating Notice Board button at any time to view live published announcements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Embedded Live Notice Board Drawer Trigger */}
          <div className="lg:col-span-5">
            <div className="bg-brand-900 text-white p-8 rounded-xl shadow-md border border-brand-800">
              <h3 className="text-xl font-bold mb-3">Official Announcements</h3>
              <p className="text-xs text-brand-100 leading-relaxed mb-6">
                All official notices created by school administration are published directly to the public Notice Board.
              </p>
              
              <div className="bg-brand-800/80 rounded-lg p-4 border border-brand-700">
                <div className="flex items-center space-x-2 text-xs font-semibold text-brand-200 uppercase tracking-wider mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Live Notice Sync</span>
                </div>
                <p className="text-xs text-brand-100">
                  Published notices remain active until their designated expiry date.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
