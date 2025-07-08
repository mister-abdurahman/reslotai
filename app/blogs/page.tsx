// app/blog/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch, urlFor } from "@/lib/sanity"; // Adjust path
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Revalidation for this page (similar to ISR)
export const revalidate = 60; // Regenerate page data every 60 seconds

interface Post {
  _id: string;
  title: string;
  slug: { current?: string };
  excerpt: string;
  mainImage: { asset: { _ref: string }; alt?: string };
  publishedAt: string;
  author: { name: string };
}

const blogQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{name}
}`;

// --- Metadata for the Page ---
export const metadata: Metadata = {
  title: "Blog - ReslotAI",
  description:
    "Read the latest articles on Lead Retargeting Services, Automated Email Follow-up, and Lead Nurturing Automation from ReslotAI.",
  keywords: [
    "Lead Retargeting Services",
    "Automated Email Follow-up",
    "Lead Nurturing Automation",
    "blog",
  ],
};

// --- Blog Listing Page Component (Server Component) ---
export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({ query: blogQuery, tags: ["post"] });

  return (
    <div className="font-inter">
      <Header />
      <div className="bg-gradient-to-br from-blue-900 to-purple-500 p-16 w-full mt-16">
        <h1 className="text-3xl md:text-6xl font-bold text-center dark:text-white">
          Our Blogs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              href={`/blogs/${post?.slug?.current}`}
              key={post._id}
              className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden dark:bg-gray-800"
            >
              {post.mainImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  By {post.author?.name || "Admin"} on{" "}
                  {format(new Date(post.publishedAt), "PPP")}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
            No blog posts found.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
