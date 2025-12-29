import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
export async function GET(context) {
  // Retrieve the article collection (replace links as appropriate)
  const posts = await getCollection("articles");
  const items = posts.map((post) => ({
    ...post.data,
    link: new URL(`/articles/${post.slug}/`, context.site).toString(),
  }));
  // Generate contents of llms.txt
  context = `# ${SITE_TITLE}\n\n> ${SITE_DESCRIPTION}\n\n## Articles\n\n${items
    .map((item) => `- [${item.title}](${item.link}): ${item.description}`)
    .join("\n")}`;
  // Return response as a text file
  return new Response(context, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}