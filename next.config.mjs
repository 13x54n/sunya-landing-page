import createMDX from "@next/mdx"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import rehypeCodeHeader from "./src/lib/rehype-code-header.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: "one-dark-pro",
        keepBackground: true,
      }],
      rehypeCodeHeader,
      rehypeSlug,
    ],
  },
});

export default withMDX(nextConfig);
