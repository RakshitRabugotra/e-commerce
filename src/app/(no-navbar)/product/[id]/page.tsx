import { DynamicPageProps, Product } from "@/types"

// UI
// Components
import ImageCard from "@/components/base/card/image-card"

// Icons
import { Heart, RatingStar, ShoppingBag } from "@/components/icons"
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
    <>
      {/* The header */}
      <MobileHeader title="details" />

      {/* The image section with the card */}
      <div className="flex flex-col items-center pt-20 xl:h-[80vh] xl:grow xl:flex-row xl:justify-around xl:px-3">
        <ImageCard {...product} />
        {/* The section with headings */}
        <div className="xl:h-1/2 xl:max-w-[40%]">
          <Description {...product} />
        </div>
      </div>
      {/* The proceed bar */}
      <CheckoutBar {...product} />
    </>
  )
}

const Description: React.FC<Product> = ({
  title,
  rating,
  description,
  price,
}) => {
  return (
    <article className="w-full p-4 xl:p-0">
      {/* The header section */}

      {/* The reviews */}

      <div className="flex flex-col xl:flex-col-reverse xl:gap-4">
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

        <h1 className="text-xl font-semibold xl:text-3xl">{title}</h1>
      </div>
      {/* The price */}

      <p className="text-xl font-bold text-success xl:mt-10 xl:text-4xl">
        {"$" + price.toFixed(2)}
      </p>

      {/* The description of the product */}
      <p className="mt-6">{description}</p>
    </article>
  )
}

const CheckoutBar: React.FC<Product> = ({ ...rest }) => {
  return (
    <section className="font-montserrat fixed inset-0 top-auto z-50 inline-flex items-center gap-4 bg-background/90 px-5 py-3 backdrop-blur-sm xl:hidden">
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
