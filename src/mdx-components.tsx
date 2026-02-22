import type { MDXComponents } from "mdx/types"

import { CopyButtonHandler } from "@/components/copy-button-handler"

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <CopyButtonHandler />
      <article className="docs-prose max-w-3xl space-y-6">
        {children}
      </article>
    </div>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
