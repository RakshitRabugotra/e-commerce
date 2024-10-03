"use client"

import { ProductSearch } from "@/components/base/search/product-search"
import LinkButton from "@/components/base/button/link-button"
import { ChevronLeft } from "@/components/icons"
import { useEffect, useState } from "react"
import { Product } from "@/types"
import { ProductCard } from "@/components/base/card/product-card"
import { searchProduct } from "@/service"

export default function ExplorePage() {
  const [search, setSearch] = useState("")
  // The products fetched from the search
  const [products, setProducts] = useState<Product[]>([])

  // Debounce the filterText state
  useEffect(() => {
    const handler = setTimeout(() => {
      // Do a search for the product
      searchProduct(search).then(result => result && setProducts(result))
    }, 300) // Adjust the delay as needed
    return () => {
      clearTimeout(handler)
    }
  }, [search])

  return (
    <>
      <header className="fixed inset-0 bottom-auto z-50 inline-flex h-20 items-center justify-between bg-background/80 px-3 backdrop-blur-sm">
        <LinkButton href="/" startContent={<ChevronLeft />} />
        <ProductSearch search={search} setSearch={setSearch} className="mx-4" />
      </header>
      {/* Product search results */}
      <section className="flex flex-row flex-wrap p-4 pt-20">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              {...product}
              key={product.id + "-" + index}
              className="basis-1/2"
            />
          ))
        ) : (
          <NoResults />
        )}
      </section>
    </>
  )
}

const NoResults = () => {
  return (
    <h3 className="text-xl font-medium text-default-600/70">
      No results found
    </h3>
  )
}
