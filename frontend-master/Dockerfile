# 1단계: 빌드 스테이지
FROM node:22.14.0-alpine AS build

WORKDIR /app

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

# 패키지 매니저 복사 및 의존성 설치
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

# 앱 소스 복사
COPY . .

# 환경 변수 파일 복사 (필요 시 .env.docker → .env)
COPY .env.docker .env

# 앱 빌드
RUN pnpm build

# 2단계: Nginx을 사용한 정적 호스팅
FROM nginx:alpine

# Nginx 설정 (SPA 대응)
COPY nginx.conf /etc/nginx/nginx.conf

# 정적 파일 복사
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
