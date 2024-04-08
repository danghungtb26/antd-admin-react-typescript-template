import DashboardPage from '@app/dashboard'
import HomePage from '@app/home'
import LoginPage from '@app/login'
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
    ],
  },
]
