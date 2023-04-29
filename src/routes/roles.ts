import { Roles, UserRole } from './roles.model'

export const roles: UserRole = {
  [Roles.ADMIN]: {
    name: 'Administrator',
    id: 1
  },
  [Roles.ADMIN_USER]: {
    name: 'Uzytkownik',
    id: 2
  },
  [Roles.DISPATCHER]: {
    name: 'Dyspozytor',
    id: 3
  },
  [Roles.USER]: {
    name: 'Pracownik',
    id: 4
  }
}
