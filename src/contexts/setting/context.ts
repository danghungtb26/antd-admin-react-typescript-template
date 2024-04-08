import React, { useContext } from 'react'

export type SettingContextType = {
  sidebarCollapsed: boolean

  toggleSidebarCollapsed: () => void
}

export const SettingContext = React.createContext<SettingContextType>({
  sidebarCollapsed: false,
  toggleSidebarCollapsed: () => {},
})

export const useSetting = () => useContext(SettingContext)
