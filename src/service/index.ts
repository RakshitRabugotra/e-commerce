import { Product } from "@/types"

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
export const getSingle = async (id: string, init?: ExtendedRequestInit) => {
  try {
    const response = await productFetch(id, init)
    return (await response.json()) as Product
  } catch (error) {
    console.error("error while fetching product: ", error)
    return null
  }
}

/**
 * A dummy search api, but manually searches through list of all products
 */
export const searchProduct = async (name: string) => {
  try {
    const response = await productFetch("")
    const products = (await response.json()) as Product[]
    return getMatching(name, products, item => item.title)
  } catch (error) {
    console.error("error while searching for products: ", error)
    return null
  }
}

/**
 * Private utilities
 */
function getMatching<T>(
  text: string,
  array: T[],
  keyGetter: (item: T) => string
) {
  return array.filter(item => {
    const content = keyGetter(item)
    return content.toLowerCase().includes(text.toLowerCase())
  })
}
