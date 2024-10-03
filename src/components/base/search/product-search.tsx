"use client"

import { useState } from "react"

// Components
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
// Icons
import { SearchIcon } from "@/components/icons"
import clsx from "clsx"

export const ProductSearch = ({
  search,
  setSearch,
  className,
}: {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  className?: string
}) => {
  return (
    <Input
      size="md"
      radius="full"
      variant="flat"
      className={clsx("max-w-md select-none", className)}
      classNames={{
        inputWrapper: "pr-0 h-11",
      }}
      value={search}
      placeholder="Shirt"
      onChange={e => setSearch(e.target.value)}
      endContent={<SubmitButton value={search} />}
    />
  )
}
const SubmitButton = ({ value }: { value: string }) => {
  return (
    <Button
      as={Link}
      className="aspect-square h-full min-w-fit rounded-full"
      startContent={<SearchIcon />}
      href={value ? `/explore/${value}` : "#"}
    />
  )
}
