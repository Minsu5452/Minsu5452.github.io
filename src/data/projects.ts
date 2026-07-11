export type ProjectCategory = "work" | "award" | "comp" | "academic";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** 연도·소속 컨텍스트 라벨 (예: "2026 · 데이콘") */
  badge: string;
  /** 성과 칩 (예: "1등", "상위 5.2%", "진행 중"). 없으면 미표시 */
  result?: string;
  period: string;
  org: string;
  summary: string;
  hero?: string;
  github?: string;
  external?: { label: string; url: string }[];
  stack: string[];
  featured?: boolean;
  featuredOrder?: number;
}

// 케이스 스터디 본문은 src/content/projects/<slug>.md에서 관리한다 (1:1 대응 빌드 검증)
export const projects: Project[] = [
  {
    slug: "procurement-bid-monitoring",
    title: "AI 기반 수요기관 자체입찰 모니터링 모델 개발",
    category: "work",
    badge: "2026 · 데이콘",
    result: "진행 중",
    period: "2026.06 – 현재",
    org: "데이콘 / 행안부·NIA·조달청 위탁",
    summary:
      "불법사항 근절을 위한 수요기관 자체입찰 모니터링 모델 개발 과제. 행안부·NIA·조달청 위탁사업, PL로 수행 중.",
    hero: "/projects/procurement-bid.svg",
    stack: [],
  },
  {
    slug: "driver-risk-web-platform",
    title: "운수종사자 교통사고 위험 예측 모델·관리 웹 개발",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2025.12 – 2026.04",
    org: "데이콘 / 행안부·NIA·한국교통안전공단 위탁",
    summary:
      "행안부·NIA·한국교통안전공단 위탁사업. ML 모델 + 관리자 웹 + AI 엔진 + 배포까지 전 구간을 PL로 수행.",
    hero: "/projects/driver-risk.svg",
    github: "https://github.com/Minsu5452/driver-risk-prediction-platform",
    stack: [
      "Python",
      "LightGBM",
      "CatBoost",
      "XGBoost",
      "FastAPI",
      "React",
      "Vite",
      "Mantine",
      "Spring Boot (eGovFrame)",
      "Nginx",
      "SQLite",
    ],
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: "marine-domain-rag",
    title: "해양 법령 도메인 RAG 개발",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크",
    summary:
      "해양 법령을 조문 단위로 검색하고 답변마다 근거 조문을 인용하는 RAG 데모. BM25·벡터·조문 관계 그래프 검색을 병합해 단순 키워드 검색보다 정확한 인용을 만드는 흐름에 초점.",
    hero: "/projects/marine-rag.svg",
    github: "https://github.com/Minsu5452/maritime-law-rag-agent",
    external: [{ label: "라이브 데모", url: "https://korean-maritime-law-rag.vercel.app" }],
    stack: [
      "Python",
      "LangGraph",
      "BM25",
      "Qdrant",
      "Neo4j",
      "KURE-v1",
      "OpenAI API",
      "FastAPI",
    ],
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: "marine-accident-risk-prediction",
    title: "해양사고 위험 예측 시스템 개발",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크",
    summary:
      "사고·격자·기상 데이터를 결합해 격자×시간 단위로 해양사고 위험을 사전 식별하는 흐름을 검증한 해양수산부 AI융복합 과제의 공개 가능한 재현. 도메인 데이터 결합과 설명가능성 관점의 모델 해석에 초점.",
    hero: "/projects/marine-accident.svg",
    github: "https://github.com/Minsu5452/marine-accident-risk-analysis",
    external: [{ label: "라이브 데모", url: "https://korean-marine-accident-risk.vercel.app" }],
    stack: ["Python", "LightGBM", "statsmodels", "FastAPI", "Next.js", "MapLibre"],
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: "kt-agent-validation-dataset",
    title: "KT 에이전트 검증 데이터셋 구축",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크 / KT",
    summary: "KT 에이전트 시스템 검증용 데이터셋 큐레이션. 인턴십 중 참여.",
    hero: "/projects/kt-dataset.svg",
    stack: ["데이터 큐레이션", "검증 셋 설계"],
  },
  {
    slug: "court-judgment-prediction",
    title: "법원 판결 예측 AI 경진대회",
    category: "award",
    badge: "2023 · 데이콘",
    result: "2등",
    period: "2023.07",
    org: "데이콘 주최/주관",
    summary: "장문 판결문 텍스트 기반 양 당사자 승소 예측. DeBERTa-v3 fine-tuning.",
    hero: "/projects/court-judgment.svg",
    github: "https://github.com/Minsu5452/court-judgment-prediction",
    stack: ["NLP", "DeBERTa-v3", "spaCy", "nlpaug"],
  },
  {
    slug: "genomic-data-breed-classification",
    title: "유전체 정보 품종 분류 AI 경진대회",
    category: "award",
    badge: "2023 · 데이콘",
    result: "1등",
    period: "2023.02",
    org: "충남대 바이오AI융합연구센터 주최 · 데이콘 주관",
    summary:
      "SNP 기반 multi-class 품종 분류. CatBoost Encoder + 불균형 보정 + weighted hard-voting ensemble. 학술대회 논문 발표 연계.",
    hero: "/projects/genomic.svg",
    github: "https://github.com/Minsu5452/genomic-breed-classification",
    stack: ["CatBoost", "LightGBM", "XGBoost", "SMOTE", "Tabular ML"],
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: "industrial-lead-lag-forecasting",
    title: "제3회 국민대 AI빅데이터 분석 경진대회",
    category: "comp",
    badge: "2025",
    result: "상위 5.2%",
    period: "2025.11",
    org: "국민대 경영대학원·기계산업진흥회 주최",
    summary: "산업 지표 lead-lag 예측, LightGBM + graph PageRank + community detection.",
    hero: "/projects/industrial-leadlag.svg",
    github: "https://github.com/Minsu5452/industrial-lead-lag-forecasting",
    stack: ["LightGBM", "Graph", "PageRank", "Community Detection"],
  },
  {
    slug: "driver-cognitive-risk-prediction",
    title: "운수종사자 인지적 특성 활용 교통사고 위험 예측 AI 경진대회",
    category: "comp",
    badge: "2025",
    result: "상위 7.8%",
    period: "2025.10 – 2025.11",
    org: "행안부·NIA 주최 · 한국교통안전공단 주관",
    summary:
      "LightGBM + CatBoost, StratifiedGroupKFold. 이후 driver-risk-prediction-platform의 모델 기반.",
    hero: "/projects/driver-cognitive.svg",
    github: "https://github.com/Minsu5452/driver-cognitive-risk-prediction",
    stack: ["LightGBM", "CatBoost", "StratifiedGroupKFold"],
  },
  {
    slug: "ship-waiting-time-prediction",
    title: "HD현대 AI Challenge",
    category: "comp",
    badge: "2023",
    result: "2등",
    period: "2023.09 – 2023.10",
    org: "HD한국조선해양 AI Center 주최 · 데이콘 주관",
    summary: "선박 대기시간 예측, XGBoost·CatBoost ensemble (예선) → LightGBM (본선).",
    hero: "/projects/ship-waiting.svg",
    github: "https://github.com/Minsu5452/ship-waiting-time-prediction",
    stack: ["XGBoost", "CatBoost", "LightGBM", "Ensemble"],
  },
  {
    slug: "lg-online-sales-forecasting",
    title: "LG 온라인 채널 제품 판매량 예측 해커톤",
    category: "comp",
    badge: "2023 · LG Aimers",
    result: "상위 1.6%",
    period: "2023.08",
    org: "LG AI Research 주최 · 데이콘 주관 · LG Aimers 연계",
    summary:
      "제품별 온라인 채널 판매량 예측. wide→long 변환 + lag/rolling/calendar 피처 + recursive multi-step forecasting.",
    hero: "/projects/lg-sales.svg",
    github: "https://github.com/Minsu5452/online-sales-forecasting",
    stack: ["Time Series", "Tabular ML", "Feature Engineering"],
  },
  {
    slug: "power-consumption-forecasting",
    title: "2023 전력사용량 예측 AI 경진대회",
    category: "comp",
    badge: "2023",
    result: "상위 8.7%",
    period: "2023.07 – 2023.08",
    org: "한국에너지공단 주최 · 데이콘 주관",
    summary: "건물별 시간 단위 전력 소비량 예측. AutoML baseline + 건물별 Prophet 실험.",
    hero: "/projects/power-consumption.svg",
    github: "https://github.com/Minsu5452/power-consumption-forecasting",
    stack: ["Time Series", "Prophet", "AutoML", "LightGBM"],
  },
  {
    slug: "citrus-yield-prediction",
    title: "감귤 착과량 예측 AI 경진대회",
    category: "comp",
    badge: "2022",
    result: "상위 6.6%",
    period: "2022.12",
    org: "제주테크노파크 주최 · 데이콘 주관",
    summary:
      "제주 감귤 나무 생육 데이터 기반 착과량 회귀 예측. multi K-fold ensemble로 단기 대회에서 안정성 확보.",
    hero: "/projects/citrus.svg",
    github: "https://github.com/Minsu5452/citrus-yield-prediction",
    stack: ["XGBoost", "LightGBM", "CatBoost", "Multi K-fold Ensemble"],
  },
  {
    slug: "restaurant-topic-modeling",
    title: "정릉시장 주변 맛집 리뷰 토픽 모델링",
    category: "academic",
    badge: "2022 · 국민대",
    period: "2022.09 – 2022.12",
    org: "국민대 텍스트 데이터 분석 수업",
    summary: "국민대·정릉시장 주변 맛집 리뷰 크롤링 + 형태소 분석기 비교 + LSA/LDA 토픽 모델링.",
    hero: "/projects/restaurant-topic.svg",
    github: "https://github.com/Minsu5452/text-mining-review-topics",
    stack: ["Selenium", "KoNLPy", "LSA", "LDA", "NLP"],
  },
  {
    slug: "dl-team-project-colorization",
    title: "Colorization SOTA 모델 Fine-tuning",
    category: "academic",
    badge: "2022 · 국민대",
    period: "2022.09 – 2022.12",
    org: "국민대 딥러닝 수업",
    summary:
      "한국 음식 이미지 도메인에서 ChromaGAN / DeOldify / InstColorization SOTA 컬러화 모델 비교·fine-tune.",
    hero: "/projects/dl-colorization.svg",
    github: "https://github.com/Minsu5452/dl-image-colorization",
    stack: ["PyTorch", "ChromaGAN", "DeOldify", "InstColorization"],
  },
  {
    slug: "ml-team-project",
    title: "백화점 고객 구매 이력 분류",
    category: "academic",
    badge: "2022 · 국민대",
    period: "2022.03 – 2022.06",
    org: "국민대 머신러닝 수업 내 Kaggle 컴페티션",
    summary:
      "백화점 트랜잭션 기반 8-class 고객 분류. Word2Vec sequence embedding + CatBoost/LGBM/DNN blending. Kaggle kml2022s 클래스 경진대회 2등.",
    hero: "/projects/ml-team.svg",
    github: "https://github.com/Minsu5452/ml-department-store-classification",
    stack: ["CatBoost", "LightGBM", "Word2Vec", "DNN", "Kaggle"],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
