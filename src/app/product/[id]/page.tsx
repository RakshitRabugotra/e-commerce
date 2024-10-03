import { DynamicPageProps, Product } from "@/types"

// UI
// Components
import ImageCard from "@/components/base/card/image-card"

// Icons
import {
  ChevronRight,
  Heart,
  HeartFilledIcon,
  RatingStar,
  ShoppingBag,
} from "@/components/icons"
import { getSingle } from "@/service"
import { Button } from "@nextui-org/button"
import FlatButton from "@/components/base/button/flat-button"
import MobileHeader from "@/components/layout/mobile/header"

// The dynamic page showing the product details
export default async function ProductPage({ params }: DynamicPageProps) {
  const product = await getSingle(params.id)

  if (!product) {
    return <div>Internal Server Error</div>
  }

  return (
    <section className="font-montserrat relative flex min-h-screen flex-col items-center bg-default-50 pb-28">
      {/* The header */}
      <MobileHeader title="details" />

      {/* The image section with the card */}
      <div className="mt-20">
        <ImageCard {...product} />
      </div>
      {/* The section with headings */}
      <Description {...product} />
      {/* The proceed bar */}
      <CheckoutBar {...product} />
    </section>
  )
}

const Description: React.FC<Product> = ({
  title,
  rating,
  description,
  price,
}) => {
  return (
    <article className="flex w-full flex-col p-4">
      {/* The header section */}
      {/* The reviews */}
      <div className="inline-flex items-center justify-between">
        <div className="inline-flex items-center gap-1">
          <RatingStar className="text-amber-500" />
          {rating.rate}&nbsp;
          {`(${rating.count}) Reviews`}
        </div>

        <Button
          className="z-20 h-fit min-w-fit bg-transparent p-0 text-red-500"
          // onClick={handleLike}
        >
          <Heart size={24} filled={true} />
        </Button>
      </div>

      <h1 className="text-3xl font-semibold">{title}</h1>

      {/* The price */}

      <p className="text-xl font-bold text-success">{"$" + price.toFixed(2)}</p>

      {/* The description of the product */}
      <p className="mt-6">{description}</p>
    </article>
  )
}

const CheckoutBar: React.FC<Product> = ({ ...rest }) => {
  return (
    <section className="font-montserrat fixed inset-0 top-auto inline-flex items-center gap-4 bg-background/90 px-5 py-3 backdrop-blur-sm">
      <FlatButton
        className="basis-1/2 border-2 border-solid border-foreground bg-background font-semibold uppercase text-foreground"
        startContent={<ShoppingBag />}
      >
        Add to Cart
      </FlatButton>
      <FlatButton className="basis-1/2 border-2 border-solid border-foreground bg-foreground font-semibold uppercase text-background">
        Buy Now
      </FlatButton>
    </section>
  )
}
