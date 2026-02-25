"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export type ProductImageSizesContext = "grid" | "thumbnail" | "card"

const sizesByContext: Record<ProductImageSizesContext, string> = {
  grid: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  thumbnail: "96px",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}

export interface ProductImageProps extends Omit<ImageProps, "fill" | "style"> {
  /** Grid (menu grid), thumbnail (cart row), or card (single card) */
  sizesContext?: ProductImageSizesContext
  /** Aspect ratio class, e.g. aspect-[4/3] or aspect-square */
  aspectRatio?: "4/3" | "square" | "3/4"
  /** Optional custom className for the wrapper */
  containerClassName?: string
  /** Show skeleton while loading */
  showSkeleton?: boolean
}

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  square: "aspect-square",
  "3/4": "aspect-[3/4]",
}

export function ProductImage({
  src,
  alt,
  sizesContext = "grid",
  aspectRatio = "4/3",
  containerClassName,
  showSkeleton = true,
  className,
  ...rest
}: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const sizes = sizesByContext[sizesContext]

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border bg-muted/50",
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {showSkeleton && isLoading && (
        <div
          className="absolute inset-0 animate-pulse bg-muted"
          aria-hidden
        />
      )}
      <div className="absolute inset-2 flex items-center justify-center rounded-md bg-background/80">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt ?? "Product"}
          fill
          sizes={sizes}
          className={cn(
            "object-contain p-1",
            isLoading && "opacity-0",
            className
          )}
          onLoad={() => setIsLoading(false)}
          {...rest}
        />
      </div>
    </div>
  )
}
