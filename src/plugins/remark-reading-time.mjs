import { toString } from "mdast-util-to-string";

// 한국어 본문 기준 분당 500자로 읽기 시간을 계산해 frontmatter에 주입한다.
export function remarkReadingTime() {
  return (tree, { data }) => {
    const text = toString(tree);
    const chars = text.replace(/\s+/g, "").length;
    data.astro.frontmatter.readingMinutes = Math.max(1, Math.round(chars / 500));
  };
}
