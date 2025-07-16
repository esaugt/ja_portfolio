'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type LayoutContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: (value:boolean) => void
}

const AppContext = createContext<LayoutContextType | undefined>(undefined)

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useLayoutContext must be used inside LayoutProvider')
  return ctx
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  return (
    <AppContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
    }}>

      {children}
      
    </AppContext.Provider>
  )
}
