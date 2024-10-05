"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

import { SearchIcon, ShoppingBag } from "../icons"
import { ProductSearch } from "@/components/base/search/product-search"
import { Button } from "@nextui-org/button"

export default function Header() {
  return (
    <header
      className={clsx(
        "inline-flex items-center justify-between bg-background",
        "fixed inset-0 bottom-auto h-20 p-6",
        "z-50 mx-auto",
        "shadow-lg transition-colors duration-300 ease-in-out"
      )}
    >
      <Image
        src="/logo.svg"
        width={48}
        height={48}
        alt="company-logo"
        className="size-12"
      />
      <SearchBar />
      <ShoppingBag />
    </header>
  )
}

const SearchBar = () => {
  const [search, setSearch] = useState("")

  return (
    <ProductSearch
      search={search}
      setSearch={setSearch}
      startContent={
        <div className="px-1">
          <SearchIcon className="size-4 text-foreground-600/60" />
        </div>
      }
      endContent={null}
      className="hidden xl:block"
      classNames={{
        base: "rounded-xl overflow-hidden",
      }}
    />
  )
}
