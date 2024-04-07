import { DefaultTheme, ThemeProvider } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary_1: '#166AEA',
    primary_2: '#001845',
    primary_3: '#023E7D',
    primary_4: '#0353A4',
    primary_5: '#0466C8',
    primary_6: '#166AEA',
    primary_7: '#2D83FF',
    secondary_1: '#16171C',
    secondary_2: '#202329',
    secondary_3: '#4A4F5C',
    secondary_4: '#777C85',
    secondary_5: '#B4B6BB',
    secondary_6: '#E1E2E4',
    secondary_7: '#FEFEFE',

    neutral_1: '#212121',
    neutral_2: '#424242',
    neutral_3: '#616161',
    neutral_4: '#9E9E9E',
    neutral_5: '#E0E0E0',
    neutral_6: '#F5F5F5',
    neutral_7: '#FFFDFD',
    neutral_8: '#616161',
  },
  fontSizes: {
    h1: '5.6rem',
    h2: '4.8rem',
    sub_h1: '3.6rem',
    sub_h2: '2.8rem',
    sub_h3: '2rem',
    sub_h4: '1.8rem',
    sub_h5: '1.6rem',
    body_1: '1.4rem',

    normal: '1.4rem',
    medium: '1.2rem',
    button_1: '1.4rem',
    button_2: '1.4rem',
  },
}
type StyledThemeProviderProps = {
  children?: React.ReactNode
}

const StyledThemeProvider: React.FC<StyledThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
