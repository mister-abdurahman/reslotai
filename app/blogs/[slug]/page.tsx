// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation"; // For handling 404s
import { sanityFetch, sanityClient, urlFor } from "@/lib/sanity"; // Adjust path
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Revalidation for this page
export const revalidate = 60; // Regenerate page data every 60 seconds

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: { asset: { _ref: string }; alt?: string };
  publishedAt: string;
  author: { name: string; image?: any; bio?: any[] };
  body: any[]; // Portable Text content
}

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  "author": author->{name, image, bio}
}`;

// --- generateStaticParams (replaces getStaticPaths) ---
// This function tells Next.js which [slug] paths to pre-render at build time.
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({
    slug,
  }));
}

// --- generateMetadata (replaces next/head) ---
// This function dynamically generates meta tags for each blog post.
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const post = await sanityFetch<Post>({
    query: postQuery,
    params: { slug: params.slug },
    tags: ["post"], // For revalidation
  });

  if (!post) {
    return {}; // Return empty if post not found, Next.js will handle 404 via the component
  }

  return {
    title: `${post.title} - Reslot AI`,
    description: post.excerpt || post.title,
    keywords: [
      post.title.split(" ").join(", ").toLowerCase(), // Basic keyword generation
      "Lead Retargeting Services",
      "Automated Email Follow-up",
      "Lead Nurturing Automation",
      "blog",
      params.slug,
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.mainImage
        ? [
            {
              url: urlFor(post.mainImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: post.mainImage.alt || post.title,
            },
          ]
        : [],
    },
  };
}

// --- Custom Portable Text Components (can be externalized) ---
const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-6">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            width={800} // Example fixed width
            height={500} // Example fixed height
            layout="responsive" // Make image responsive
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-6 mb-3 dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-5 mb-2 dark:text-white">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400 mb-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 mb-4 dark:text-gray-300">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 mb-4 dark:text-gray-300">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
};

// --- Blog Post Page Component (Server Component) ---
export default async function PostPage({ params }: { params: any }) {
  const post = await sanityFetch<Post>({
    query: postQuery,
    params: { slug: params.slug },
    tags: ["post"], // For revalidation
  });

  // If the post is not found, render Next.js's 404 page
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-3xl mt-14">
        <article className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
          {post.mainImage && (
            <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                sizes="100vw"
                priority // LCP image
                className="object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            By {post.author?.name || "Admin"} on{" "}
            {format(new Date(post.publishedAt), "PPP")}
          </p>

          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            <PortableText value={post.body} components={components} />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/blogs"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
