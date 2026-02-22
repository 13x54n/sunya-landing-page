"use client"

import { useEffect } from "react"

function unescapeAttr(str: string) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#10;/g, "\n")
}

export function CopyButtonHandler() {
  useEffect(() => {
    const handleCopy = (e: Event) => {
      const btn = (e.target as HTMLElement).closest("[data-code-copy]")
      if (!btn) return
      const code = btn.getAttribute("data-code")
      if (!code) return
      const text = unescapeAttr(code)
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("rehype-pretty-copied")
        window.setTimeout(() => btn.classList.remove("rehype-pretty-copied"), 2000)
      })
    }

    document.addEventListener("click", handleCopy)
    return () => document.removeEventListener("click", handleCopy)
  }, [])

  return null
}
