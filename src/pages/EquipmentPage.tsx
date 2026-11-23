import EquipmentCard from "../components/items/EquipmentCard"
export default function EquipmentPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <EquipmentCard
        name="אוהל אירועים 10X10"
        description="אוהל שמש אפור עמיד למים, מתאים לשטח פתוח ולעשרות מוזמנים."
        category="אוהלים"
        price={450}
        image="https://images.pexels.com/photos/12432267/pexels-photo-12432267.jpeg"
      />
      <EquipmentCard
        name="שולחנות מתקפלים"
        description="שולחן פלסטיק קשיח, מתקפל, מתאים לאירועי חוץ."
        category="ריהוט"
        price={25}
        priceUnit="ליחידה ליום"
        image="/images/table.jpg"
      />
    </div>
  )
}