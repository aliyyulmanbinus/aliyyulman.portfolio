import { describe, it, expect, beforeEach, vi } from "vitest"
import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LanguageProvider } from "@/lib/language-context"

// --- Mock next/image: render <img> biasa ---
vi.mock("next/image", () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    const { src, alt, priority, fill, ...rest } = props
    return React.createElement("img", { src: typeof src === "string" ? src : "", alt, ...rest })
  },
}))

// --- Mock next/link: render <a> biasa ---
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: any) =>
    React.createElement("a", { href: typeof href === "string" ? href : "#", ...rest }, children),
}))

// --- Mock framer-motion: motion.X -> elemen DOM biasa, buang prop khusus animasi ---
vi.mock("framer-motion", () => {
  const FRAMER_PROPS = new Set([
    "initial", "animate", "exit", "transition", "variants", "whileHover",
    "whileTap", "whileInView", "whileFocus", "whileDrag", "viewport",
    "drag", "layout", "layoutId", "custom", "style",
  ])
  const clean = (props: Record<string, any>) => {
    const out: Record<string, any> = {}
    for (const k of Object.keys(props)) {
      if (!FRAMER_PROPS.has(k)) out[k] = props[k]
    }
    return out
  }
  const motion = new Proxy(
    {},
    {
      get: (_t, tag: string) =>
        React.forwardRef<any, any>(({ children, ...props }, ref) =>
          React.createElement(tag, { ref, ...clean(props) }, children),
        ),
    },
  )
  return {
    motion,
    AnimatePresence: ({ children }: any) => children,
    useScroll: () => ({ scrollYProgress: { get: () => 0, onChange: () => () => {} } }),
    useTransform: () => 0,
    useInView: () => true,
  }
})

// Import halaman SETELAH mock terpasang
import Home from "@/app/page"
import BicimiciGameCaseStudy from "@/app/case-studies/bicimici-game/page"

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("Halaman Home", () => {
  beforeEach(() => localStorage.clear())

  it("ter-render tanpa crash dan menampilkan navigasi (default id)", () => {
    renderWithProvider(<Home />)
    // t("About") -> "Tentang", t("Work") -> "Karya", t("Resume") -> "Resume"
    expect(screen.getByText("Tentang")).toBeInTheDocument()
    expect(screen.getByText("Karya")).toBeInTheDocument()
    expect(screen.getAllByText("Resume").length).toBeGreaterThan(0)
  })

  it("menampilkan versi Inggris setelah toggle bahasa", async () => {
    const user = userEvent.setup()
    localStorage.setItem("language", "en")
    renderWithProvider(<Home />)
    // Dengan localStorage 'en', nav memakai teks Inggris
    expect(await screen.findByText("About")).toBeInTheDocument()
    expect(screen.getByText("Work")).toBeInTheDocument()
  })
})

describe("Halaman Case Study (bicimici-game)", () => {
  beforeEach(() => localStorage.clear())

  it("ter-render tanpa crash dan menampilkan 'Back to Work'", () => {
    renderWithProvider(<BicimiciGameCaseStudy />)
    // t("Back to Work") -> "Kembali ke Karya" (default id)
    expect(screen.getByText("Kembali ke Karya")).toBeInTheDocument()
  })
})
