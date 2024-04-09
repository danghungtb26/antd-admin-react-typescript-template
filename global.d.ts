import * as a from 'react-router'

declare module 'react-router' {
  export type DataRouteObject = a.RouteObject & {
    id: string
    meta?: {
      title?: string
      titleKey?: string
    }
  }
}
