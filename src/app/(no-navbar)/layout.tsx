import { PropsWithChildren } from "react"

export default async function NoNavbarLayout({ children }: PropsWithChildren) {
  return (
    <section className="font-montserrat relative flex min-h-screen flex-col items-center bg-default-50 pb-28">
      {children}
    </section>
  )
}
