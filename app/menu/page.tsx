"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { MenuFilter } from "@/components/menu-filter"
import { MenuItemCard } from "@/components/menu-item-card"
import { Footer } from "@/components/footer"

const menuItems = [
  {
    id: "1",
    name: "Signature Espresso",
    description: "Rich, bold espresso with notes of chocolate and caramel. Made from our premium house blend.",
    price: 3.5,
    image: "/espresso-coffee-cup.png",
    category: "coffee",
    isSpecial: false,
    dietary: ["Vegan", "Gluten-Free"],
  },
  {
    id: "2",
    name: "Artisan Croissant",
    description: "Buttery, flaky croissant baked fresh daily. Perfect with your morning coffee.",
    price: 4.25,
    image: "/golden-croissant-pastry.png",
    category: "food",
    isSpecial: false,
    dietary: ["Vegetarian"],
  },
  {
    id: "3",
    name: "Caramel Macchiato",
    description: "Smooth espresso with steamed milk, vanilla syrup, and rich caramel drizzle.",
    price: 5.75,
    image: "/caramel-macchiato.png",
    category: "coffee",
    isSpecial: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "4",
    name: "Avocado Toast",
    description: "Fresh avocado on artisan sourdough with cherry tomatoes, feta, and everything seasoning.",
    price: 8.5,
    image: "/avocado-toast.png",
    category: "food",
    isSpecial: false,
    dietary: ["Vegetarian", "Healthy"],
  },
  {
    id: "5",
    name: "Cold Brew Float",
    description: "Our signature cold brew coffee topped with vanilla ice cream and a drizzle of chocolate.",
    price: 6.25,
    image: "/cold-brew-coffee-float.png",
    category: "coffee",
    isSpecial: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "6",
    name: "Breakfast Burrito",
    description: "Scrambled eggs, bacon, cheese, and hash browns wrapped in a warm flour tortilla.",
    price: 9.75,
    image: "/breakfast-burrito.png",
    category: "food",
    isSpecial: false,
    dietary: [],
  },
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium ceremonial grade matcha whisked with steamed milk and a touch of honey.",
    price: 4.95,
    image: "/matcha-latte.png",
    category: "coffee",
    isSpecial: false,
    dietary: ["Vegetarian", "Antioxidant"],
  },
  {
    id: "8",
    name: "Chocolate Chip Muffin",
    description: "Moist, fluffy muffin loaded with premium dark chocolate chips. Baked fresh daily.",
    price: 3.75,
    image: "/chocolate-chip-muffin.png",
    category: "food",
    isSpecial: false,
    dietary: ["Vegetarian"],
  },
  {
    id: "9",
    name: "Seasonal Pumpkin Spice",
    description: "Limited time autumn blend with cinnamon, nutmeg, and real pumpkin. Available while supplies last.",
    price: 5.25,
    image: "/pumpkin-spice-latte.png",
    category: "coffee",
    isSpecial: true,
    dietary: ["Vegetarian", "Seasonal"],
  },
]

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems = menuItems.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "specials") return item.isSpecial
    return item.category === activeFilter
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our carefully crafted selection of premium coffees and delicious food, made with the finest
            ingredients and lots of love.
          </p>
        </div>

        {/* Filter */}
        <MenuFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} {...item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found for the selected filter.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
