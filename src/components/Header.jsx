export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              React Starter Kit
            </h1>
            <p className="text-gray-600 mt-1">
              Vite + React + Tailwind CSS
            </p>
          </div>
          <div className="text-2xl">⚛️</div>
        </div>
      </div>
    </header>
  )
}
