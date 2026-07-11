// 사이트 전역 상수. 문구를 바꾸면 BaseHead의 메타와 각 페이지 기본값에 함께 반영된다.
export const SITE_TITLE = "강민수 · AI Engineer";
export const SITE_DESCRIPTION =
  "LLM 에이전트와 ML 시스템을 만들고, 실제로 돌아가는 서비스로 배포합니다. 교통·해양·법률 등 여러 도메인의 문제를 데이터로 풀어왔습니다.";

export const AUTHOR = "강민수";
export const AUTHOR_EN = "Minsu Kang";
export const EMAIL = "daro980722@gmail.com";

export const GITHUB_URL = "https://github.com/Minsu5452";
export const DACON_URL = "https://dacon.io/myprofile/457768/home";

// 기술 아티클 분류. 목록 칩과 frontmatter 스키마가 함께 참조한다.
export const ARTICLE_TOPICS = ["RAG·Agent", "서빙·인프라", "평가", "통계"] as const;
export type ArticleTopic = (typeof ARTICLE_TOPICS)[number];
