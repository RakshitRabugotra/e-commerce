import clsx from "clsx"
import { ShoppingBag } from "../icons"

export default function Header() {
  return (
    <header
      className={clsx(
        "inline-flex items-center justify-between",
        "fixed inset-0 bottom-auto h-20 p-6",
        "container mx-auto max-w-[1600px]"
      )}
    >
      <p>Logo</p>
      <ShoppingBag />
    </header>
  )
}
