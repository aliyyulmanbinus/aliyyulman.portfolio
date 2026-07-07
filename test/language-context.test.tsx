import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

// Komponen kecil untuk memakai hook useLanguage di dalam test
function Probe() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      {/* key yang ada di kedua bahasa */}
      <span data-testid="about">{t("About")}</span>
      {/* key yang HANYA ada di map "id" (string body case study) -> menguji fallback saat bahasa en */}
      <span data-testid="idonly">{t("The main challenge in this project included:")}</span>
      {/* key yang tidak ada sama sekali -> mengembalikan key mentah */}
      <span data-testid="unknown">{t("__key_yang_tidak_ada__")}</span>
      <button onClick={() => setLanguage("en")}>to-en</button>
      <button onClick={() => setLanguage("id")}>to-id</button>
    </div>
  )
}

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>,
  )
}

describe("LanguageProvider + t()", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("default bahasa Indonesia dan t() mengembalikan terjemahan ID", () => {
    renderWithProvider()
    expect(screen.getByTestId("lang").textContent).toBe("id")
    // "About" -> "Tentang" di map id
    expect(screen.getByTestId("about").textContent).toBe("Tentang")
  })

  it("t() mengembalikan terjemahan EN setelah setLanguage('en')", async () => {
    const user = userEvent.setup()
    renderWithProvider()
    await user.click(screen.getByText("to-en"))
    expect(screen.getByTestId("lang").textContent).toBe("en")
    expect(screen.getByTestId("about").textContent).toBe("About")
  })

  it("key id-only mengembalikan terjemahan ID saat bahasa id", () => {
    // Map "id" adalah superset dari "en": string body case study hanya ada di "id".
    renderWithProvider()
    expect(screen.getByTestId("idonly").textContent).toBe(
      "Tantangan utama dalam proyek ini meliputi:",
    )
  })

  it("fallback ke key mentah untuk key id-only saat bahasa en (tidak ada di map en)", async () => {
    const user = userEvent.setup()
    renderWithProvider()
    await user.click(screen.getByText("to-en"))
    // Tidak ada di map en -> t() mengembalikan key mentah
    expect(screen.getByTestId("idonly").textContent).toBe(
      "The main challenge in this project included:",
    )
  })

  it("mengembalikan key mentah ketika key tidak ada sama sekali", () => {
    renderWithProvider()
    expect(screen.getByTestId("unknown").textContent).toBe("__key_yang_tidak_ada__")
  })

  it("menyimpan pilihan bahasa ke localStorage (persistensi tulis)", async () => {
    const user = userEvent.setup()
    renderWithProvider()
    await user.click(screen.getByText("to-en"))
    expect(localStorage.getItem("language")).toBe("en")
  })

  it("membaca bahasa dari localStorage saat mount (persistensi baca)", async () => {
    localStorage.setItem("language", "en")
    await act(async () => {
      renderWithProvider()
    })
    expect(screen.getByTestId("lang").textContent).toBe("en")
    expect(screen.getByTestId("about").textContent).toBe("About")
  })

  it("mengabaikan nilai localStorage yang tidak valid, tetap default id", async () => {
    localStorage.setItem("language", "fr")
    await act(async () => {
      renderWithProvider()
    })
    expect(screen.getByTestId("lang").textContent).toBe("id")
  })
})

describe("useLanguage tanpa provider", () => {
  it("memakai nilai default (id) dan t() mengembalikan key", () => {
    render(<Probe />)
    expect(screen.getByTestId("lang").textContent).toBe("id")
    // default context: t = (key) => key
    expect(screen.getByTestId("about").textContent).toBe("About")
  })
})
