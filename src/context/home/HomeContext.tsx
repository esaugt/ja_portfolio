// src/context/LayoutContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type LayoutContextType = {
  isScrolled: boolean
  setForceScrolled: (value: boolean) => void
}

const LayoutHomeContext = createContext<LayoutContextType | undefined>(undefined)

export const useLayoutContext = () => {
  const ctx = useContext(LayoutHomeContext)
  if (!ctx) throw new Error('useLayoutContext must be used inside LayoutProvider')
  return ctx
}

export const LayoutHomeProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [forceScrolled, setForceScrolled] = useState(false)

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true)
      return
    }

    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceScrolled])

  return (
    <LayoutHomeContext.Provider value={{
      isScrolled,
      setForceScrolled
    }}>

      {children}
      
    </LayoutHomeContext.Provider>
  )
}
