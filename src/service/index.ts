export const BASE_URL = `https://fakestoreapi.com/products/`

type ExtendedRequestInit = RequestInit & {
  queryParams?: Record<string, string>
}

/**
 *
 * @param endpoint The endpoint after BASE_URL
 * @param init normal options for the fetch
 * @returns Promise for the response
 */
export const productFetch = (endpoint: string, init?: ExtendedRequestInit) => {
  let sub = endpoint
  if (init && init.queryParams) {
    sub += "?" + new URLSearchParams(init.queryParams).toString()
  }
  return fetch(BASE_URL + sub, init)
}

/**
 *
 * @param id The id of the product
 * @param init normal options for the fetch
 * @returns Promise for the response returns a single `Product`
 */
export const getSingle = (id: string, init?: ExtendedRequestInit) =>
  productFetch(id, init)
