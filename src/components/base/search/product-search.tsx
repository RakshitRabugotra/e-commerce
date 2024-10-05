"use client"

// Components
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Input, InputProps } from "@nextui-org/input"
// Icons
import { SearchIcon } from "@/components/icons"
import clsx from "clsx"
import React from "react"

export interface ProductSearchProps extends InputProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const ProductSearch = ({
  search,
  setSearch,
  className,
  ...rest
}: ProductSearchProps) => {
  return (
    <Input
      size="md"
      radius="none"
      variant="flat"
      className={clsx(
        "max-w-md select-none text-xl font-medium focus-within:border-foreground",
        className
      )}
      classNames={{
        inputWrapper: "pr-0 h-11",
      }}
      value={search}
      placeholder="Shirt"
      onChange={e => setSearch(e.target.value)}
      endContent={<SubmitButton value={search} />}
      {...rest}
    />
  )
}
const SubmitButton = ({ value }: { value: string }) => {
  return (
    <Button
      as={Link}
      disabled
      isDisabled
      radius="none"
      className="aspect-square h-full min-w-fit p-1"
      startContent={<SearchIcon className="text-sm" />}
    />
  )
}
