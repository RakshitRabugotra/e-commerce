import { CategoryChipProps } from "@/components/base/chips/category-chip"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "E-Commerce",
  description: "Find you ideal fashion for summer and winter",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Explore",
      href: "/explore",
    },
    {
      label: "Notifications",
      href: "/notifications",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
}

export const categories: CategoryChipProps[] = [
  { id: "a", name: "men" },
  { id: "b", name: "women" },
  { id: "c", name: "teen" },
  { id: "d", name: "kids" },
  { id: "e", name: "trendy" },
  { id: "f", name: "popular" },
]
