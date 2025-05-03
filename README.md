# Frontend-master

- React
- Vite
- JavaScript

## 개발 환경

- windows10

## 패키지 구성

- 도메인(주제) 기반 패키지 구성
- 도메인 하위에 요소들을 예시(product)와 같이 작성
- .env 파일은 개별로 만들어서 사용 또는 데이터 전달 예정

```
frontend-master
├─ node_modules                        # 설치된 패키지
│   └─ ...
│
├─ public                              # 정적 파일 (예: 로고, favicon, Open Graph 이미지 등)
│   └─ ...
│
├─ src                                 # 주요 코드 폴더
│   ├─ assets                          # 애플리케이션 내부에서 동적으로 불러올 공통 이미지
│   │
│   ├─ common                          # 전역에서 사용할 코드
│   │   ├─ page                        # 공통으로 사용할 페이지
│   │   ├─ hooks                       # 공통으로 사용할 훅
│   │   ├─ components                  # 공통으로 사용할 컴포넌트
│   │   ├─ style                       # 공통 ui 스타일 모음
│   │   ├─ utils                       # 공통으로 사용할 유틸리티 함수 및 객체
│   │   ├─ store                       # 공통으로 상태 모음
│   │   ├─ lib                         # 외부 라이브러리 설정 모음(axios 등)
│   │   └─ services                    # 공통 API 모음
│   │
│   ├─ domain                          # 도메인(기능) 별 패키지 모음
│   │   ├─ product                     # 상품 관련 코드
│   │   │   ├─ page                    # 상품 페이지 모음
│   │   │   ├─ hooks                   # 상품 전용 훅
│   │   │   ├─ services                # 상품 API 모음
│   │   │   ├─ style                   # 상품 관련 스타일 모음
│   │   │   ├─ utils                   # 상품 관련 유틸리티 함수 및 객체
│   │   │   ├─ routes                  # 상품 관련 라우팅 정의
│   │   │   ├─ components              # 상품 관련 컴포넌트 모음
│   │   │   └─ store                   # 상품 관련 상태 모음
│   │   │
│   │   ├─...
│   │   ...
│   │
│   ├─ App.jsx                         # 메인 컴포넌트, 최상위 라우팅 정의
│   └─ Main.jsx                        # React 진입점
│
├─ .gitignore                          # git 제외 파일
├─ .env                                # 환경 변수 파일 (ex. API KEY 등) !!! 공유 금지 파일로 .gitignore 추가 !!!
├─ eslint.config.js                    # ESLint 설정 파일
├─ index.html                          # 프로젝트의 기본 HTML 파일
├─ package.json                        # 프로젝트 설정 및 종속성 목록
├─ eslint.config.js                    # ESLint 설정 파일
└─ vite.config.js                      # vite 설정 파일

```

## 일정

- 2025.04.24 ~

## Review

-
