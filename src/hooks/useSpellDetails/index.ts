import isError from 'helpers/isError'
import { useEffect, useState } from 'react'
import { SpellDetailed } from 'types/spell'
import Response from 'types/response'

const useSpellDetails = (url: string): Response<SpellDetailed> => {
  const [details, setDetails] = useState<SpellDetailed>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://www.dnd5eapi.co${url}`)
        if (!response.ok) {
          setError(error as Error)
          throw new Error((await response.json()).error)
        }
        const data = await response.json()
        data && setDetails(data)
      } catch (error) {
        console.log('error', error)
        setError(error as Error)
      }
    }
    fetchDetails()
  }, [])
  return [details, error]
}

export default useSpellDetails
