import { ChevronLeft, ShoppingBag } from "@/components/icons"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import clsx from "clsx"
import React from "react"

export interface MobileHeaderProps {
  backHref?: string
  title: string
}

export default async function MobileHeader({
  title,
  backHref = "/",
}: MobileHeaderProps) {
  return (
    <header
      className={clsx(
        "sm:hidden",
        "fixed inset-0 bottom-auto z-50 h-20",
        "inline-flex items-center justify-center",
        "bg-background text-foreground"
      )}
    >
      <ButtonLink
        className="absolute left-3 top-1/2 -translate-y-1/2"
        href={backHref}
        startContent={<ChevronLeft />}
      />
      <h1 className="text-2xl font-medium capitalize">{title}</h1>
      <ButtonLink
        className="absolute right-3 top-1/2 -translate-y-1/2"
        href="/cart"
        startContent={<ShoppingBag />}
      />
    </header>
  )
}

const ButtonLink = ({
  href,
  className,
  startContent,
  children,
}: {
  href: string
  className?: string
  startContent?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <Button
      as={Link}
      href={href}
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
