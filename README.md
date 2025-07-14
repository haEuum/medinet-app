## 📁 프로젝트 폴더 구조

```plaintext
lib/
├── core/                # 앱 전역 설정 및 테마, 라우팅 등 공통 모듈
│   ├── constants/       # 앱 전체에서 사용되는 상수 정의
│   ├── router/          # go_router 등 라우팅 설정
│   └── theme/           # 색상, 폰트, 테마 관련 설정

├── data/                # 외부 데이터와의 통신 계층
│   ├── datasources/     # API 통신 정의 및 구현 (Dio 등)
│   ├── models/          # 서버와 주고받는 DTO, 응답 모델 정의
│   └── services/        # Repository 및 데이터 가공 서비스

├── domain/              # 비즈니스 로직 계층
│   ├── entities/        # 핵심 도메인 모델 정의
│   └── usecases/        # 주요 기능/로직 단위 (ex. 로그인 유스케이스)

├── presentation/        # 화면 구성 및 UI 계층
│   ├── screens/         # 각 페이지(스크린) 단위로 분리
│   └── widgets/         # 공통 위젯, UI 컴포넌트들

└── main.dart            # 앱 시작점
```