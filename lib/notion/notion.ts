import { Client } from "@notionhq/client";
//import { getPage } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.PUBLIC_NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

interface NotionPostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  files: string[];
  excerpt: string;
  slug: string;
}

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

/* Replace */
export type NotionDatabaseObjectResponse = DatabaseObjectResponse;
export type NotionPageObjectResponse = PageObjectResponse;
export type NotionBlockObjectResponse = BlockObjectResponse;
export type NotionListCommentsResponse = ListCommentsResponse;
export type NotionCommentObjectResponse = CommentObjectResponse;
export type NotionRichTextItemResponse = RichTextItemResponse;
export type NotionCreateCommentParameters = CreateCommentParameters; // Request only

/* Extract */
export type NotionDatabaseProperty = NotionDatabaseObjectResponse["properties"];
export type NotionDatabasePropertyConfigResponse =
  NotionDatabaseObjectResponse["properties"][string];
export type NotionSelectPropertyResponse = Extract<
  NotionDatabasePropertyConfigResponse,
  { type: "select" }
>["select"]["options"][number];
export type NotionSelectColor = NotionSelectPropertyResponse["color"];
export type NotionRichTextItemRequest =
  CreateCommentParameters["rich_text"][number]; // Request only

/* Custom */
export type NotionPostMeta = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  updatedAt: string;
  tags: NotionSelectPropertyResponse[];
  likes: number;
};
export type NotionPost = NotionPostMeta & {
  children: NotionBlockObjectResponse[];
};
export type NotionBlogProperties = {
  categories: NotionSelectPropertyResponse[];
  tags: NotionSelectPropertyResponse[];
};
export type NotionBlogPropertiesWithCount = {
  categories: (NotionSelectPropertyResponse & { count: number })[];
  tags: (NotionSelectPropertyResponse & { count: number })[];
};

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

  //  console.dir(posts, { depth: null });

  // DatabaseObjectResponse

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
