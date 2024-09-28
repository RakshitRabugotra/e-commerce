import { PropsWithChildren } from "react"

// Custom components
import Header from "@/components/layout/header"

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
