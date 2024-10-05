import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

/**
 * Page prop types
 */
export interface DynamicPageProps {
  params: { id: string }
  searchParams?: { [key: string]: string | undefined }
}
