import EquipmentCard from "@/components/items/EquipmentCard"

const equipmentList = [
  {
    id: 1,
    name: "אוהל אירועים 10X10",
    description: "אוהל שמש אפור עמיד למים, מתאים לשטח פתוח ולעשרות מוזמנים.",
    category: "אוהלים",
    price: 450,
    image: "/images/tent.jpg",
    badge: "מומלץ" as const,
  },
  {
    id: 2,
    name: "שולחנות מתקפלים",
    description: "שולחן פלסטיק קשיח ומתקפל, מתאים לאירועי חוץ ולשטח לא ישר.",
    category: "ריהוט",
    price: 25,
    image: "/images/table.jpg",
    priceUnit: "ליחידה ליום",
    badge: "במבצע" as const,
  },
  {
    id: 3,
    name: "מערכת הגברה ניידת",
    description: "רמקול 300W עם מיקרופון אלחוטי וחיבור בלוטות' לטלפון או מחשב.",
    category: "הגברה",
    price: 180,
    image: "/images/speaker.jpg",
    badge: "פופולרי" as const,
  },
  {
    id: 4,
    name: "מכונת ערפול",
    description: "מכונת עשן כבד לאירועים וריקודים, עם שלט רחוק ומיכל לנוזל.",
    category: "תאורה ואפקטים",
    price: 120,
    image: "/images/fog.jpg",
    badge: "חדש" as const,
  },
]

export default function FeaturedItemsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">הפריטים המבוקשים ביותר</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {equipmentList.map((equipment) => (
          <EquipmentCard key={equipment.id} {...equipment} />
        ))}
      </div>
    </section>
  )
}