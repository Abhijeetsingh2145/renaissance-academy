import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renaissanceacademy.org.in'

  const routes = [
    '',
    '/about',
    '/academics',
    '/campus',
    '/activities',
    '/achievements',
    '/events',
    '/gallery',
    '/admissions',
    '/fees',
    '/policies',
    '/cbse-disclosure',
    '/careers',
    '/contact',
    '/principal-message',
    '/vision-mission',
    '/faculty',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/events' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/admissions' ? 0.9 : 0.8,
  }))
}
