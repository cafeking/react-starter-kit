export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
