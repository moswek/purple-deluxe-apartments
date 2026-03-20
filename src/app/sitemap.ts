
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://purpledeluxeapartments.com'

  // Since this is a single-page application with hash-based navigation,
  // we only need to list the base URL.
  // If you add more static pages in the future (e.g., /about, /gallery),
  // you can add them to this array.
  const staticPages = ['/']

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().split('T')[0], // Generate today's date
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }))

  return sitemapEntries
}
