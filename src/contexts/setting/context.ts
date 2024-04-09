import React, { useContext } from 'react'

export type SettingContextType = {
  sidebarCollapsed: boolean

  toggleSidebarCollapsed: () => void

  fixedHeader: boolean

  showTagView: boolean

  drawerOpend: boolean

  toggleDrawerOpened: () => void
}

export const SettingContext = React.createContext<SettingContextType>({
  sidebarCollapsed: false,
  toggleSidebarCollapsed: () => {},
  fixedHeader: true,
  showTagView: true,
  drawerOpend: false,
  toggleDrawerOpened: () => {},
})

export const useSetting = () => useContext(SettingContext)
