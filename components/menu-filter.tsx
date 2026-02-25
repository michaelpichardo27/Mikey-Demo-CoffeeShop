"use client"
import { Button } from "@/components/ui/button"

interface MenuFilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function MenuFilter({ activeFilter, onFilterChange }: MenuFilterProps) {
  const filters = [
    { id: "all", label: "All Items" },
    { id: "coffee", label: "Coffee" },
    { id: "food", label: "Food" },
    { id: "specials", label: "Specials" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className="px-6 py-2"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
