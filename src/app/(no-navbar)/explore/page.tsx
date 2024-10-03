"use client"

import { ProductSearch } from "@/components/base/search/product-search"
import LinkButton from "@/components/base/button/link-button"
import { ChevronLeft } from "@/components/icons"
import { useCallback, useEffect, useState } from "react"
import { Product } from "@/types"
import { ProductCard } from "@/components/base/card/product-card"
import { searchProduct } from "@/service"
import clsx from "clsx"

const COLOR = {
  FROM: "foreground",
  TO: "background",
  SCROLL_HEIGHT_THRESHOLD: 60,
}

export default function ExplorePage() {
  const [search, setSearch] = useState("")
  // The products fetched from the search
  const [products, setProducts] = useState<Product[]>([])
  // To change the color of the navbar on scroll
  const [color, setColor] = useState(COLOR.FROM)

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

  /**
   * To change the color of the header on scroll
   */
  const scrollColorChange = useCallback(() => {
    setColor(
      window.scrollY <= COLOR.SCROLL_HEIGHT_THRESHOLD ? COLOR.FROM : COLOR.TO
    )
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", scrollColorChange)

    return () => {
      window.removeEventListener("scroll", scrollColorChange)
    }
  }, [])

  return (
    <>
      <header
        className={clsx(
          "fixed inset-0 bottom-auto z-50",
          "inline-flex h-20 items-center justify-between",
          `bg-${color} transition-colors duration-400 ease-soft-spring`,
          "px-3 backdrop-blur-sm"
        )}
      >
        <LinkButton href="/" startContent={<ChevronLeft />} />
        <ProductSearch search={search} setSearch={setSearch} className="mx-4" />
      </header>
      {/* Product search results */}
      <section className="flex flex-row flex-wrap gap-3 px-6 pt-20">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              {...product}
              key={product.id + "-" + index}
              className="basis-[48%]"
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
    <h3 className="mt-20 text-xl font-medium text-default-600/70">
      No results found
    </h3>
  )
}
