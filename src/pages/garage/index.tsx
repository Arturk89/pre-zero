import Example from 'components/table/table-main'
import { useUsersQueries } from 'api/queries'

export function Garage() {
  const data = useUsersQueries()
  console.log('data ', data)
  return <Example />
}
