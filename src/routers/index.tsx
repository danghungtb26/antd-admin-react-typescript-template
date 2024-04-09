import DashboardPage from '@app/dashboard'
import HomePage from '@app/home'
import LoginPage from '@app/login'
import TableTemplatePage from '@app/template/table'
import DashboardLayout from '@layouts/dashboard'
import { DataRouteObject } from 'react-router-dom'

export const routers: DataRouteObject[] = [
  { id: 'login', path: 'login', Component: LoginPage },
  {
    id: 'signed',
    path: '',
    element: <DashboardLayout />,
    children: [
      { id: 'home', path: 'home', Component: HomePage },
      {
        id: 'dashboard',
        path: 'dashboard',
        Component: DashboardPage,
      },
      {
        id: 'template',
        path: 'template',
        children: [
          {
            id: 'table',
            path: 'table',
            Component: TableTemplatePage,
          },
        ],
      },
    ],
  },
]
