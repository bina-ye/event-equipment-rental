import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <img
        src="https://images.pexels.com/photos/10624594/pexels-photo-10624594.jpeg?_gl=1*13qow16*_ga*NDYxMTE4MDM0LjE3OTQzMzU1NjQ.*_ga_8JE65Q40S6*czE3OTQzMzU1NjMkbzEkZzEkdDE3OTQzMzU4OTYkajEzJGwwJGgw"
        alt="אירוע באוויר הפתוח"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
          כל מה שצריך לאירוע מושלם, במקום אחד
        </h1>
        <p className="max-w-xl text-base text-slate-200 sm:text-lg">
          אוהלים, הגברה, שולחנות וכיסאות, תאורה ועוד — בהשכרה יומית, עם
          משלוח והתקנה.
        </p>
        <Link to="/equipment">
          <Button size="lg">לכל הפריטים</Button>
        </Link>
      </div>
    </section>
  )
}