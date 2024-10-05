import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { Link } from "@nextui-org/link"
import clsx from "clsx"

import { Providers } from "./providers"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/config/fonts"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-default-100/50 font-satoshi antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          <main className="relative mx-auto flex min-h-screen flex-col bg-transparent xl:container xl:px-3">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
