# 강민수 · AI Engineer Portfolio

> LLM 에이전트와 ML 시스템을 만들고, 실제로 돌아가는 서비스로 배포합니다.

개인 포트폴리오 사이트의 소스 레포입니다. 프로젝트 케이스 스터디와 기술 아티클을 함께 다루는 하이브리드 구성으로, Astro 5 + Tailwind CSS 4로 작성됐고 GitHub Actions로 빌드되어 GitHub Pages에 자동 배포됩니다.

- **라이브 사이트**: <https://minsu5452.github.io>
- **GitHub 프로필**: <https://github.com/Minsu5452>

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | 홈. 소개와 대표 프로젝트 4건, 최근 글 |
| `/projects/` | 프로젝트 16건. 실무 / 수상 / 공모전 / 학부 섹션과 앵커 내비 |
| `/projects/<slug>/` | 케이스 스터디. 문제·아키텍처·기술 결정·결과, 목차, 관련 글 |
| `/articles/` | 기술 아티클 허브. 프로젝트에서 쓴 기술의 개념·설계 판단·실무 적용 |
| `/articles/<slug>/` | 아티클. 목차·읽기 시간·이전/다음 글·관련 프로젝트·코드 복사 |
| `/cv/` | CV. Skills 포함 전체 이력, A4 인쇄 CSS 지원 |
| `/rss.xml` | 아티클 RSS 피드 |

구 `/notes/*` 경로는 `/articles/*`로 리다이렉트됩니다 (`astro.config.mjs`의 `redirects`).

## 기술 스택

- **Framework**: [Astro 5](https://astro.build) (정적 출력, Content Layer로 아티클·케이스 스터디 관리)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (CSS 변수 토큰, 라이트/다크 테마, 사이드바 레일 셸)
- **Font**: [Pretendard Variable](https://github.com/orioncactus/pretendard) 자체 호스팅 (dynamic subset)
- **배포**: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 콘텐츠 데이터 구조

프로젝트 메타데이터는 `src/data/projects.ts` 한 파일에서 관리하고, 케이스 스터디 본문은 `src/content/projects/<slug>.md`에 둡니다. 두 축은 빌드 타임에 1:1 대응을 검증하므로(본문 누락·고아 파일 모두 실패) 목록·상세 페이지 사이의 정보 불일치가 생기지 않습니다.

```ts
// src/data/projects.ts
export interface Project {
  slug: string;
  title: string;
  category: "work" | "award" | "comp" | "academic";
  badge: string;       // 연도·소속 (예: "2026 · 데이콘")
  result?: string;     // 성과 칩 (예: "1등", "상위 5.2%", "진행 중")
  period: string;
  org: string;
  summary: string;
  hero?: string;       // /projects/<name>.svg
  github?: string;
  external?: { label: string; url: string }[];
  stack: string[];
  featured?: boolean;
  featuredOrder?: number;
}
```

아티클은 `src/content/articles/*.md`에 frontmatter로 작성합니다. `project` 필드에 프로젝트 slug를 적으면 아티클 하단에 관련 프로젝트 카드가, 케이스 스터디에 "이 프로젝트의 글" 목록이 자동으로 연결됩니다. slug가 `projects.ts`에 없으면 빌드가 실패합니다. 읽기 시간은 remark 플러그인이 분당 500자 기준으로 계산해 주입합니다.

```yaml
---
title: 아티클 제목
description: 목록·메타에 쓰이는 한 줄 요약
pubDate: 2026-07-12
topic: "RAG·Agent"   # RAG·Agent | 서빙·인프라 | 평가 | 통계
tags: ["LangGraph", "RAG"]
project: marine-domain-rag   # 선택
draft: false                 # true면 빌드에서 제외
---
```

## 디렉터리 구조

```
src/
├── components/
│   ├── cv/TimeLine.astro
│   ├── ArticleRow.astro     # 아티클 목록 행 (compact 변형 포함)
│   ├── BaseHead.astro       # 공유 메타 (canonical, OG, RSS, Schema.org)
│   ├── CodeCopy.astro       # 코드 블록 복사 버튼 주입
│   ├── FormattedDate.astro
│   ├── ProjectCard.astro
│   ├── SiteRail.astro       # 데스크톱 좌측 레일 + 모바일 상단 바
│   ├── SiteFooter.astro
│   ├── TableOfContents.astro # h2·h3 목차 (우측 레일 / 인라인 변형)
│   └── ThemeToggle.astro    # 라이트/다크 전환 (localStorage 저장)
├── content/
│   ├── articles/            # 기술 아티클 (Markdown)
│   └── projects/            # 케이스 스터디 본문 (slug와 1:1)
├── data/
│   └── projects.ts          # 프로젝트 메타데이터 단일 소스
├── layouts/
│   └── BaseLayout.astro     # 테마 초기화 스크립트 + 레일 셸
├── pages/
│   ├── 404.astro
│   ├── cv.astro
│   ├── index.astro
│   ├── articles/index.astro · articles/[slug].astro
│   ├── projects/index.astro · projects/[slug].astro
│   └── rss.xml.js
├── plugins/
│   └── remark-reading-time.mjs
├── styles/
│   └── global.css           # 디자인 토큰, 다크 모드, 목차·코드 복사, 인쇄 CSS
├── consts.ts                # 사이트 제목·설명·링크·아티클 분류
└── content.config.ts        # 아티클·케이스 스터디 컬렉션 스키마

docs/
└── og-template.html         # public/og-default.png 생성 소스

public/
├── favicon.svg              # MK 이니셜
├── og-default.png           # 1200×630 공유 이미지
├── robots.txt
└── projects/<name>.svg      # 프로젝트별 일러스트 16장
```

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 정적 빌드
npm run check    # astro check 타입 검사
npm run preview  # 빌드 결과 미리보기
```

## 배포

`main` 브랜치로 push하면 `.github/workflows/deploy.yml`이 자동 실행됩니다.

1. 타입 검사 (`npm run check`)
2. Astro 정적 빌드 (`npm run build`)
3. `dist/` 산출물을 `actions/deploy-pages@v4`로 업로드, GitHub Pages가 1–2분 내 반영

## SEO / 공유 메타

- **Schema.org**: Person + WebSite JSON-LD
- **Open Graph**: `og:image` 1200×630 PNG (`docs/og-template.html`로 재생성), `og:locale=ko_KR`
- **sitemap**: `@astrojs/sitemap`이 `sitemap-index.xml` 생성, `robots.txt`에서 참조
- **RSS**: 아티클 피드 `/rss.xml`
- **canonical**: 페이지별 절대 URL, 구 노트 경로는 meta refresh + canonical로 이전

## 라이선스

초기 버전은 [Astrofy](https://github.com/manuelernestog/astrofy) 템플릿(MIT)에서 출발했고, 이후 전면 재작성을 거치며 원본 저작권 고지는 LICENSE에 함께 유지합니다. 콘텐츠(이력·프로젝트 설명·아티클·이미지)는 강민수 본인 자료입니다.
