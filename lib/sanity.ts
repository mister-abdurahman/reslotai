// lib/sanity.ts
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-03-04", // Use a UTC date string
  useCdn: process.env.NODE_ENV === "production",
  // IMPORTANT: For App Router, ensure these are configured if you want caching control
  // These options control how Next.js fetches and caches data from Sanity.
  // For `fetch`, it's passed as a third argument, but for `createClient` here,
  // we might rely on default `fetch` behavior or pass options to `fetch` calls.
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

// A helper function for generic fetch with caching options
export async function sanityFetch<T>({
  query,
  params = {},
  tags, // Optional: for revalidation
}: {
  query: string;
  params?: Record<string, string | string[]>;
  tags?: string[];
}): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "production" ? 60 : 1, // ISR for 60 seconds in production, 1 second in development for quicker updates
      tags, // Tags for on-demand revalidation if you set up webhooks
    },
    cache: "force-cache", // Default to caching
  });
}
//
