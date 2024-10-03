"use client"

import { useEffect, useState } from "react"

// Icons
import { ChevronLeft } from "@/components/icons"

// UI
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Skeleton } from "@nextui-org/skeleton"

// Constants
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Product } from "@/types"

const ImageCard: React.FC<Product> = ({ title, image }) => {
  // For showing a skeleton till the image loads
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Card
      radius="lg"
      shadow="none"
      className="w-full overflow-visible border-none"
    >
      <Skeleton isLoaded={isLoaded}>
        <CardBody className="w-hull aspect-square bg-white p-0">
          <Skeleton
            isLoaded={image != null && isLoaded}
            className="aspect-square w-full [&_*]:!max-w-full"
          >
            <Image
              alt={title}
              className="aspect-square w-full object-contain"
              src={image}
              loading="lazy"
            />
          </Skeleton>
        </CardBody>
        {/* The back button */}
        <Button
          as={Link}
          href="/"
          startContent={<ChevronLeft />}
          className="absolute left-3 top-3 z-10 aspect-square min-w-fit bg-black text-white"
        />
      </Skeleton>
    </Card>
  )
}

export default ImageCard
