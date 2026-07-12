export type ProjectCategory = "work" | "award" | "comp" | "academic";

export interface ProjectMetric {
  label: string;
  value: string;
}

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
  /** 상세 페이지 역할 박스. 없으면 미표시 */
  role?: string;
  summary: string;
  hero?: string;
  github?: string;
  external?: { label: string; url: string }[];
  stack: string[];
  body: { heading: string; text: string }[];
  /** 저장소 리포트에 근거한 핵심 수치. 상세 페이지 스탯 그리드로 표시 */
  metrics?: ProjectMetric[];
  /** 아키텍처 다이어그램. 상세 페이지에 이미지로 표시 */
  architecture?: { image: string; alt: string; note?: string };
  /** 카드·상세 강조색 */
  color?: string;
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
    role: "PL",
    summary:
      "불법사항 근절을 위한 수요기관 자체입찰 모니터링 모델 개발 과제. 행안부·NIA·조달청 위탁사업, PL로 수행 중.",
    hero: "/projects/procurement-bid.svg",
    color: "#6366f1",
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
    slug: "driver-risk-web-platform",
    title: "운수종사자 교통사고 위험 예측 모델·관리 웹 개발",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2025.12 – 2026.04",
    org: "데이콘 / 행안부·NIA·한국교통안전공단 위탁",
    role: "PL",
    summary:
      "행안부·NIA·한국교통안전공단 위탁사업. 검사 결과와 사고 이력을 학습한 앙상블 모델로 위험도를 예측하고, 관리 웹과 망분리 환경용 오프라인 배포 체계까지 전 구간을 PL로 수행.",
    hero: "/projects/driver-risk-demo.png",
    github: "https://github.com/Minsu5452/driver-risk-prediction-platform",
    color: "#ef4444",
    stack: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "SHAP",
      "React",
      "Vite",
      "Mantine",
      "Spring Boot (eGovFrame)",
      "Nginx",
    ],
    featured: true,
    featuredOrder: 2,
    body: [
      {
        heading: "배경",
        text: "운수종사자의 검사 결과와 사고 이력으로 교통사고 위험을 사전 식별하는 시스템이 필요했습니다. 2025년 같은 주제 경진대회 솔루션(상위 7.8%)을 출발점으로 삼아 실제 운영 가능한 플랫폼으로 확장했고, 인터넷이 없는 현장 PC에서 설치와 운영이 끝까지 되어야 한다는 제약에서 구조를 잡았습니다.",
      },
      {
        heading: "접근",
        text: "위험도 예측은 도메인별 스태킹 앙상블(HistGradientBoosting·XGBoost·CatBoost, Dirichlet 가중 탐색)과 시퀀스 LightGBM을 가중 블렌딩해 만들고, 시점 누수가 없도록 각 검사 시점 이전의 기록만으로 피처를 구성했습니다. React 프론트엔드와 eGovFrame 백엔드, FastAPI AI 엔진을 Nginx 뒤에 3-티어로 묶었고, SHAP 해석과 PDF 리포트, 모델 버전 관리(DB 저장·활성 버전 전환·중단 학습 자동 복구)까지 관리 화면에서 다룹니다.",
      },
      {
        heading: "결과",
        text: "Python·JRE·Nginx 런타임과 오프라인 wheel을 전부 담은 배포 zip과 설치·헬스체크 스크립트로 망분리 운영 환경에 실제 배포까지 수행했습니다. 공개 저장소는 납품본을 익명화해 재구성한 것입니다.",
      },
    ],
    metrics: [
      { label: "스태킹 AUC (신규·자격유지)", value: "0.728 / 0.727" },
      { label: "시퀀스 AUC (도메인 통합)", value: "0.742" },
      { label: "전체 학습 시간", value: "약 44분" },
      { label: "오프라인 배포 zip", value: "약 400MB" },
    ],
    architecture: {
      image: "/projects/arch/driver-risk-architecture.png",
      alt: "교통사고 위험도 예측 플랫폼 시스템 구성 — Nginx 뒤 React·FastAPI·eGovFrame 3-티어와 오프라인 배포 zip",
      note: "성능 수치는 실제 데이터로 학습해 저장된 결과이며, 검사 데이터가 저장소에 없어 저장소만으로는 재현되지 않습니다.",
    },
  },
  {
    slug: "marine-domain-rag",
    title: "해양 법령 도메인 RAG 개발",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크",
    role: "개발 실무 (인턴)",
    summary:
      "해양 법령을 조문 단위로 검색하고 답변마다 근거 조문을 인용하는 RAG 시스템. BM25·벡터·조문 관계 그래프 검색을 병합해 단순 키워드 검색보다 정확한 인용을 만드는 흐름에 초점.",
    hero: "/projects/maritime-rag.png",
    github: "https://github.com/Minsu5452/maritime-law-rag-agent",
    external: [{ label: "라이브 데모", url: "https://korean-maritime-law-rag.vercel.app" }],
    color: "#14b8a6",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "BM25 (Kiwi)",
      "Qdrant",
      "KURE-v1",
      "Neo4j",
      "Langfuse",
      "Next.js",
      "TypeScript",
      "Docker",
      "Vercel",
    ],
    featured: true,
    featuredOrder: 1,
    body: [
      {
        heading: "배경",
        text: "해양 법령은 조문 간 인용·예외·하위법 참조가 많아 단순 임베딩 검색만으로는 정확한 답을 얻기 어렵습니다. 슈어소프트테크 인턴십 중 해양경찰청 CDX 과제로 진행한 도메인 특화 RAG 파이프라인을, 회사 보안상 사내 코드·데이터를 외부에 공개할 수 없어 공개 데이터 기반으로 다시 구현한 프로젝트입니다.",
      },
      {
        heading: "접근",
        text: "국가법령정보 OPEN API로 해양 법령 105개, 7,506개 조문을 수집하고, 조문 본문의 인용·준용·위임 관계를 규칙 기반 파서로 추출해 조문 관계 그래프를 만들었습니다. BM25·벡터(Qdrant, KURE-v1)·그래프(Neo4j) 세 검색 경로를 RRF로 병합하고 cross-encoder로 리랭킹합니다. LangGraph로 질문 분류, 검색, 근거 평가, 재검색, 답변 생성, 인용 검증까지 이어지는 흐름을 구성했고, 생성 모델이 검색 결과 밖의 조문을 인용하지 못하게 막았습니다.",
      },
      {
        heading: "결과",
        text: "골드셋 180문항으로 세 검색 전략을 통계 검정(Wilson CI·McNemar)까지 비교했습니다. 그래프 멀티홉이 우세할 것이라는 처음 가설은 평가에서 뒤집혔고, 벡터가 hit@1, 그래프가 recall@10에서 앞서 그래프 검색은 정답 후보를 넓히는 용도로 정리했습니다. 같은 흐름을 근거 도출 과정이 보이는 웹 데모로 공개했습니다.",
      },
    ],
    metrics: [
      { label: "법령 문서", value: "105개" },
      { label: "조문·별표", value: "7,506개" },
      { label: "조문 관계 그래프", value: "16,281 엣지" },
      { label: "평가 골드셋", value: "180문항" },
      { label: "검색 hit@1 (벡터)", value: "0.539" },
      { label: "응답 시간 · 비용", value: "p50 6.2초 · 약 $0.001" },
    ],
    architecture: {
      image: "/projects/arch/maritime-rag-architecture.png",
      alt: "해양 법령 RAG 아키텍처 — 수집·파싱, BM25·Qdrant·Neo4j 인덱스, RRF 병합과 리랭킹, LangGraph 에이전트, FastAPI 서빙",
      note: "저장소의 아키텍처 다이어그램 원본입니다. 수치는 reports/의 평가 산출물에서 가져왔습니다.",
    },
  },
  {
    slug: "marine-accident-risk-prediction",
    title: "해양사고 위험 예측 시스템 개발",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크",
    role: "개발 실무 (인턴)",
    summary:
      "해양사고 기록과 해양기상 관측을 결합해 격자×시간 단위 사고 위험도를 추정하고, 위험을 높이는 기상 조건을 통계로 검증. 해양수산부 AI융복합 과제 경험의 공개 데이터 재구현.",
    hero: "/projects/marine-risk.png",
    github: "https://github.com/Minsu5452/marine-accident-risk-analysis",
    external: [{ label: "라이브 데모", url: "https://korean-marine-accident-risk.vercel.app" }],
    color: "#3b82f6",
    stack: [
      "Python",
      "pandas",
      "statsmodels",
      "scikit-learn",
      "LightGBM",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "MapLibre",
      "Vercel",
    ],
    featured: true,
    featuredOrder: 3,
    body: [
      {
        heading: "배경",
        text: "해양사고 기록과 해양기상 관측을 격자×시간 단위로 결합해 사고 위험을 사전 식별합니다. 슈어소프트테크 인턴십 중 해양수산부 AI융복합 과제로 진행한 작업을, 회사 보안상 사내 코드·데이터를 외부에 공개할 수 없어 공개 데이터 기반으로 다시 구현한 프로젝트입니다.",
      },
      {
        heading: "접근",
        text: "MTIS 해양사고 좌표를 정제(29,695 → 28,935건)하고 NMPNT 해양기상 관측 71개 지점과 haversine 최근접 매칭(거리 60km·시간 ±30분)으로 데이터셋을 만들었습니다. 기상과 사고의 연관은 시간층화 case-crossover와 조건부 로지스틱 회귀로 검증하고(다변량 보정·BH 보정), 격자×시간 위험도는 해석용 로지스틱과 성능 상한 확인용 LightGBM을 연도 기준 OOF 교차검증으로 나눠 평가했습니다.",
      },
      {
        heading: "결과",
        text: "가설과 반대의 결과를 그대로 보고했습니다. 잔잔하고 따뜻한 날 사고 오즈가 오히려 높았는데, 사고종류로 나누면 이 연관이 설비 고장형 사고에 집중되어 있어 위험 기상이 아니라 조업 노출의 흔적으로 해석했습니다. 격자×시간 위험도와 기상 근거는 실제 분석 실행 결과를 키 없이 재생하는 지도 대시보드로 공개했습니다.",
      },
    ],
    metrics: [
      { label: "정제 사고", value: "28,935건" },
      { label: "기상 관측 지점", value: "71곳" },
      { label: "case-crossover", value: "9,687묶음" },
      { label: "AUC (로지스틱 · 해석)", value: "0.653" },
      { label: "AUC (LightGBM · 상한)", value: "0.834" },
      { label: "격자 해상도", value: "0.05–0.25°" },
    ],
    architecture: {
      image: "/projects/arch/marine-risk-architecture.png",
      alt: "해양사고 위험 분석 데이터 흐름 — MTIS·NMPNT 결합, 최근접 매칭, 격자×시간 데이터셋, 통계·모델·XAI, FastAPI와 지도 대시보드",
      note: "저장소의 아키텍처 다이어그램 원본입니다. 수치는 reports/의 통계·모델 산출물에서 가져왔습니다.",
    },
  },
  {
    slug: "kt-agent-validation-dataset",
    title: "KT 자율 에이전트 신뢰성 검증",
    category: "work",
    badge: "2025 · 슈어소프트테크",
    period: "2025.06 – 2025.11",
    org: "슈어소프트테크 / KT",
    role: "검증 (인턴)",
    summary: "KT 자율 에이전트의 신뢰성 검증. 검증 데이터셋 구축과 실성능 테스트, 화이트리스트 작성을 KT와 공동 수행.",
    hero: "/projects/kt-dataset.svg",
    color: "#8b5cf6",
    stack: ["검증 데이터셋 설계", "실성능 테스트"],
    body: [
      {
        heading: "배경",
        text: "KT 자율 에이전트 시스템의 신뢰성을 검증하는 협업 과제입니다. 슈어소프트테크 인턴 기간에 KT와 공동으로 수행했습니다.",
      },
      {
        heading: "수행 내용",
        text: "검증 데이터셋을 구축하고 실제 시스템을 대상으로 실성능 테스트를 진행했으며, 결과를 바탕으로 화이트리스트를 작성했습니다. 회사 자산이라 별도 공개 저장소는 없습니다.",
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236112/leaderboard" },
    ],
    color: "#f59e0b",
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
    org: "충남대 바이오AI융합연구센터 외 주최 · 데이콘 주관",
    summary: "SNP 기반 multi-class 품종 분류. CatBoost Encoder + 불균형 보정 + weighted hard-voting ensemble. 학술대회 논문 발표 연계.",
    hero: "/projects/genomic.svg",
    github: "https://github.com/Minsu5452/genomic-breed-classification",
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236035/leaderboard" },
    ],
    color: "#22c55e",
    stack: ["CatBoost", "LightGBM", "XGBoost", "SMOTE", "Tabular ML"],
    featured: true,
    featuredOrder: 4,
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236619/leaderboard" },
    ],
    color: "#0ea5e9",
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236607/leaderboard" },
    ],
    color: "#f97316",
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
    result: "상위 0.6%",
    period: "2023.09 – 2023.10",
    org: "HD한국조선해양 AI Center 주최 · 데이콘 주관",
    summary:
      "선박 대기시간 예측, XGBoost·CatBoost ensemble (예선) → LightGBM (본선).",
    hero: "/projects/ship-waiting.svg",
    github: "https://github.com/Minsu5452/ship-waiting-time-prediction",
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236158/leaderboard" },
    ],
    color: "#0284c7",
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236129/leaderboard" },
    ],
    color: "#a855f7",
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236125/leaderboard" },
    ],
    color: "#eab308",
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
    external: [
      { label: "리더보드", url: "https://dacon.io/competitions/official/236038/leaderboard" },
    ],
    color: "#fb923c",
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
    color: "#10b981",
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
    color: "#ec4899",
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
    color: "#64748b",
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
