"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [checked, setChecked] = useState(language === "en")

  // Tambahkan useEffect untuk memperbarui state checked saat language berubah
  useEffect(() => {
    setChecked(language === "en")
  }, [language])

  const handleToggle = (checked: boolean) => {
    setChecked(checked)
    setLanguage(checked ? "en" : "id")
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="language-toggle" className="text-sm">
        ID
      </Label>
      {/* Tambahkan kelas khusus untuk styling toggle */}
      <Switch
        id="language-toggle"
        checked={checked}
        onCheckedChange={handleToggle}
        aria-label="Toggle language"
        className="data-[state=checked]:bg-custom-dark"
      />
      <Label htmlFor="language-toggle" className="text-sm">
        EN
      </Label>
    </div>
  )
}
