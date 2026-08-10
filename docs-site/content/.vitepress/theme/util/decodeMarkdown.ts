// pageData.markdown is base64-encoded (see embed-markdown.ts) so a literal
// `</script>` in the content can't break VitePress's inline __pageData script.
export function decodeMarkdown(encoded?: string): string | undefined {
  if (!encoded) return undefined
  try {
    const binary = atob(encoded)
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch {
    return undefined
  }
}
