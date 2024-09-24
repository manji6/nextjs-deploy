import { Client } from "@notionhq/client";
//import { getPage } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.PUBLIC_NOTION_API_KEY,
});

import type {
  BlockObjectResponse,
  CommentObjectResponse,
  CreateCommentParameters,
  DatabaseObjectResponse,
  ListCommentsResponse,
  PageObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import type { MdBlock } from "notion-to-md/build/types";

interface NotionPostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image?: string[];
  rank?: number;
  excerpt?: string;
  slug: string;
  contents?: MdBlock[];
}

// Notion API(Database)のリクエストレスポンス用
interface notionPostBase {
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    Page: {
      title: TextRichTextItemResponse[];
    };
    Date: {
      date: {
        start: string;
      };
    };
    Tags: {
      multi_select: NotionMultiSelect[];
    };
    FeaturedImage: {
      files: NotionFiles[];
    };
    Excerpt: {
      rich_text: TextRichTextItemResponse[];
      plain_text: string;
    };
    Slug: {
      rich_text: TextRichTextItemResponse[];
      plain_text: string;
    };
  };
}

interface NotionMultiSelect {
  id: string;
  name: string;
  color: string;
}

interface NotionFiles {
  name: string;
  file: {
    url: string;
    expiry_time: string;
  };
}

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getAllPageContents(): Promise<NotionPostData[]> {
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

  // ベースはPageObjectResponseなのでそれを拡張
  type NotionPost = PageObjectResponse & notionPostBase;

  const postsProperties = posts.map((post: NotionPost) => {
    // レコードidの取り出し
    const id = post.id;

    // titleプロパティの取り出し
    const title = post.properties.Page.title[0]?.plain_text;

    // // dateプロパティの取り出し
    const date = post.properties.Date.date.start;

    // multi_selectプロパティの取り出し（例：types）
    const tags = post.properties.Tags.multi_select.map(
      (item: NotionMultiSelect) => item.name
    );

    // imageプロパティの取り出し（例：file）
    const image = post.properties.FeaturedImage.files.map(
      (file: NotionFiles) => file.file.url
    );

    // 概要テキスト取り出し
    const excerpt = post.properties.Excerpt.rich_text[0].plain_text;

    // Slug取り出し
    const slug = post.properties.Slug.rich_text[0].plain_text;

    // プロパティをまとめたオブジェクトを返す
    return { id, title, date, tags, image, excerpt, slug };
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
  const post_data = (await all_post_data).find(
    ({ slug }) => slug == slug_param
  );

  // 該当のコンテンツを取り出す
  const post_contents = await getPageContent(post_data.id);
  post_data["contents"] = post_contents;

  return post_data;
}

/*

interface NotionPostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image?: string[];
  rank?: number;
  excerpt?: string;
  slug: string;
  contents?: MdBlock[];
}
  */
