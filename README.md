# 강민수 · Minsu Kang Portfolio

> 데이터로 문제를 풀고, 서비스로 만듭니다.

개인 포트폴리오 사이트의 소스 레포입니다. Astro + Tailwind + DaisyUI 기반으로 작성됐고, GitHub Actions로 빌드되어 GitHub Pages에 자동 배포됩니다.

- **라이브 사이트**: <https://minsu5452.github.io>
- **GitHub 프로필**: <https://github.com/Minsu5452>

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | Home — 인사말, 대표 프로젝트 5장 |
| `/projects/` | Projects — Work / Awards / Competitions / Academic 4개 탭, 총 20개 프로젝트 |
| `/projects/<slug>/` | 프로젝트 상세 — 기간·역할·소속, 배경/접근/결과, 기술 스택, GitHub 링크 |
| `/cv/` | CV — Profile, Work Experience, Education, Awards, Competitions, Publications, Activities, Certifications, Languages, Skills (인쇄 친화 CSS 포함) |

## 기술 스택

- **Framework**: [Astro 4](https://astro.build)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Font**: [Pretendard Variable](https://github.com/orioncactus/pretendard) (본문) + JetBrains Mono (모노스페이스 액센트)
- **배포**: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 프로젝트 데이터 구조

모든 프로젝트(20개)는 `src/data/projects.ts` 한 파일에서 관리합니다. 홈, 프로젝트 목록, 프로젝트 상세 페이지가 같은 데이터를 참조해 정보 불일치를 차단합니다.

```ts
// src/data/projects.ts
export interface Project {
  slug: string;
  title: string;
  category: "work" | "award" | "comp" | "academic";
  badge: string;       // 예: "2026 · 데이콘"
  period: string;      // 예: "2026.01 – 진행 중"
  role: string;
  team: string;
  org: string;
  summary: string;
  hero?: string;       // /projects/<name>.svg
  color?: string;      // 도메인 액센트 색
  github?: string;
  external?: { label: string; url: string }[];
  stack: string[];
  body: { heading: string; text: string }[];
  featured?: boolean;
  featuredOrder?: number;
}
```

`featured: true` 표시된 프로젝트가 홈의 "대표 프로젝트" 5장으로 노출됩니다.

## 디렉터리 구조

```
src/
├── components/
│   ├── cv/TimeLine.astro
│   ├── BaseHead.astro       # 공유 메타 (canonical, OG, Schema.org)
│   ├── Footer.astro
│   ├── Header.astro
│   ├── HorizontalCard.astro # 프로젝트 카드 (hero + badge + 호버)
│   ├── SideBar.astro
│   ├── SideBarFooter.astro
│   └── SideBarMenu.astro
├── data/
│   └── projects.ts          # 모든 프로젝트의 단일 소스
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── 404.astro
│   ├── cv.astro
│   ├── index.astro
│   ├── projects.astro
│   └── projects/[slug].astro # 동적 디테일 페이지
├── styles/
│   └── global.css           # 폰트, 탭 스택, 인쇄 CSS
└── config.ts                # 사이트 제목, 설명

public/
├── favicon.svg              # MK 이니셜
├── og-default.svg / .png    # 1200x630 공유 이미지
├── profile.png / .webp
└── projects/<slug>.svg      # 프로젝트별 hero 일러스트 20장
```

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 정적 빌드
npm run preview  # 빌드 결과 미리보기
```

## 배포

`main` 브랜치로 push하면 `.github/workflows/deploy.yml`이 자동 실행됩니다.

1. Astro 정적 빌드 (`npm run build`)
2. `dist/` 산출물을 `actions/deploy-pages@v4`로 업로드
3. GitHub Pages가 1–2분 내 반영

## SEO / 공유 메타

- **Schema.org**: Person + WebSite JSON-LD
- **Open Graph**: `og:image` 1200×630 PNG, `og:locale=ko_KR`, `og:site_name`
- **canonical**: 페이지별 절대 URL
- **theme-color**: `#0f172a`

## 라이선스

코드는 본 레포 소유. 콘텐츠(이력·프로젝트 설명·이미지)는 강민수 본인 자료입니다.

원본 템플릿은 [Astrofy](https://github.com/manuelernestog/astrofy) (MIT)를 기반으로 시작했습니다.
