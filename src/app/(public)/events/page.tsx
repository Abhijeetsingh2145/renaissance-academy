import React from 'react'
import { Container } from '@/components/layout/Container'
import { H1, Text } from '@/components/ui/Typography'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { EventsNoticeList } from '@/components/functional/EventsNoticeList'

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
            {/* Live Published Notices Feed */}
            <EventsNoticeList />
          </div>

          {/* Right Column: Embedded Live Notice Board Drawer Trigger */}
          <div className="lg:col-span-5">
            <div className="bg-brand-900 text-white p-8 rounded-xl shadow-md border border-brand-800">
              <h3 className="text-xl font-bold mb-3">Official Announcements</h3>
              <p className="text-xs text-brand-100 leading-relaxed mb-6">
                All official notices created by school administration are published directly to the public Notice Board and displayed here in real time.
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
