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
  /** contain = fit whole image (may show padding); cover = fill area (may crop) */
  objectFit?: "contain" | "cover"
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
  objectFit = "contain",
  containerClassName,
  showSkeleton = true,
  className,
  ...rest
}: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const sizes = sizesByContext[sizesContext]
  const useCover = objectFit === "cover"

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
      <div
        className={cn(
          "absolute rounded-md",
          useCover ? "inset-0" : "inset-2 flex items-center justify-center bg-background/80"
        )}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt ?? "Product"}
          fill
          sizes={sizes}
          className={cn(
            useCover ? "object-cover" : "object-contain p-1",
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
