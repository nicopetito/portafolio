export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicolasvidela.dev'
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
