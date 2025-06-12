import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "7xwrbh9o", // from sanity.io/manage
  dataset: "production",
  apiVersion: "2025-06-11", // use the current date
  useCdn: true,
});
