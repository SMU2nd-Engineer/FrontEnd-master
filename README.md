# 🛠️ Frontend-master

팬과 팬을 연결하는 커뮤니티 플랫폼 **Fanit**의 프론트엔드 프로젝트입니다. React 기반의 SPA로, 상품, 게시판, 채팅 등 다양한 기능을 제공합니다.

---

## 📌 주요 기능

- 사용자 인증 및 회원가입/로그인
- 게시글 작성 및 수정 (Quill 에디터 사용)
- 1:1 실시간 채팅 인터페이스
- 이미지 업로드 및 AWS S3 연동
- 상품 등록 및 조회
- 카테고리 필터링 및 검색 기능
- 마이페이지 및 사용자 정보 관리
- 공연 조회 및 정보 제공

---

## ⚙️ 개발 환경 및 기술 스택

| 분류        | 기술 스택         |
| ----------- | ----------------- |
| Language    | JavaScript        |
| Framework   | React, Vite       |
| State Mgmt  | Zustand           |
| Editor      | React-Quill       |
| Routing     | React Router DOM  |
| Form        | React Hook Form   |
| HTTP Client | Axios             |
| Style       | Styled Components |
| Build Tool  | pnpm              |
| Infra       | AWS EC2, Nginx    |

---

## 📁 프로젝트 구조

도메인 기반 패키지 구조

```
frontend-master
├─ public
├─ src
│  ├─ assets
│  ├─ page
│  ├─ hooks
│  ├─ components
│  ├─ style
│  ├─ utils
│  ├─ store
│  ├─ lib
│  ├─ services
│  ├─ domain
│  │  └─ product
│  │     ├─ page
│  │     ├─ hooks
│  │     ├─ services
│  │     ├─ style
│  │     ├─ utils
│  │     ├─ routes
│  │     ├─ components
│  │     └─ store
│  ├─ App.jsx
│  └─ Main.jsx
├─ .env
├─ .gitignore
├─ index.html
├─ package.json
├─ eslint.config.js
└─ vite.config.js
```

---

## 📌 패키지 구성 설명

- assets : 동적 이미지 자료
- components : 공용 컴포넌트
- domain
  - board: 게시판 CRUD, 댓글 등 게시판 중심 기능 담당
  - chat: 1:1 채팅
  - mypage : 마이페이지 및 관심사 관련 로직
  - payment: 결제 요청, 결제 결과 저장 등 처리
  - products: 상품 정보 등록 및 수정 관리
  - search: 키워드 기반 검색 등 구현
  - ticket: 티켓 확인 및 상태 관리
  - user: 회원가입, 로그인 등 사용자 인증 및 관리 기능
- hooks: 공용 커스텀 훅
- lib : axios 설정 파일 존재
- page : header, footer 등 공용 페이지
- services : 공용 API 서비스
- store : 전역 상태 저장소
- style : 공용 스타일
- utils : 공용 기능

---

## 🐳 실행 방법

1. 패키지 설치

```bash
pnpm install
```

2. 개발 서버 실행

```bash
pnpm dev
```

3. 빌드

```bash
pnpm build
```

---

## 📦 환경 변수 (.env 예시)

```env

VITE_API_BASE_URL=https://api.fanit.com         # API 서버 URL
VITE_BACK_WEB_SOCKET_URL=your-web-socket-url    # WebSocket 주소

```

---

## 🧪 테스트

- Postman을 통해 백엔드 API와 연동하여 UI 시나리오 테스트
- JWT 인증 API의 경우 `Authorization: Bearer {token}` 필요

---

## 📅 개발 기간

- 시작일: 2025.04.24 ~ 2025.06.04

---

## 📌 향후 개선 방향

알림 기능 FCM 연동

리팩토링을 통한 불필요한 리렌더링 개선

유지 보수 향상을 위한 AXIOS 요청 방식 통일

채팅방 사용자 상태 관리 기능 고도화

---

## 📬 문의

- 이메일: otr322@gmail.com
