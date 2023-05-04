import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { withSuspense } from 'HOC/with-suspense'

export const routesConfig = createBrowserRouter([
  {
    path: routes.ROOT.path,
    element: withSuspense(routes.ROOT.component),
    children: [
      {
        path: routes.LOGIN.path,
        element: withSuspense(routes.LOGIN.component)
      },
      {
        path: routes.HOME.path,
        element: withSuspense(routes.HOME.component),
        children: [
          {
            path: routes.GARAGES.path,
            element: withSuspense(routes.GARAGES.component)
          },
          {
            path: routes.STORAGE.path,
            element: withSuspense(routes.STORAGE.component)
          },
          {
            path: routes.CARS.path,
            element: withSuspense(routes.CARS.component)
          },
          {
            path: routes.USERS.path,
            element: withSuspense(routes.USERS.component)
          },
          {
            path: routes.SETTINGS.path,
            element: withSuspense(routes.SETTINGS.component)
          }
        ]
      }
    ]
  }
])
