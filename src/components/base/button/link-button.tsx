"use client"

import { useRouter } from "next/navigation"

import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import clsx from "clsx"

export interface LinkButtonProps {
  href?: string
  className?: string
  startContent?: React.ReactNode
  children?: React.ReactNode
}

export default function LinkButton({
  href,
  className,
  startContent,
  children,
}: LinkButtonProps) {
  const router = useRouter()

  return (
    <Button
      as={Link}
      onPress={() => (href ? router.push(href) : router.back())}
      startContent={startContent}
      radius="full"
      className={clsx(
        "z-10 aspect-square min-w-fit bg-foreground p-[2px] text-background",
        className
      )}
    >
      {children}
    </Button>
  )
}
