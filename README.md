# 🤖 Robo-Advisor Service Frontend

사용자 친화적인 인터페이스를 통해 실시간 주식 데이터 시각화와 AI 기반 투자 상담 경험을 제공하는 React 기반 프론트엔드 애플리케이션입니다.

## 📋 목차

- [개요](#개요)
- [배포 주소](#배포-주소)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [주요 기능](#주요-기능)
- [설치 및 실행](#설치-및-실행)
- [환경 설정](#환경-설정)
- [배포](#배포)

---

## 개요

**Robo-Advisor Service** 프론트엔드는 복잡한 금융 데이터를 직관적인 대시보드로 시각화하고, 비동기 통신을 통해 지연 없는 AI 투자 상담 환경을 제공합니다. **React 19**와 **Vite**를 사용하여 고성능 웹 환경을 구축하였으며, **Tailwind CSS**를 활용해 반응형 디자인을 구현했습니다.

## 배포 주소

**🚀 [전봉준 AI 투자 상담 서비스 바로가기](https://fe-kohl-three.vercel.app/)**

## 기술 스택

| 구분 | 기술 |
|------|------|
| **Library** | React 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM v7 |
| **API Client** | Axios |
| **Animation** | Lottie-react (Taegeukgi, Loader) |

## 프로젝트 구조

```text
src/
├── assets/             # CSS 스타일 및 JSON 애니메이션 파일
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── dashboard/      # 주식 리스트, 상승/하락 종목 등 대시보드 전용 컴포넌트
│   ├── main/           # Hero, About 섹션 등 메인 페이지 컴포넌트
│   └── hooks/          # useDebounce 등 커스텀 훅
├── lib/                # API 통신 설정 (Axios 인스턴스)
├── pages/              # 라우트별 페이지 컴포넌트 (Main, Chat, Detail, News 등)
├── utils/              # 채팅 처리 및 시장 상태 확인 유틸리티
├── App.jsx             # 메인 앱 레이아웃 및 Provider 설정
└── Routes.jsx          # 앱 라우팅 정의
```

---

## ✨ 주요 기능

### 📈 실시간 주식 대시보드
* **시장 지표 시각화**: KOSPI, KOSDAQ 등 주요 지수와 거래 상위 종목 정보를 한눈에 파악할 수 있는 대시보드를 제공합니다.
* **데이터 필터링**: 급등주(Top Gainers), 급락주(Top Losers), 거래량 상위 종목별 실시간 리스트를 확인할 수 있습니다.

### 💬 AI 투자 상담 서비스
* **인터랙티브 챗봇 UI**: 사용자의 질문에 실시간으로 답변하는 비동기 채팅 인터페이스를 구축했습니다.
* **애니메이션 피드백**: Lottie를 활용한 로딩 애니메이션으로 AI 응답 대기 중 사용자 경험을 개선했습니다.

### 🔍 주식 상세 분석 및 관리
* **기술적 지표 제공**: 특정 종목의 가격 변동과 다양한 기술적 지표를 상세 페이지에서 제공합니다.
* **관심 종목(Watchlist)**: 사용자가 선호하는 종목을 별도로 관리하고 추적할 수 있는 기능을 제공합니다.

### 📰 최신 금융 뉴스
* **실시간 뉴스 통합**: 종목별 최신 이슈와 시장 소식을 모달 및 전용 페이지를 통해 실시간으로 제공합니다.

---

## ⚙️ 설치 및 실행

### 사전 요구사항
* **Node.js 18.x** 이상
* **npm** 또는 **yarn**

### 로컬 실행
1.  **저장소 클론**
    ```bash
    git clone [https://github.com/SK-Shieldus-3rd-Mini-Project/fe.git](https://github.com/SK-Shieldus-3rd-Mini-Project/fe.git)
    cd fe
    ```

2.  **의존성 설치**
    ```bash
    npm install
    ```

3.  **개발 서버 실행**
    ```bash
    npm run dev
    ```
    * 실행 후 브라우저에서 `http://localhost:5173`으로 접속합니다.

---

## 🔐 환경 설정

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 백엔드 API 서버 주소를 설정해야 합니다.

```env
VITE_API_BASE_URL=http://your-backend-api-url:8080
```

---
## 🚀 배포
### Docker
```
# 이미지 빌드
docker build -t roboadvisor-frontend .

# 컨테이너 실행
docker run -p 80:80 roboadvisor-frontend
```

### Kubernetes
k8s/ 디렉토리에 포함된 Manifest 파일을 사용하여 배포가 가능합니다.
```
kubectl apply -f k8s/
```








---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
