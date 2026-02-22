import { toString } from "hast-util-to-string"
import { visit } from "unist-util-visit"

const langLabels = {
  bash: "Bash",
  sh: "Shell",
  json: "JSON",
  js: "JavaScript",
  ts: "TypeScript",
  tsx: "Tsx",
  jsx: "Jsx",
  html: "HTML",
  css: "CSS",
  py: "Python",
  text: "Text",
}

function formatLang(lang) {
  return langLabels[lang] ?? (lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : "Code")
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "&#10;")
}

/**
 * Adds a header bar with language label and copy button to code blocks.
 * Copy button uses data-code attribute (no inline onclick) for React compatibility.
 */
export default function rehypeCodeHeader() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "figure" || !node.properties?.["data-rehype-pretty-code-figure"]) return
      const pre = node.children?.find((c) => c.type === "element" && c.tagName === "pre")
      const existingTitle = node.children?.find(
        (c) => c.type === "element" && c.properties?.["data-rehype-pretty-code-title"] !== undefined
      )
      if (!pre || existingTitle) return

      const code = pre.children?.find((c) => c.type === "element" && c.tagName === "code")
      const codeText = code ? toString(code) : ""
      const lang = pre.properties?.["data-language"] ?? "text"

      const copyButton = {
        type: "element",
        tagName: "button",
        properties: {
          type: "button",
          "aria-label": "Copy code",
          title: "Copy code",
          "data-code-copy": "",
          "data-code": escapeAttr(codeText),
          className: ["rehype-pretty-copy-button"],
        },
        children: [
          {
            type: "element",
            tagName: "svg",
            properties: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true",
            },
            children: [
              {
                type: "element",
                tagName: "rect",
                properties: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" },
                children: [],
              },
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                },
                children: [],
              },
            ],
          },
        ],
      }

      const header = {
        type: "element",
        tagName: "div",
        properties: {
          "data-rehype-pretty-code-title": "",
          "data-language": lang,
          className: ["rehype-pretty-code-header"],
        },
        children: [
          { type: "element", tagName: "span", properties: {}, children: [{ type: "text", value: formatLang(lang) }] },
          copyButton,
        ],
      }

      node.children.unshift(header)
    })
  }
}
