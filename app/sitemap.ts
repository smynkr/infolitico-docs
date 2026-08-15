import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const BASE = 'https://docs.infolitico.com';

// These aliases were added with the expanded reader guidance. Keep them in
// the sitemap beside their prefixed source URLs until canonical metadata
// consolidates the two identities.
const NEW_CLEAN_ALIASES: Record<string, string> = {
  '/infolitico/reader-guide': '/reader-guide',
  '/infolitico/the-feed': '/the-feed',
  '/infolitico/policies': '/policies',
  '/infolitico/changelog': '/changelog',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source
    .getPages()
    // / renders the product index (app/(home)/page.tsx) — a duplicate of
    // /infolitico, which takes the canonical sitemap slot.
    .filter((page) => page.url !== '/')
    .flatMap((page) => {
      const entry = {
        url: `${BASE}${page.url}`,
        changeFrequency: 'weekly' as const,
        priority: page.url === '/getting-started' ? 1 : page.slugs.length <= 1 ? 0.8 : 0.6,
      };
      const cleanPath = NEW_CLEAN_ALIASES[page.url];

      return cleanPath ? [entry, { ...entry, url: `${BASE}${cleanPath}` }] : [entry];
    });

  return pages;
}
