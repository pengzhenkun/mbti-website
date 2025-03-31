"use client"

import { createContext, useContext } from "react"
import translations from "../translations/zh.json"

interface LanguageContextType {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  t: (key: string) => translations[key] || key,
})

export const useLanguage = () => {
  return useContext(LanguageContext)
}

