enum Roles {
  ADMIN = 'ADMIN',
  ADMIN_USER = 'ADMIN_USER',
  DISPATCHER = 'DISPATCHER',
  USER = 'USER'
}

type RoleName = Roles.ADMIN | Roles.ADMIN_USER | Roles.DISPATCHER | Roles.USER

type RoleDetails = {
  name: string
  id: number
}

type UserRole = {
  [name in RoleName]: RoleDetails
}

export type { RoleName, RoleDetails, UserRole }
export { Roles }
