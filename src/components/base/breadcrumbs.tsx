"use client"

import { Link } from "@nextui-org/link"
import { usePathname } from "next/navigation"
import { ChevronRight, HomeIcon } from "../icons"

export default function BreadCrumbs() {
  const pathname = usePathname()

  return (
    <div>
      {pathname.split("/").map((location, index) => (
        <Link key={index + "-" + location}>
          {index !== 0 && (
            <span className="px-1">
              <ChevronRight className="text-foreground/60" />
            </span>
          )}
          {location ? location : <HomeIcon />}
        </Link>
      ))}
    </div>
  )
}
