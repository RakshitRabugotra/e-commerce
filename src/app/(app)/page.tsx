import Image from "next/image"

// Next UI
import { Link } from "@nextui-org/link"

// Custom components
import Slider from "@/components/base/slider"
import { CategoryChip } from "@/components/base/chips/category-chip"

// Config
import { categories } from "@/config/site"
import { ProductCard } from "@/components/base/card/product-card"
import { productFetch } from "@/service"
import { Product } from "@/types"

export default async function Home() {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-4 [&>*]:w-full">
      <HeroSection />
      <CategoryChips />
      <CuratedProducts />
    </section>
  )
}

const HeroSection = () => {
  return (
    <section>
      <Image
        src={"/images/main-banner.webp"}
        width={2048}
        height={683}
        alt="main-banner"
      />
    </section>
  )
}

interface TopHeadingBannerProps {
  heading: string
  hyperlinkText: string
  href?: string
}

const TopHeadingBanner: React.FC<TopHeadingBannerProps> = ({
  heading,
  hyperlinkText,
  href = "#",
}) => {
  return (
    <h1 className="px-6 font-semibold">
      {heading}
      <span className="float-right inline-block">
        <Link href={href} className="text-sm">
          {hyperlinkText}
        </Link>
      </span>
    </h1>
  )
}

const CategoryChips = () => {
  return (
    <section>
      <TopHeadingBanner
        heading="Shop By Category"
        hyperlinkText="See all"
        href="#"
      />

      <div className="mt-6">
        <Slider
          items={categories}
          className="pl-4"
          renderItem={({ key, ...rest }) => (
            <CategoryChip key={key} {...rest} />
          )}
        />
      </div>
    </section>
  )
}

const CuratedProducts = async () => {
  // Fetch the products
  const response = await productFetch("", {
    queryParams: {
      limit: "5",
    },
  })
  const products = (await response.json()) as Product[]

  return (
    <section>
      <TopHeadingBanner
        heading="Curated For You"
        hyperlinkText="See all"
        href="#"
      />

      <div className="mt-6">
        <Slider
          className="gap-4 pl-6"
          renderItem={({ key, ...props }) => (
            <ProductCard
              {...props}
              key={key}
              classNames={{ base: "w-[50%] max-w-[50%] aspect-[3/4]" }}
            />
          )}
          items={products}
        />
      </div>
    </section>
  )
}
