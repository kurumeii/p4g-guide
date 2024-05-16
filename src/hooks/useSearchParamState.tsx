import queryString from 'query-string'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as R from 'remeda'

export default function useSearchParamState<T extends Record<string, string>>(
  defaultParams: T
) {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useMemo(
    () => R.merge(defaultParams, queryString.parse(searchParams.toString())),
    [defaultParams, searchParams]
  )

  const setParams = useCallback(
    (newParams: Partial<T>) => {
      setSearchParams(queryString.stringify(R.merge(params, newParams)))
    },
    [params, setSearchParams]
  )

  return [params, setParams] as const
}
