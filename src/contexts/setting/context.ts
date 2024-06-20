import React, { useContext } from 'react'

export type SettingContextType = {
  sidebarCollapsed: boolean

  toggleSidebarCollapsed: () => void

  fixedHeader: boolean

  showTagView: boolean

  drawerOpened: boolean

  toggleDrawerOpened: () => void
}

export const SettingContext = React.createContext<SettingContextType>({
  sidebarCollapsed: false,
  toggleSidebarCollapsed: () => {},
  fixedHeader: true,
  showTagView: true,
  drawerOpened: false,
  toggleDrawerOpened: () => {},
})

export const useSetting = () => useContext(SettingContext)
