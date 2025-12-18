import type { MetadataRoute } from 'next';
import { projects } from '@/content/site';

const BASE_URL = 'https://mohammad.biz';

// Build timestamp for routes without specific lastModified
const BUILD_TIME = new Date();

// Map project IDs from site.ts to actual route slugs
// 'flagship' project uses 'prediction-market' as its route
function getProjectSlug(projectId: string): string {
  if (projectId === 'flagship') return 'prediction-market';
  return projectId;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes with their priorities and change frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: BUILD_TIME,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/patent-summary`,
      lastModified: BUILD_TIME,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Dynamic project routes derived from the projects data source
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${getProjectSlug(project.id)}`,
    lastModified: BUILD_TIME,
    changeFrequency: project.isFlagship ? 'weekly' : 'monthly',
    priority: project.isFlagship ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
