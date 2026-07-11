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
  body: { heading: string; text: string }[];
  featured?: boolean;
  featuredOrder?: number;
}

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
    body: [
      {
        heading: "배경",
        text: "공공 조달에서 수요기관 자체입찰의 불법사항을 근절하기 위한 AI 기반 모니터링 모델 개발 과제입니다. 2026년 AI기반 현안해결형 데이터 분석모델 개발 사업으로, 총괄 행정안전부 · 전문 한국지능정보사회진흥원 · 주관 조달청 체계로 추진됩니다.",
      },
      {
        heading: "진행 상태",
        text: "2026년 6월부터 데이콘에서 PL로 수행하고 있습니다. 진행 중인 실무 과제로 세부 내용은 종료 후 공개 가능한 범위에서 정리할 예정입니다.",
      },
    ],
  },
  {
    slug: "llm-evaluation-system",
    title: "LLM 평가 시스템 개발",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2025.12 – 2026.04",
    org: "데이콘",
    summary:
      "여러 LLM 응답을 Council 방식으로 2단계 채점하는 평가 시스템. FastAPI + Redis Queue + asyncio.",
    hero: "/projects/llm-eval.svg",
    stack: ["Python", "FastAPI", "Redis", "asyncio", "LLM"],
    featured: true,
    featuredOrder: 3,
    body: [
      {
        heading: "배경",
        text: "데이콘 사내에서 다수의 LLM 응답을 일관된 기준으로 평가할 인프라가 필요했습니다. 단일 모델 채점은 편향이 크고, 사람이 매번 채점하기엔 비용이 큽니다.",
      },
      {
        heading: "접근",
        text: "Council 방식 (여러 평가자 LLM의 합의)을 2단계로 구성. 1단계는 후보 응답 스크리닝, 2단계는 잔여 후보를 정밀하게 채점. FastAPI + Redis Queue + asyncio로 LLM 호출을 병렬화하고, 평가 작업을 큐에 분산해 처리량을 확보했습니다.",
      },
      {
        heading: "결과",
        text: "데이콘 평가 인프라로 사용 중. 평가 처리량과 일관성을 동시에 확보했고, 신규 평가 기준 추가도 컨피그만 수정하면 되도록 분리했습니다.",
      },
    ],
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
      "FastAPI",
      "React",
      "Vite",
      "Mantine",
      "Spring Boot (eGovFrame)",
      "Nginx",
      "Docker",
    ],
    featured: true,
    featuredOrder: 2,
    body: [
      {
        heading: "배경",
        text: "운수종사자의 인지적 특성과 운전 데이터로 사고 위험을 사전 식별하는 시스템이 필요했습니다. 2025년 같은 주제 경진대회 솔루션(상위 7.8%)을 모델 기반으로 삼아 실제 운영 가능한 형태로 확장했습니다.",
      },
      {
        heading: "접근",
        text: "ML 모델은 LightGBM + CatBoost, StratifiedGroupKFold로 누수 방지. 관리자 웹은 React/Vite/Mantine, AI 엔진은 FastAPI, 백엔드는 Spring Boot (eGovFrame, 전자정부 표준프레임워크). Nginx + Docker로 배포까지 전 구간 처리했습니다.",
      },
      {
        heading: "결과",
        text: "위탁사업 산출물로 납품. 모델 → API → 웹 → 배포의 전 구간 진행.",
      },
    ],
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
    body: [
      {
        heading: "배경",
        text: "해양 법령은 조문 간 인용·예외·하위법 참조가 많아 단순 임베딩 검색만으로는 정확한 답을 얻기 어렵습니다. 슈어소프트테크 인턴십 중 해양경찰청 CDX 과제로 진행한 도메인 특화 RAG 파이프라인을, 회사 보안상 사내 코드·데이터를 외부에 공개할 수 없어 공개 데이터 기반으로 재현한 데모입니다.",
      },
      {
        heading: "접근",
        text: "국가법령정보 OPEN API로 해양 법령 105개, 7,506개 조문 수집. BM25·벡터(Qdrant, KURE-v1)·조문 관계 그래프(Neo4j) 검색을 병합하고 cross-encoder로 리랭킹. LangGraph 라우팅으로 질문 유형별 검색 전략 선택. 답변마다 근거 조문을 인용하고, 골드셋 180문항으로 검색 전략을 비교 평가.",
      },
      {
        heading: "결과",
        text: "법령 간 참조 관계를 답변에 반영해 단순 키워드 검색보다 정확한 인용을 제공. 같은 흐름을 근거 도출 과정이 보이는 웹 데모로 공개했습니다.",
      },
    ],
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
    featuredOrder: 4,
    body: [
      {
        heading: "배경",
        text: "해양사고 기록과 해양기상 관측을 격자×시간 단위로 결합해 사고 위험을 사전 식별합니다. 슈어소프트테크 인턴십 중 해양수산부 AI융복합 과제로 진행한 작업을, 회사 보안상 사내 코드·데이터를 외부에 공개할 수 없어 공개 데이터 기반으로 재현한 데모입니다.",
      },
      {
        heading: "접근",
        text: "MTIS 해양사고 좌표를 정제해 NMPNT 해양기상과 최근접 매칭. 시간층화 case-crossover와 조건부 로지스틱으로 기상-사고 연관을 통계 검증. 로지스틱(AUC 0.653)과 LightGBM(AUC 0.834)을 연도 기준 OOF로 비교하고 표준화 오즈비로 해석. FastAPI 서빙 + Next.js·MapLibre 지도 대시보드로 위험도 시각화.",
      },
      {
        heading: "결과",
        text: "격자×시간 위험도와 기상 근거를 지도 대시보드로 공개했습니다. 화면은 실제 분석 실행 결과를 키 없이 재생하는 정적 데모입니다.",
      },
    ],
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
    body: [
      {
        heading: "배경",
        text: "KT 에이전트 시스템 검증을 위한 도메인 데이터셋이 필요했습니다. 슈어소프트테크 인턴십 중 협업 프로젝트로 참여했습니다.",
      },
      {
        heading: "접근",
        text: "검증 시나리오 정의 → 케이스 큐레이션 → 라벨 일관성 검수 → 평가 셋 분할의 단계로 진행. 회사 자산이라 별도 공개 레포는 없습니다.",
      },
      {
        heading: "결과",
        text: "KT 에이전트 평가 파이프라인의 입력으로 사용. 인턴 산출물로 회사 내부 보관.",
      },
    ],
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
    body: [
      {
        heading: "배경",
        text: "장문 법률 판결문 텍스트를 입력으로 양 당사자 중 어느 쪽이 승소했는지 예측하는 NLP 이진 분류 과제.",
      },
      {
        heading: "접근",
        text: "약어·구두점·복합 명사 패턴을 정리해 토크나이저 노이즈를 줄이고, spaCy 기반 문장 분리와 길이 통계 비교로 train/test 분포를 점검. nlpaug 기반 augmentation으로 학습 데이터 다양성을 확보한 뒤 DeBERTa-v3를 fine-tuning해 최종 분류 모델을 구성.",
      },
      {
        heading: "결과",
        text: "최종 2등 (506팀 중, 리더보드 기준).",
      },
    ],
  },
  {
    slug: "genomic-data-breed-classification",
    title: "유전체 정보 품종 분류 AI 경진대회",
    category: "award",
    badge: "2023 · 데이콘",
    result: "1등",
    period: "2023.02",
    org: "충남대 바이오AI융합연구센터 주최 · 데이콘 주관",
    summary: "SNP 기반 multi-class 품종 분류. CatBoost Encoder + 불균형 보정 + weighted hard-voting ensemble. 학술대회 논문 발표 연계.",
    hero: "/projects/genomic.svg",
    github: "https://github.com/Minsu5452/genomic-breed-classification",
    stack: ["CatBoost", "LightGBM", "XGBoost", "SMOTE", "Tabular ML"],
    body: [
      {
        heading: "배경",
        text: "SNP(단일염기다형성) 데이터로 품종을 분류하는 multi-class 과제. Macro F1 평가.",
      },
      {
        heading: "접근",
        text: "SNP 이름·염색체·위치·유전 거리·염기 조합에서 파생 변수를 만들고, 고차원 범주형 SNP를 CatBoost Encoder 등으로 변환. SMOTE·BorderlineSMOTE 등 불균형 보정 방법을 비교한 뒤 CatBoost·LightGBM·XGBoost·Random Forest·Extra Trees·SVC·MLP를 넓게 실험. 최종 제출은 강한 모델들의 weighted hard-voting ensemble.",
      },
      {
        heading: "결과",
        text: "최종 1등 (716팀 중, 리더보드 기준). 결과를 정리해 에이아이프렌즈학회 2023 제2차 실용 인공지능 학술대회 논문 발표로 연계.",
      },
    ],
  },
  {
    slug: "industrial-lead-lag-forecasting",
    title: "제3회 국민대 AI빅데이터 분석 경진대회",
    category: "comp",
    badge: "2025",
    result: "상위 5.2%",
    period: "2025.11",
    org: "국민대 경영대학원·기계산업진흥회 주최",
    summary:
      "산업 지표 lead-lag 예측, LightGBM + graph PageRank + community detection.",
    hero: "/projects/industrial-leadlag.svg",
    github: "https://github.com/Minsu5452/industrial-lead-lag-forecasting",
    stack: ["LightGBM", "Graph", "PageRank", "Community Detection"],
    body: [
      {
        heading: "배경",
        text: "산업 품목별 월간 시계열에서 선행·후행 관계(lead-lag)를 찾고, follower 품목의 다음 달 값을 예측하는 과제.",
      },
      {
        heading: "접근",
        text: "품목별 월간 pivot에서 lag 1–9 구간의 상관·p-value·방향성·안정성을 스캔하고, zero ratio·CV·spike·trend·autocorrelation 등 품질 점수로 우연한 상관을 제거. leader→follower directed graph를 만들고 PageRank와 community 정보를 활용해 pair score를 보정. follower 자체 lag/rolling 피처와 선택된 leader의 lag-shifted value를 결합해 LightGBM 회귀 모델 학습. 마지막 3개월을 hold-out으로 두고 NMAE·MAE를 검증.",
      },
      { heading: "결과", text: "예선 50등 (960팀 중, 상위 5.2%)." },
    ],
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
    body: [
      {
        heading: "배경",
        text: "운수종사자 신규검사(A)와 자격유지검사(B)의 인지·행동 시퀀스 데이터로 다음 검사 시점의 위험 확률을 예측하는 과제.",
      },
      {
        heading: "접근",
        text: "A/B 검사의 컬럼 체계가 달라 도메인별 feature builder를 분리. 콤마로 저장된 검사 시퀀스를 행렬로 변환하고 평균·표준편차·변동계수·조건부 평균 등을 생성. 동일 운수종사자의 과거 이력은 현재 시점 이전 데이터만 사용해 누설을 차단하고, StratifiedGroupKFold로 같은 PrimaryKey가 train/valid에 동시에 들어가지 않도록 구성. LightGBM·CatBoost OOF prediction을 weighted blend해 최종 제출.",
      },
      {
        heading: "결과",
        text: "최종 34등 (437팀 중, 상위 7.8%). 본 솔루션이 이후 데이콘 위탁사업 driver-risk-prediction-platform의 모델 기반이 됨.",
      },
    ],
  },
  {
    slug: "ship-waiting-time-prediction",
    title: "HD현대 AI Challenge",
    category: "comp",
    badge: "2023",
    result: "2등",
    period: "2023.09 – 2023.10",
    org: "HD한국조선해양 AI Center 주최 · 데이콘 주관",
    summary:
      "선박 대기시간 예측, XGBoost·CatBoost ensemble (예선) → LightGBM (본선).",
    hero: "/projects/ship-waiting.svg",
    github: "https://github.com/Minsu5452/ship-waiting-time-prediction",
    stack: ["XGBoost", "CatBoost", "LightGBM", "Ensemble"],
    body: [
      {
        heading: "배경",
        text: "선박 입항 후 대기시간(`CI_HOUR`)을 예측하는 회귀 과제. 본선은 시계열 신호 기반 trial weight 회귀로 과제가 변경됨.",
      },
      {
        heading: "접근",
        text: "예선은 결측 처리·시간 파생 변수·target encoding을 적용하고 XGBoost·CatBoost ensemble로 학습, `DIST == 0` 등 특수 케이스는 후처리로 보정. 본선은 시계열 신호 파일을 trial 단위로 파싱하고 sliding window feature를 구성, LightGBM 예측을 ID 단위 percentile 집계와 rounding으로 제출 형식에 맞춤.",
      },
      {
        heading: "결과",
        text: "예선 2등 (330팀 중, 상위 0.6%) · 본선 6등.",
      },
    ],
  },
  {
    slug: "lg-online-sales-forecasting",
    title: "LG 온라인 채널 제품 판매량 예측 해커톤",
    category: "comp",
    badge: "2023 · LG Aimers",
    result: "상위 1.6%",
    period: "2023.08",
    org: "LG AI Research 주최 · 데이콘 주관 · LG Aimers 연계",
    summary: "제품별 온라인 채널 판매량 예측. wide→long 변환 + lag/rolling/calendar 피처 + recursive multi-step forecasting.",
    hero: "/projects/lg-sales.svg",
    github: "https://github.com/Minsu5452/online-sales-forecasting",
    stack: ["Time Series", "Tabular ML", "Feature Engineering"],
    body: [
      {
        heading: "배경",
        text: "LG Aimers 3기 연계 데이콘 온라인 해커톤. 제품별 온라인 채널 판매량을 예측하는 시계열 과제.",
      },
      {
        heading: "접근",
        text: "wide 형식 판매 이력을 제품별 long 시계열 학습 테이블로 변환. lag·rolling statistics·calendar cycle·product metadata 피처를 구성하고, log 변환 타겟에 대해 tabular regression 모델을 학습. 재귀적 multi-step forecasting으로 제출 구간을 채움.",
      },
      {
        heading: "결과",
        text: "예선 12등 (747팀 중, 상위 1.6%) → 본선 24등.",
      },
    ],
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
    body: [
      {
        heading: "배경",
        text: "건물별 시간 단위 전력 소비량을 예측하는 시계열 회귀 과제 (SMAPE 평가).",
      },
      {
        heading: "접근",
        text: "건물 정보·기상·캘린더·시간대별 소비 패턴을 EDA로 점검. mljar-supervised AutoML로 빠르게 baseline을 구성하고 모델 계열을 비교한 뒤, 건물별 운영 패턴 차이를 고려해 건물 단위 Prophet 모델을 실험. 불안정한 구간은 요일·시간대 중앙값 fallback으로 보정.",
      },
      { heading: "결과", text: "최종 107등 (1,233팀 중, 상위 8.7%)." },
    ],
  },
  {
    slug: "citrus-yield-prediction",
    title: "감귤 착과량 예측 AI 경진대회",
    category: "comp",
    badge: "2022",
    result: "상위 6.6%",
    period: "2022.12",
    org: "제주테크노파크 주최 · 데이콘 주관",
    summary: "제주 감귤 나무 생육 데이터 기반 착과량 회귀 예측. multi K-fold ensemble로 단기 대회에서 안정성 확보.",
    hero: "/projects/citrus.svg",
    github: "https://github.com/Minsu5452/citrus-yield-prediction",
    stack: ["XGBoost", "LightGBM", "CatBoost", "Multi K-fold Ensemble"],
    body: [
      {
        heading: "배경",
        text: "제주 감귤 나무 생육 데이터로 착과량을 예측하는 회귀 과제 (3일 단기 대회).",
      },
      {
        heading: "접근",
        text: "생육 정보에서 착과량 예측에 필요한 파생 변수를 구성. feature scaling과 selection 실험을 분리해 입력 피처 품질을 비교한 뒤 XGBoost·LightGBM·CatBoost 회귀 모델을 학습. seed와 fold를 달리한 multi K-fold ensemble로 예측 안정성을 높였습니다.",
      },
      { heading: "결과", text: "최종 17등 (257팀 중, 상위 6.6%)." },
    ],
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
    body: [
      {
        heading: "배경",
        text: "국민대학교 텍스트 데이터 분석 수업의 개인 프로젝트. 국민대·정릉시장 주변 맛집 리뷰를 수집해 토픽 모델링으로 카테고리를 추출.",
      },
      {
        heading: "접근",
        text: "네이버 VIEW·다이닝코드·망고플레이트·서울시 성북구 음식점 공공데이터를 Selenium 기반 동적 크롤링으로 수집(BeautifulSoup 보조). Komoran·Hannanum·Kkma·Twitter·Mecab 형태소 분석 결과를 비교한 뒤 불용어·빈도 기준 필터링. LSA·LDA로 토픽을 추출하고 토픽별 키워드와 음식점 매핑을 시각화.",
      },
    ],
  },
  {
    slug: "dl-team-project-colorization",
    title: "Colorization SOTA 모델 Fine-tuning",
    category: "academic",
    badge: "2022 · 국민대",
    period: "2022.09 – 2022.12",
    org: "국민대 딥러닝 수업",
    summary: "한국 음식 이미지 도메인에서 ChromaGAN / DeOldify / InstColorization SOTA 컬러화 모델 비교·fine-tune.",
    hero: "/projects/dl-colorization.svg",
    github: "https://github.com/Minsu5452/dl-image-colorization",
    stack: ["PyTorch", "ChromaGAN", "DeOldify", "InstColorization"],
    body: [
      {
        heading: "배경",
        text: "국민대학교 딥러닝 수업의 팀 프로젝트. 한국 음식 이미지 도메인에서 흑백 → 컬러화 SOTA 모델을 비교.",
      },
      {
        heading: "접근",
        text: "AI Hub 한국 음식 이미지를 224×224 컬러/그레이 페어로 변환해 train/test split 구성. ChromaGAN PyTorch remake를 도메인에 맞게 fine-tuning, DeOldify는 pretrained inference로 비교, InstColorization은 weight 확보 실패 등 재현 한계를 노트북에 기록. PSNR·SSIM과 정성 결과를 함께 비교.",
      },
    ],
  },
  {
    slug: "ml-team-project",
    title: "백화점 고객 구매 이력 분류",
    category: "academic",
    badge: "2022 · 국민대",
    period: "2022.03 – 2022.06",
    org: "국민대 머신러닝 수업 내 Kaggle 컴페티션",
    summary: "백화점 트랜잭션 기반 8-class 고객 분류. Word2Vec sequence embedding + CatBoost/LGBM/DNN blending. Kaggle kml2022s 클래스 경진대회 2등.",
    hero: "/projects/ml-team.svg",
    github: "https://github.com/Minsu5452/ml-department-store-classification",
    stack: ["CatBoost", "LightGBM", "Word2Vec", "DNN", "Kaggle"],
    body: [
      {
        heading: "배경",
        text: "국민대학교 머신러닝 수업 학기 말 Kaggle 클래스 경진대회(kml2022s). 백화점 1년치 구매 트랜잭션으로 고객을 성별×연령대 8개 그룹(F20–M50)으로 분류하는 과제 (Multi-class log loss).",
      },
      {
        heading: "접근",
        text: "고객별 구매 트랜잭션을 브랜드·코너·파트·상품 시퀀스로 모아 Word2Vec sequence embedding을 만들고, 범주형 파생 변수를 category encoder로 변환한 뒤 SHAP으로 피처 선택. CatBoost·LGBM·XGBoost·DNN(Keras·PyTorch)·MLP를 학습해 prediction blending.",
      },
      { heading: "결과", text: "Kaggle kml2022s Private 2등, log loss 1.45953 (3인 팀, 수업 내 클래스 경진대회)." },
    ],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
