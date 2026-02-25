"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Check } from "lucide-react"
import { ProductImage } from "@/components/product-image"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface MenuItemProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  isSpecial?: boolean
  dietary?: string[]
}

export function MenuItemCard({ id, name, description, price, image, category, isSpecial, dietary }: MenuItemProps) {
  const { dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, image, category },
    })

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative w-full shrink-0">
        <ProductImage
          src={image}
          alt={name}
          sizesContext="grid"
          aspectRatio="4/3"
          containerClassName="rounded-none border-0 border-b"
        />
        {isSpecial && <Badge className="absolute top-2 left-2 z-10 bg-secondary text-secondary-foreground">Special</Badge>}
      </div>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold text-lg text-card-foreground">{name}</h3>
          <span className="font-bold text-primary text-lg shrink-0">${price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>

        {dietary && dietary.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {dietary.map((item) => (
              <Badge key={item} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        )}

        <Button
          className={`mt-auto w-full transition-all duration-300 ${isAdded ? "bg-green-600 hover:bg-green-700" : ""}`}
          size="sm"
          onClick={addToCart}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
