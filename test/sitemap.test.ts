import { describe, it, expect } from "vitest"
import sitemap from "@/app/sitemap"

const BASE_URL = "https://aliyyulworks.vercel.app"

describe("sitemap()", () => {
  it("mengembalikan array berisi semua halaman statis", () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBe(true)
    const urls = result.map((entry) => entry.url)
    expect(urls).toEqual([
      `${BASE_URL}`,
      `${BASE_URL}/projects`,
      `${BASE_URL}/about`,
      `${BASE_URL}/contact`,
    ])
  })

  it("setiap entri punya url dan lastModified", () => {
    const result = sitemap()
    for (const entry of result) {
      expect(entry).toHaveProperty("url")
      expect(entry).toHaveProperty("lastModified")
    }
  })

  it("setiap url diawali base URL tanpa double-slash yang salah", () => {
    const result = sitemap()
    for (const entry of result) {
      expect(entry.url.startsWith(BASE_URL)).toBe(true)
      // tidak boleh ada "//" pada bagian path (setelah "https://")
      expect(entry.url.replace("https://", "")).not.toContain("//")
    }
  })

  it("lastModified adalah ISO date string yang valid", () => {
    const result = sitemap()
    for (const entry of result) {
      expect(typeof entry.lastModified).toBe("string")
      expect(Number.isNaN(Date.parse(entry.lastModified as string))).toBe(false)
    }
  })
})
