import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn()", () => {
  it("menggabungkan beberapa class string menjadi satu string", () => {
    expect(cn("a", "b", "c")).toBe("a b c")
  })

  it("menyaring nilai falsy (false, null, undefined)", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b")
  })

  it("mendukung conditional object", () => {
    expect(cn({ active: true, hidden: false })).toBe("active")
  })

  it("tailwind merge: class konflik, yang terakhir menang", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })
})
