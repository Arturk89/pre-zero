import { lazy, ComponentType } from 'react'
import { PathStructure, Paths, CreateRoute, RouteObject } from './routes.model'
import { RoleDetails } from './roles.model'
import { roles, allRoles } from './roles'

export const paths: PathStructure = {
  [Paths.ROOT]: {
    name: '',
    path: '/',
    roles: allRoles
  },
  [Paths.HOME]: {
    name: 'Dzień dobry',
    path: '/home',
    roles: allRoles
  },
  [Paths.LOGIN]: {
    name: 'Logowanie',
    path: 'login',
    roles: allRoles
  },
  [Paths.STORAGE]: {
    name: 'Magazyn',
    path: 'storage',
    roles: [roles.ADMIN, roles.ADMIN_USER]
  },
  [Paths.GARAGES]: {
    name: 'Warsztat',
    path: 'garage',
    roles: [roles.ADMIN, roles.ADMIN_USER]
  },
  [Paths.CARS]: {
    name: 'Pojazdy',
    path: 'cars',
    roles: [roles.ADMIN, roles.ADMIN_USER]
  },
  [Paths.USERS]: {
    name: 'Uzytkownicy',
    path: 'users',
    roles: [roles.ADMIN, roles.ADMIN_USER]
  },
  [Paths.SETTINGS]: {
    name: 'Ustawienia',
    path: 'settings',
    roles: [roles.ADMIN, roles.ADMIN_USER]
  }
}

const Root = lazy(() =>
  import('layout/root').then((module) => ({ default: module.Root }))
)
const Home = lazy(() =>
  import('pages/home').then((module) => ({ default: module.Home }))
)
const Login = lazy(() =>
  import('pages/login').then((module) => ({ default: module.Login }))
)
const Storage = lazy(() =>
  import('pages/storage').then((module) => ({ default: module.Storage }))
)
const Garage = lazy(() =>
  import('pages/garage').then((module) => ({ default: module.Garage }))
)
const Cars = lazy(() =>
  import('pages/cars').then((module) => ({ default: module.Cars }))
)
const Users = lazy(() =>
  import('pages/users').then((module) => ({ default: module.Users }))
)
const Settings = lazy(() =>
  import('pages/settings').then((module) => ({ default: module.Settings }))
)

function createRoute(
  key: string,
  title: string,
  path: string,
  role: RoleDetails[],
  component: ComponentType
): CreateRoute {
  return { key, title, path, role, component }
}

export const routes: RouteObject = {
  [Paths.ROOT]: createRoute(
    'key-root',
    paths.ROOT.name,
    paths.ROOT.path,
    paths.ROOT.roles,
    Root
  ),
  [Paths.HOME]: createRoute(
    'key-home',
    paths.HOME.name,
    paths.HOME.path,
    paths.HOME.roles,
    Home
  ),
  [Paths.LOGIN]: createRoute(
    'key-login',
    paths.LOGIN.name,
    paths.LOGIN.path,
    paths.LOGIN.roles,
    Login
  ),
  [Paths.STORAGE]: createRoute(
    'key-storage',
    paths.STORAGE.name,
    paths.STORAGE.path,
    paths.STORAGE.roles,
    Storage
  ),
  [Paths.GARAGES]: createRoute(
    'key-garage',
    paths.GARAGES.name,
    paths.GARAGES.path,
    paths.GARAGES.roles,
    Garage
  ),
  [Paths.CARS]: createRoute(
    'key-cars',
    paths.CARS.name,
    paths.CARS.path,
    paths.CARS.roles,
    Cars
  ),
  [Paths.USERS]: createRoute(
    'key-users',
    paths.USERS.name,
    paths.USERS.path,
    paths.USERS.roles,
    Users
  ),
  [Paths.SETTINGS]: createRoute(
    'key-settings',
    paths.SETTINGS.name,
    paths.SETTINGS.path,
    paths.SETTINGS.roles,
    Settings
  )
}
