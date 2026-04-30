import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* 카운터 섹션 */}
          <Card title="Counter">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold text-indigo-600">{count}</p>
              <div className="flex gap-2">
                <Button onClick={() => setCount(c => c + 1)}>
                  증가
                </Button>
                <Button
                  onClick={() => setCount(0)}
                  variant="secondary"
                >
                  초기화
                </Button>
                <Button
                  onClick={() => setCount(c => c - 1)}
                  variant="danger"
                >
                  감소
                </Button>
              </div>
            </div>
          </Card>

          {/* 소개 섹션 */}
          <Card title="시작하기">
            <div className="space-y-4 text-gray-700">
              <p>
                이것은 Vite + React + Tailwind CSS로 만든 Starter Kit입니다.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>⚡ Vite를 사용한 빠른 개발 환경</li>
                <li>🎨 Tailwind CSS를 사용한 스타일링</li>
                <li>⚛️ React 18 최신 버전</li>
                <li>🔧 재사용 가능한 컴포넌트 구조</li>
              </ul>
            </div>
          </Card>

          {/* 기능 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="빠른 성능">
              <p className="text-gray-600">
                Vite의 번들링 최적화로 빠른 로딩 속도를 제공합니다.
              </p>
            </Card>
            <Card title="확장 가능">
              <p className="text-gray-600">
                components 폴더에서 새로운 컴포넌트를 쉽게 추가할 수 있습니다.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
