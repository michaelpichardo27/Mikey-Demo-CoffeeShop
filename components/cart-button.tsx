"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { useState, useEffect } from "react"

export function CartButton() {
  const { state } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (state.itemCount > 0) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [state.itemCount])

  return (
    <Link href="/cart">
      <Button variant="outline" size="sm" className="relative bg-transparent">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Cart
        {state.itemCount > 0 && (
          <span
            className={`absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center transition-transform ${isAnimating ? "scale-125" : "scale-100"}`}
          >
            {state.itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}
