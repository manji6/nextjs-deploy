import { Client } from "@notionhq/client";
import { getPage } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

interface searchCondition {
  isPublished: boolean;
}

export const notion = new Client({
  auth: process.env.PUBLIC_NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

interface NotionPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  files: string[];
  excerpt: string;
  slug: string;
}

export async function getAllPageContents(): Promise<NotionPost[]> {
  const response = await notion.databases.query({
    database_id: process.env.PUBLIC_NOTION_DB_URL,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
  const posts = response.results;

  //  console.dir(posts, { depth: null });

  const postsProperties = posts.map((post: any) => {
    // レコードidの取り出し
    const id = post.id;

    // titleプロパティの取り出し
    const title = post.properties.Page.title[0]?.plain_text;

    // // dateプロパティの取り出し
    const date = post.properties.Date.date.start;

    // multi_selectプロパティの取り出し（例：types）
    const tags = post.properties.Tags.multi_select.map(
      (item: any) => item.name
    );

    // filesプロパティの取り出し（例：file）
    const files = post.properties.FeaturedImage.files.map(
      (file: any) => file.file.url
    );

    // 概要テキスト取り出し
    const excerpt = post.properties.Excerpt.rich_text[0].plain_text;

    // Slug取り出し
    const slug = post.properties.Slug.rich_text[0].plain_text;

    // プロパティをまとめたオブジェクトを返す
    return { id, title, date, tags, files, excerpt, slug };
  });

  return postsProperties;
}

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId, 2);

  return mdblocks;
}

export async function getPageContentBySlug(slug_param: string) {
  // まずは全件取り出す
  const all_post_data = getAllPageContents();

  // 該当のSlug名のコンテンツがあるか判断
  // TODO: あとでエラーハンドリング
  const pageInfo = (await all_post_data).find(({ slug }) => slug == slug_param);

  // 該当のコンテンツを取り出す
  const page_data = await getPageContent(pageInfo.id);

  return page_data;
}
