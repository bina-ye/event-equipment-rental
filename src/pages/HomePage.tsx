import EquipmentCard from "@/components/items/EquipmentCard"

const equipmentList = [
  {
    id: 1,
    name: "אוהל אירועים 10X10",
    description: "אוהל שמש אפור עמיד למים, מתאים לשטח פתוח ולעשרות מוזמנים.",
    category: "אוהלים",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    badge: "מומלץ" as const,
  },
  {
    id: 2,
    name: "שולחנות מתקפלים",
    description: "שולחן פלסטיק קשיח ומתקפל, מתאים לאירועי חוץ ולשטח לא ישר.",
    category: "ריהוט",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    priceUnit: "ליחידה ליום",
    badge: "במבצע" as const,
  },
  {
    id: 3,
    name: "מערכת הגברה ניידת",
    description: "רמקול 300W עם מיקרופון אלחוטי וחיבור בלוטות' לטלפון או מחשב.",
    category: "הגברה",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    badge: "פופולרי" as const,
  },
{
  id: 4,
  name: "ערכת תאורה לאירועים",
  description: "פנסי LED צבעוניים עם שלט, מתאימים לתאורת אווירה באולם או בחצר.",
  category: "תאורה ואפקטים",
  price: 120,
  image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      badge: "פופולרי" as const,

},
]

export default function HomePage() {
    console.log("list:", equipmentList)
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          השכרת ציוד לאירועים
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          מגוון ציוד לאירועים בכל גדול — הזמנה פשוטה ומחירים נוחים.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {equipmentList.map((equipment) => {
      console.log("card:", equipment.name, equipment.price)
      return <EquipmentCard key={equipment.id} {...equipment} />
    })}
      </div>
    </section>
  )
}