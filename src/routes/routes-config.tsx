import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const routesConfig = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <routes.HOME.component />,
    children: [
      {
        path: routes.GARAGES.path,
        element: <routes.GARAGES.component />
      },
      {
        path: routes.STORAGE.path,
        element: <routes.STORAGE.component />
      },
      {
        path: routes.CARS.path,
        element: <routes.CARS.component />
      },
      {
        path: routes.USERS.path,
        element: <routes.USERS.component />
      },
      {
        path: routes.SETTINGS.path,
        element: <routes.SETTINGS.component />
      }
    ]
  }
])
