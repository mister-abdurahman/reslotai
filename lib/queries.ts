// lib/queries.js
export const nichePageQuery = `
  *[_type == "fitness" && slug.current == $slug][0]{
    title,
    sections[]{
      _type == "heroSection" => {
        _type,
        headline,
        subheading,
        image,
        ctaText,
        ctaLink
      },
    }
  }
`;
