import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.PUBLIC_NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

interface NotionPost {
  id: string;
  title: string;
  date: string;
  types: string[];
  files: string[];
}

export async function getAllPosts(): Promise<NotionPost[]> {
  const response = await notion.databases.query({
    database_id: process.env.PUBLIC_NOTION_DB_URL,
  });
  const posts = response.results;
  const postsProperties = posts.map((post: any) => {
    // レコードidの取り出し
    const id = post.id;

    // titleプロパティの取り出し
    const title = post.properties.Page.title[0]?.plain_text;

    // // dateプロパティの取り出し
    const date = post.properties.Date.date.start;

    // multi_selectプロパティの取り出し（例：types）
    const types = post.properties.Tags.multi_select.map(
      (item: any) => item.name
    );

    // filesプロパティの取り出し（例：file）
    const files = post.properties.FeaturedImage.files.map(
      (file: any) => file.file.url
    );

    // プロパティをまとめたオブジェクトを返す
    return { id, title, date, types, files };
  });

  return postsProperties;
}

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId, 2);

  return mdblocks;
}
