import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: {
      primary_1: string
      primary_2: string
      primary_3: string
      primary_4: string
      primary_5: string
      primary_6: string
      primary_7: string

      secondary_1: string
      secondary_2: string
      secondary_3: string
      secondary_4: string
      secondary_5: string
      secondary_6: string
      secondary_7: string

      neutral_1: string
      neutral_2: string
      neutral_3: string
      neutral_4: string
      neutral_5: string
      neutral_6: string
      neutral_7: string
      neutral_8: string
    }
    fontSizes?: {
      h1: number | string
      h2: number | string
      sub_h1: number | string
      sub_h2: number | string
      sub_h3: number | string
      sub_h4: number | string
      sub_h5: number | string

      body_1: number | string
      normal: number | string
      medium: number | string

      button_1: number | string
      button_2: number | string
    }
  }
}
