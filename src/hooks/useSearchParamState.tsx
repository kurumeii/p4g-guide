import queryString from "query-string"
import { useCallback, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import * as R from "remeda"

export default function useSearchParamState<T extends Record<string, any>>(
  defaultParams?: T
) {
  const [searchParams, setSearchParams] = useSearchParams()
  const setParams = useCallback(
    (newParams?: Partial<T>) => {
      setSearchParams(
        (prev) => {
          if (!newParams) return queryString.stringify({})
          const prevParams = queryString.parse(prev.toString())
          const mergedParams = R.merge(prevParams, newParams)
          return queryString.stringify(mergedParams, {
            sort: false,
          })
        },
        {
          replace: true,
        }
      )
    },
    [setSearchParams]
  )

  const params = useMemo(
    () =>
      R.merge(defaultParams, queryString.parse(searchParams.toString())) as T,
    [defaultParams, searchParams]
  )
  return [params, setParams] as const
}
