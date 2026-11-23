export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm sm:flex-row">
        <span className="font-semibold text-white">ציוד לאירועים</span>
        <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
      </div>
    </footer>
  )
}