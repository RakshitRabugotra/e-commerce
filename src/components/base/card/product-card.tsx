import { RatingStar } from "@/components/icons"
import { Product } from "@/types"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import clsx from "clsx"
import Image from "next/image"

export const ProductCard: React.FC<
  Product & {
    className?: string
    classNames?: {
      base?: string
      header?: string
      image?: string
      body?: string
    }
  }
> = ({ title, image, rating, price, ...rest }) => {
  return (
    <Card
      isPressable
      as={Link}
      href={"/product/" + rest.id}
      radius="none"
      shadow="none"
      className={clsx(
        "!aspect-auto max-w-[400px] rounded-xl bg-transparent p-1.5 shadow-lg",
        rest.className,
        rest.classNames?.base
      )}
    >
      <CardHeader
        className={clsx(
          "flex flex-col gap-2 rounded-xl bg-white p-0",
          rest.classNames?.header
        )}
      >
        <Image
          alt={"product-" + title}
          height={60}
          width={45}
          src={image}
          className={clsx(
            "aspect-square w-full object-contain",
            rest.classNames?.image
          )}
        />
      </CardHeader>
      <CardBody className={clsx("mt-2 p-0 px-1", rest.classNames?.body)}>
        <p className="inline-flex items-center gap-1 text-sm sm:text-base">
          <RatingStar />
          <strong>{rating.rate}</strong>
          <span className="text-gray-400">{` (${rating.count})`}</span>
        </p>
        <h2 className="max-w-full overflow-clip text-nowrap">{title}</h2>
        <p className="mt-1 text-lg font-medium text-success">{`$${price}`}</p>
      </CardBody>
    </Card>
  )
}
