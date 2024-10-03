import clsx from "clsx"
import React from "react"

import LinkButton from "@/components/base/button/link-button"
import { ChevronLeft, ShoppingBag } from "@/components/icons"

export interface MobileHeaderProps {
  backHref?: string
  title: string
}

export default async function MobileHeader({
  title,
  backHref,
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
      <LinkButton
        className="absolute left-3 top-1/2 -translate-y-1/2"
        href={backHref}
        startContent={<ChevronLeft />}
      />
      <h1 className="text-2xl font-medium capitalize">{title}</h1>
      <LinkButton
        className="absolute right-3 top-1/2 -translate-y-1/2"
        href="/cart"
        startContent={<ShoppingBag />}
      />
    </header>
  )
}
