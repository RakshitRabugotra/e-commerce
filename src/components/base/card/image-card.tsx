"use client"

import { useEffect, useState } from "react"

// UI
import { Card, CardBody } from "@nextui-org/card"
import { Skeleton } from "@nextui-org/skeleton"

// Constants
import { Product } from "@/types"
import Image from "next/image"
import clsx from "clsx"

const ImageCard: React.FC<Product & { className?: string }> = ({
  title,
  image,
  className,
}) => {
  // For showing a skeleton till the image loads
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Card
      radius="none"
      shadow="none"
      className={clsx(
        "my-auto aspect-square h-min w-full",
        "border-none",
        "xl:max-h-[80vh] xl:max-w-[80vh]",
        className
      )}
    >
      <CardBody className="w-hull aspect-square bg-white p-0">
        <Skeleton
          isLoaded={image != null && isLoaded}
          className="aspect-square w-full xl:aspect-auto [&_*]:!max-w-full"
        >
          <Image
            alt={title}
            className="mx-auto block aspect-square w-full max-w-full object-contain"
            src={image}
            width={500}
            height={500}
            loading="lazy"
          />
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default ImageCard
