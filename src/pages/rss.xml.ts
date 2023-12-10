import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

/*
    @note
    Astro offers a custom package to quickly add an RSS feed to your website. This official package generates a non-HTML document with information about all your blog entries that can be read by feed readers such as Feedly, The Old Reader, and more. This document is updated every time your site is rebuilt.
*/
export async function GET(context: { site: any }) {
  const posts = await getCollection("posts");

  return rss({
    title: "Alumno de Astro | Blog",
    description: "Mi viaje de aprendizaje de Astro",
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
