import { Link } from "react-router-dom"
// import { BrowserRouter, Link } from "react-router-dom"

const links = [
  { label: "בית", to: "/" },
  { label: "כל הפריטים", to: "/equipment" },
  { label: "הוספת פריט", to: "/equipment/new" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold text-slate-900">
          ציוד לאירועים
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}