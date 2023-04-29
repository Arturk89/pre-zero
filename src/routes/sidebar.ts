import { ComponentType } from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SettingsIcon from '@mui/icons-material/Settings'
import ConstructionIcon from '@mui/icons-material/Construction'
import GroupIcon from '@mui/icons-material/Group'
import { paths } from './routes'

type Sidebar = {
  id: string
  children: {
    id: string
    Icon: ComponentType
    href: string
    active: boolean
  }[]
}

export const sidebar: Sidebar[] = [
  {
    id: 'Dział Techniczny',
    children: [
      {
        id: 'Warsztat',
        Icon: ConstructionIcon,
        href: paths.GARAGES.path,
        active: true
      },
      {
        id: 'Magazyn',
        Icon: WarehouseIcon,
        href: paths.STORAGE.path,
        active: false
      },
      {
        id: 'Pojazdy',
        Icon: LocalShippingIcon,
        href: paths.CARS.path,
        active: false
      },
      {
        id: 'Uzytkownicy',
        Icon: GroupIcon,
        href: paths.USERS.path,
        active: false
      },
      {
        id: 'Ustawienia',
        Icon: SettingsIcon,
        href: paths.SETTINGS.path,
        active: false
      }
    ]
  }
]
