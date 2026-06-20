import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, translations } from './translations.js'

const STORAGE_KEY = 'portfolio.language'

const LanguageContext = createContext(null)

// SSR-safe: window/localStorage are only touched behind these guards.
function readStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
}

// Resolves a dot-path (e.g. 'hero.tagline') against the active language tree.
function resolve(dictionary, key) {
  return key.split('.').reduce((node, segment) => {
    if (node && typeof node === 'object' && segment in node) return node[segment]
    return undefined
  }, dictionary)
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = useCallback((next) => {
    if (SUPPORTED_LANGUAGES.includes(next)) setLanguageState(next)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === 'es' ? 'en' : 'es'))
  }, [])

  const t = useCallback(
    (key) => {
      const value = resolve(translations[language], key)
      return value === undefined ? key : value
    },
    [language],
  )

  const value = { language, setLanguage, toggleLanguage, t }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
