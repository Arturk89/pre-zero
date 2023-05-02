import { ComponentType } from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SettingsIcon from '@mui/icons-material/Settings'
import ConstructionIcon from '@mui/icons-material/Construction'
import GroupIcon from '@mui/icons-material/Group'
import { paths } from './routes'

type Sidebar = {
  name: string
  children: {
    name: string
    Icon: ComponentType
    href: string
    active: boolean
  }[]
}

export const sidebar: Sidebar[] = [
  {
    name: 'Dział Techniczny',
    children: [
      {
        name: 'Warsztat',
        Icon: ConstructionIcon,
        href: paths.GARAGES.path,
        active: true
      },
      {
        name: 'Magazyn',
        Icon: WarehouseIcon,
        href: paths.STORAGE.path,
        active: false
      },
      {
        name: 'Pojazdy',
        Icon: LocalShippingIcon,
        href: paths.CARS.path,
        active: false
      },
      {
        name: 'Uzytkownicy',
        Icon: GroupIcon,
        href: paths.USERS.path,
        active: false
      },
      {
        name: 'Ustawienia',
        Icon: SettingsIcon,
        href: paths.SETTINGS.path,
        active: false
      }
    ]
  }
]
