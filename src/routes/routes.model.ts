import { ComponentType } from 'react'
import { RoleDetails } from './roles.model'

enum Paths {
  HOME = 'HOME',
  STORAGE = 'STORAGE',
  GARAGES = 'GARAGES',
  CARS = 'CARS',
  USERS = 'USERS',
  SETTINGS = 'SETTINGS'
}

type PathName =
  | Paths.HOME
  | Paths.STORAGE
  | Paths.GARAGES
  | Paths.CARS
  | Paths.USERS
  | Paths.SETTINGS

type PathStructure = {
  [name in PathName]: {
    name: string
    path: string
    roles: RoleDetails[]
  }
}

type CreateRoute = {
  key: string
  title: string
  path: string
  role: RoleDetails[]
  component: ComponentType
}

type RouteObject = {
  [name in PathName]: CreateRoute
}

export type { PathName, PathStructure, CreateRoute, RouteObject }
export { Paths }
