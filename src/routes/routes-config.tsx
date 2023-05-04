import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const routesConfig = createBrowserRouter([
  {
    path: routes.ROOT.path,
    element: (
      <Suspense>
        <routes.ROOT.component />
      </Suspense>
    ),
    children: [
      {
        path: routes.LOGIN.path,
        element: (
          <Suspense>
            <routes.LOGIN.component />
          </Suspense>
        )
      },
      {
        path: routes.HOME.path,
        element: (
          <Suspense>
            <routes.HOME.component />
          </Suspense>
        ),
        children: [
          {
            path: routes.GARAGES.path,
            element: (
              <Suspense>
                <routes.GARAGES.component />
              </Suspense>
            )
          },
          {
            path: routes.STORAGE.path,
            element: (
              <Suspense>
                <routes.STORAGE.component />
              </Suspense>
            )
          },
          {
            path: routes.CARS.path,
            element: (
              <Suspense>
                <routes.CARS.component />
              </Suspense>
            )
          },
          {
            path: routes.USERS.path,
            element: (
              <Suspense>
                <routes.USERS.component />
              </Suspense>
            )
          },
          {
            path: routes.SETTINGS.path,
            element: (
              <Suspense>
                <routes.SETTINGS.component />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
])
