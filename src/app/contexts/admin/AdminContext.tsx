'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type LayoutContextType = {
  isLoged: boolean
  setIsLoged: (value:boolean) => void
}

const layoutAdminContext = createContext<LayoutContextType | undefined>(undefined)

export const useLayoutAdminContext = () => {
  const ctx = useContext(layoutAdminContext)
  if (!ctx) throw new Error('useLayoutContext must be used inside LayoutProvider')
  return ctx
}

export const LayoutAdminProvider = ({ children }: { children: ReactNode }) => {
  const [isLoged, setIsLoged] = useState(false)

  
  return (
    <layoutAdminContext.Provider value={{
      isLoged,
      setIsLoged,
    }}>

      {children}
      
    </layoutAdminContext.Provider>
  )
}
