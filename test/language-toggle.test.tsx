import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LanguageToggle from "@/components/language-toggle"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function renderToggle() {
  return render(
    <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>,
  )
}

describe("LanguageToggle", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("merender label ID, EN, dan switch dengan aria-label", () => {
    renderToggle()
    expect(screen.getByText("ID")).toBeInTheDocument()
    expect(screen.getByText("EN")).toBeInTheDocument()
    expect(screen.getByRole("switch", { name: "Toggle language" })).toBeInTheDocument()
  })

  it("default (id): switch unchecked", () => {
    renderToggle()
    const sw = screen.getByRole("switch", { name: "Toggle language" })
    expect(sw).toHaveAttribute("aria-checked", "false")
  })

  it("klik switch -> menjadi checked dan bahasa jadi en", async () => {
    const user = userEvent.setup()
    renderToggle()
    const sw = screen.getByRole("switch", { name: "Toggle language" })
    await user.click(sw)
    expect(sw).toHaveAttribute("aria-checked", "true")
    expect(localStorage.getItem("language")).toBe("en")
  })

  it("matikan switch -> kembali unchecked dan bahasa jadi id", async () => {
    const user = userEvent.setup()
    renderToggle()
    const sw = screen.getByRole("switch", { name: "Toggle language" })
    await user.click(sw) // -> en
    await user.click(sw) // -> id
    expect(sw).toHaveAttribute("aria-checked", "false")
    expect(localStorage.getItem("language")).toBe("id")
  })

  it("state checked ikut ter-update saat language berubah dari luar", async () => {
    const user = userEvent.setup()

    // Tombol eksternal untuk mengubah bahasa lewat context
    function ExternalSetter() {
      const { setLanguage } = useLanguage()
      return <button onClick={() => setLanguage("en")}>external-to-en</button>
    }

    render(
      <LanguageProvider>
        <ExternalSetter />
        <LanguageToggle />
      </LanguageProvider>,
    )

    const sw = screen.getByRole("switch", { name: "Toggle language" })
    expect(sw).toHaveAttribute("aria-checked", "false")

    await user.click(screen.getByText("external-to-en"))
    expect(sw).toHaveAttribute("aria-checked", "true")
  })
})
