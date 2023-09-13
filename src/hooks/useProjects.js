import { getProjects } from '../services/projects'
import { useQuery } from '@tanstack/react-query'

export const useProjects = () => {
  const { data, isLoading } = useQuery(['projects'], async () => await getProjects(), {
    cacheTime: 0,
  })

  return {
    data,
    isLoading,
  }
}
