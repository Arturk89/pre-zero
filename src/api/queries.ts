import { useQuery } from '@tanstack/react-query'

const getQueryKey = () => ['users']

const getUsers = () =>
  fetch('https://randomuser.me/api/').then((res) => res.json())

export const useUsersQueries = () => {
  return useQuery({
    initialData: [],
    queryKey: getQueryKey(),
    queryFn: () => getUsers()
  })
}
