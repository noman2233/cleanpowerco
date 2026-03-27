export default function sitemap() {
  const baseUrl = "https://www.cleanpowerco.com.au";
  const lastMod = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    /* --- Service Detail Pages (Static) --- */
    {
      url: `${baseUrl}/services/solar-system-design`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/residential-solar-systems`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/commercial-solar-solutions`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/solar-panel-installation`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/energy-efficiency-consulting`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/solar-maintenance-repairs`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}