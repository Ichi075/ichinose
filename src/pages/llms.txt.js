import { getSortedPosts } from "../utils/content-utils";
import { siteConfig } from "../config";

export async function GET(context) {
  // Retrieve the posts collection
  const posts = await getSortedPosts();
  const items = posts.map((post) => ({
    ...post.data,
    link: new URL(`/posts/${post.slug}/`, context.site).toString(),
  }));
  // Generate contents of llms.txt
  const content = `# ${siteConfig.title}\n\n> ${siteConfig.subtitle}\n\n## Posts\n\n${items
    .map((item) => `- [${item.title}](${item.link}): ${item.description || "No description"}`)
    .join("\n")}`;
  // Return response as a text file
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}