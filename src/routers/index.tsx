import App from '@app'
import DashboardPage from '@app/dashboard'
import HomePage from '@app/home'
import LoginPage from '@app/login'
import TableTemplatePage from '@app/template/table'
import { generateRandomId } from '@commons/id'
import DashboardLayout from '@layouts/dashboard'
import { RouteObject, matchPath } from 'react-router-dom'

export type DataRouteObject = RouteObject & {
  id: string
  children?: DataRouteObject[]
  meta?: {
    title?: string
    titleKey?: string
  }
}

export const routers: DataRouteObject[] = [
  {
    id: 'root',
    element: <App />,
    children: [
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

                meta: {
                  title: 'Table template',
                  titleKey: 'table.template.title',
                },
                children: [
                  {
                    id: 'root-table',
                    path: '',
                    Component: TableTemplatePage,
                  },
                  {
                    id: 'detail',
                    path: ':id',
                    Component: LoginPage,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

type R = {
  id: string
  paths: string[]
  path: string
  meta: DataRouteObject['meta']
  pathString?: string
  parent?: string
}

const getRoutes: (router: DataRouteObject, prePath?: string[]) => R[] = (router, prePath) => {
  const routers = []
  const id = generateRandomId()
  if (router.path) {
    routers.push({
      id,
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
            ).map(i => ({ parent: router.path ? id : undefined, ...i })),
          ),
        [],
      ),
    )
  }

  return routers
}

export const routerArr = routers
  .reduce<R[]>((a, i) => a.concat(getRoutes(i, [])), [])
  .map(i => ({ ...i, pathString: i.paths.join('/') }))

export const findRouter = (pathname: string) => {
  return routerArr.find(i => matchPath(i.pathString, pathname))
}

export const findRouterById = (id: string) => {
  return routerArr.find(i => i.id === id)
}
