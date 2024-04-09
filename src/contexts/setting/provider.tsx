import React, { useMemo, useState } from 'react'
import { SettingContext, SettingContextType } from './context'

type SettingProviderProps = {}

const SettingProvider: React.FC<React.PropsWithChildren<SettingProviderProps>> = ({ children }) => {
  const [sidebarCollapsed, setCollapsed] = useState<SettingContextType['sidebarCollapsed']>(false)

  const toggleSidebarCollapsed = () => {
    setCollapsed(s => !s)
  }

  const value = useMemo<SettingContextType>(
    () => ({
      sidebarCollapsed,
      toggleSidebarCollapsed,
      fixedHeader: true,
      showTagView: true,
    }),
    [sidebarCollapsed],
  )

  return <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
}

export default SettingProvider
