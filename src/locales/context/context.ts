import { createContext, useContext } from 'react'

type LocaleContextType = {
  onChangeLocale: (locale: string) => void
}
export const LocaleContext = createContext<LocaleContextType>({
  onChangeLocale: () => {},
})

export const useOnChangeLocale = () => {
  return useContext(LocaleContext).onChangeLocale
}
