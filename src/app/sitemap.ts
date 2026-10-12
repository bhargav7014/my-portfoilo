import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhargavhj.iotkit.in'
  const currentDate = new Date()

  // Defined project routes
  const routes: Array<{
    path: string
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
  }> = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path ? `/${route.path}` : ''}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
