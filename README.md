# React Starter Kit

Vite + React + Tailwind CSS로 구성된 빠르고 간단한 React 프로젝트 스타터 킷입니다.

## 프로젝트 구조

```
react-starter-kit/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트들
│   │   ├── Header.jsx       # 헤더 컴포넌트
│   │   ├── Button.jsx       # 버튼 컴포넌트
│   │   └── Card.jsx         # 카드 컴포넌트
│   ├── App.jsx              # 메인 App 컴포넌트
│   ├── main.jsx             # 진입점
│   └── index.css            # 전역 스타일 (Tailwind)
├── index.html               # HTML 진입점
├── vite.config.js           # Vite 설정
├── tailwind.config.js       # Tailwind CSS 설정
├── postcss.config.js        # PostCSS 설정
├── package.json             # 프로젝트 의존성
└── README.md                # 이 파일
```

## 설치

```bash
# 의존성 설치
npm install
```

## 개발

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev
```

## 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 기능

- ⚡ **Vite**: 빠른 개발 환경과 최적화된 빌드
- 🎨 **Tailwind CSS**: 유틸리티 기반의 CSS 프레임워크
- ⚛️ **React 18**: 최신 React 버전과 Hooks
- 🔧 **재사용 가능한 컴포넌트**: 확장 가능한 컴포넌트 구조

## 포함된 컴포넌트

### Header
페이지 상단에 표시되는 헤더 컴포넌트입니다.

### Button
다양한 스타일(primary, secondary, danger)을 지원하는 버튼 컴포넌트입니다.

```jsx
<Button onClick={handleClick}>클릭</Button>
<Button variant="secondary">보조</Button>
<Button variant="danger">위험</Button>
```

### Card
내용을 감싸는 카드 컴포넌트로, 제목을 선택적으로 포함할 수 있습니다.

```jsx
<Card title="제목">
  <p>카드 내용</p>
</Card>
```

## 시작하기

1. 새 컴포넌트를 `src/components/` 폴더에 생성합니다.
2. `App.jsx`에서 컴포넌트를 임포트하여 사용합니다.
3. Tailwind CSS 클래스로 스타일을 적용합니다.

## 개발 팁

- 핫 모듈 리플로드(HMR) 덕분에 파일 변경 시 즉시 반영됩니다.
- Tailwind CSS IntelliSense 플러그인을 VS Code에 설치하면 개발이 더 편합니다.
- `src/index.css`에서 추가 전역 스타일을 정의할 수 있습니다.

## 라이선스

MIT
