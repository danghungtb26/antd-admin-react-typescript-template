import React, { useContext } from 'react'

export type SettingContextType = {
  sidebarCollapsed: boolean

  toggleSidebarCollapsed: () => void

  fixedHeader: boolean

  showTagView: boolean
}

export const SettingContext = React.createContext<SettingContextType>({
  sidebarCollapsed: false,
  toggleSidebarCollapsed: () => {},
  fixedHeader: true,
  showTagView: true,
})

export const useSetting = () => useContext(SettingContext)
