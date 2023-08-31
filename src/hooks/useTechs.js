import { getTechs } from '../services/techs'
import { useQuery } from '@tanstack/react-query'

export const useTechs = () => {
  const { data, isLoading } = useQuery(['techs'], async () => await getTechs(), {
    cacheTime: 0,
  })

  return {
    data,
    isLoading,
  }
}
