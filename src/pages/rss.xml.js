import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const notes = await getCollection("notes", ({ data }) => !data.draft);

  return rss({
    title: `${SITE_TITLE} · 노트`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: notes
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((note) => ({
        title: note.data.title,
        description: note.data.description,
        pubDate: note.data.pubDate,
        link: `/notes/${note.id}/`,
      })),
    customData: "<language>ko-KR</language>",
  });
}
