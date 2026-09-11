import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://korux.ai",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://korux.ai/agentic-ai",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://korux.ai/agent-control-plane",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://korux.ai/human-in-the-loop-ai-agents",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://korux.ai/ai-agent-governance",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
