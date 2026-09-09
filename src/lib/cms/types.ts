export interface CMSNotice {
  id: string
  title: string
  content: string
  publish_date: string
  expiry_date?: string
  category: 'Academic' | 'Administrative' | 'Events' | 'Exam' | 'General'
  file_url?: string
}

export interface CMSEvent {
  id: string
  title: string
  description: string
  date: string
  time?: string
  location?: string
  image_url?: string
  category: 'Sports' | 'Cultural' | 'Academic' | 'Celebration'
}

export interface CMSFAQ {
  id: string
  category: 'Admissions' | 'Academics' | 'Fees' | 'Facilities' | 'General'
  question: string
  answer: string
}

export interface CMSTimelineItem {
  year: string
  title: string
  description: string
  category: string
}

export interface CMSLeadershipMessage {
  role: 'Chairman' | 'Director' | 'Principal'
  name: string
  title: string
  message: string
  quote?: string
  photo_url?: string
}

export interface CMSHeroContent {
  headline: string
  subheadline: string
  cta_text: string
  cta_link: string
  background_image_url?: string
}
