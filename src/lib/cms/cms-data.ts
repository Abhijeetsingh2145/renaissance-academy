import { CMSFAQ, CMSTimelineItem, CMSHeroContent } from './types'
import { defaultFAQs } from '@/components/functional/FAQSection'
import { schoolMilestones } from '@/components/functional/SchoolTimeline'

/**
 * CMS Data Layer Abstraction
 * Currently provides fallback data from local verified sources.
 * To integrate Sanity CMS or Payload CMS, replace these loaders with Sanity client or Payload API calls.
 */

export async function getCMSHero(): Promise<CMSHeroContent> {
  return {
    headline: 'Nurturing Young Minds for a Brighter Future',
    subheadline: 'Providing quality education that combines traditional values with modern learning methods for your child’s complete growth and success.',
    cta_text: 'Enquire Now',
    cta_link: '/admissions',
  }
}

export async function getCMSFAQs(): Promise<CMSFAQ[]> {
  return defaultFAQs
}

export async function getCMSTimeline(): Promise<CMSTimelineItem[]> {
  return schoolMilestones
}
