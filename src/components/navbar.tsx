import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar"
import { Button } from "@nextui-org/button"
import { Kbd } from "@nextui-org/kbd"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { link as linkStyles } from "@nextui-org/theme"
import NextLink from "next/link"
import clsx from "clsx"

import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"
import { HeartFilledIcon, SearchIcon } from "@/components/icons"

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  )

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 xl:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:font-medium data-[active=true]:text-primary"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 xl:flex xl:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 xl:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden xl:flex">
          <Button
            isExternal
            as={Link}
            className="bg-default-100 text-sm font-normal text-default-600"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="fixed inset-0 top-auto basis-1 bg-white pl-4 xl:hidden"
        justify="end"
      >
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  )
}
