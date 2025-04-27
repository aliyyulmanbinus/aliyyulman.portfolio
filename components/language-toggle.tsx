// File baru: Komponen toggle untuk beralih antara bahasa
"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [checked, setChecked] = useState(language === "en")

  const handleToggle = (checked: boolean) => {
    setChecked(checked)
    setLanguage(checked ? "en" : "id")
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="language-toggle" className="text-sm">
        ID
      </Label>
      <Switch id="language-toggle" checked={checked} onCheckedChange={handleToggle} aria-label="Toggle language" />
      <Label htmlFor="language-toggle" className="text-sm">
        EN
      </Label>
    </div>
  )
}
