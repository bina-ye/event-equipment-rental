import { useState } from "react"
import { Button } from "@/components/ui/button"

export type EquipmentBadge = "חדש" | "פופולרי" | "מומלץ" | "במבצע"

type EquipmentCardProps = {
  name: string
  description: string
  category: string
  price: number
  image: string
  priceUnit?: string
  badge?: EquipmentBadge
}

const badgeStyles: Record<EquipmentBadge, string> = {
  "חדש": "bg-emerald-100 text-emerald-800",
  "פופולרי": "bg-amber-100 text-amber-800",
  "מומלץ": "bg-blue-100 text-blue-800",
  "במבצע": "bg-rose-100 text-rose-800",
}

export default function EquipmentCard({
  name,
  description,
  category,
  price,
  image,
  priceUnit = "ליום",
  badge,
}: EquipmentCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={name} loading="lazy" className="h-48 w-full object-cover" />
        {badge && (
          <span className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[badge]}`}>
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
            {category}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-sm text-slate-500">{priceUnit}</span>
          <span className="text-base font-semibold text-slate-900">₪{price}</span>
        </div>

        <div className="flex flex-col gap-2">
          <Button type="button" variant="secondary" className="w-full">
            לפרטים והזמנה
          </Button>
          <Button
            type="button"
            variant={isFavorite ? "default" : "outline"}
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((prev) => !prev)}
            className="w-full"
          >
            {isFavorite ? "הסר ממועדפים" : "הוסף למועדפים"}
          </Button>
        </div>
      </div>
    </div>
  )
}