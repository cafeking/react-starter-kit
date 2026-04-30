export default function Button({ children, onClick, variant = 'primary' }) {
  // variant에 따른 스타일 설정
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200'

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
