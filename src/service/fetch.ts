export const BASE_URL = `https://fakestoreapi.com/products/`

/**
 * 
 * @param endpoint The endpoint after BASE_URL
 * @param init normal options for the fetch
 * @returns Promise for the response
 */
export const productFetch = (endpoint: string, init?: RequestInit) => fetch(BASE_URL + endpoint, init);

/**
 * 
 * @param id The id of the product
 * @param init normal options for the fetch
 * @returns Promise for the response returns a single `Product`
 */
export const getSingle = (id: string, init?: RequestInit) => productFetch(id, init);
