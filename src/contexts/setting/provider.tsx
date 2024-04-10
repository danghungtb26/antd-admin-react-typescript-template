import React, { useEffect, useMemo, useState } from 'react'
import { SettingContext, SettingContextType } from './context'
import { getSidebarCollapsed, setSidebarCollapsed } from '@commons/cookies'

type SettingProviderProps = {}

const SettingProvider: React.FC<React.PropsWithChildren<SettingProviderProps>> = ({ children }) => {
  const [sidebarCollapsed, setCollapsed] =
    useState<SettingContextType['sidebarCollapsed']>(getSidebarCollapsed())

  const toggleSidebarCollapsed = () => {
    setCollapsed(s => !s)
  }

  const [drawerOpend, setDrawerOpend] = useState<SettingContextType['drawerOpend']>(false)

  const toggleDrawerOpened = () => {
    setDrawerOpend(s => !s)
  }

  useEffect(() => {
    setSidebarCollapsed(sidebarCollapsed)
  }, [sidebarCollapsed])

  const value = useMemo<SettingContextType>(
    () => ({
      sidebarCollapsed,
      toggleSidebarCollapsed,
      fixedHeader: true,
      showTagView: true,
      drawerOpend,
      toggleDrawerOpened,
    }),
    [sidebarCollapsed, drawerOpend],
  )

  return <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
}

export default SettingProvider
