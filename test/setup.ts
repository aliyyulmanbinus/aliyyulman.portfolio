import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// jsdom tidak mengimplementasikan scrollTo; stub agar tidak ada warning saat halaman render
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo

// Bersihkan DOM & unmount komponen setelah setiap test
afterEach(() => {
  cleanup()
})
