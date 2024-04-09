import DashboardPage from '@app/dashboard'
import HomePage from '@app/home'
import LoginPage from '@app/login'
import TableTemplatePage from '@app/template/table'
import DashboardLayout from '@layouts/dashboard'
import { RouteObject } from 'react-router-dom'

type DataRouteObject = RouteObject & {
  id: string
  children?: DataRouteObject[]
  meta?: {
    title?: string
    titleKey?: string
  }
}

export const routers: DataRouteObject[] = [
  {
    id: 'login',
    path: 'login',
    Component: LoginPage,
    meta: {
      title: 'Login',
    },
  },
  {
    id: 'signed',
    path: '',
    element: <DashboardLayout />,
    children: [
      {
        id: 'home',
        path: 'home',
        Component: HomePage,
        meta: {
          title: 'Home',
          titleKey: 'home',
        },
      },
      {
        id: 'dashboard',
        path: 'dashboard',
        Component: DashboardPage,
        meta: {
          title: 'Dashboard',
          titleKey: 'home',
        },
      },
      {
        id: 'template',
        path: 'template',
        meta: {
          title: 'Template',
          titleKey: 'table.template.title',
        },
        children: [
          {
            id: 'table',
            path: 'table',
            Component: TableTemplatePage,
            meta: {
              title: 'Table template',
              titleKey: 'table.template.title',
            },
          },
        ],
      },
    ],
  },
]

type R = {
  paths: string[]
  path: string
  meta: DataRouteObject['meta']
}

const getRoutes: (router: DataRouteObject, prePath?: string[]) => R[] = (router, prePath) => {
  const routers = []
  if (router.path) {
    routers.push({
      paths: (prePath ?? []).concat(router.path ?? '').filter(i => !!i),
      meta: router.meta,
      path: router.path,
    })
  }

  if (router.children?.length) {
    return routers.concat(
      router.children.reduce<R[]>(
        (a, i: DataRouteObject) =>
          a.concat(
            getRoutes(
              i,
              (prePath ?? []).concat(router.path ?? '').filter(i => !!i),
            ),
          ),
        [],
      ),
    )
  }

  return routers
}

const routerArr = routers.reduce<R[]>((a, i) => a.concat(getRoutes(i, [])), [])
console.log('🚀 ~ routerArr:', routerArr)
