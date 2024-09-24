import type { Metadata } from "next";

import { getAllPageContents, getPageContentBySlug } from '../../../../lib/notion/notion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

// 引数の型定義
type Props = {
  params: { code: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateStaticParams() {
  // 戻り値は "{segmentname: value}" の配列型を指定する必要がある。
  // 存在しないパスを実行された場合、４０４エラーになる

  // Notion からpostsデータを取り出す
  const data = await getAllPageContents();

  // Propertiesに入れているslugはURLのベースになるので、このリストを生成する
  const slug_list = data.map((item: { id: string, title: string, date: string, tags: string[], excerpt: string, slug: string }) => {
    return {
      slug: item.slug
    }
  });

  return slug_list;
}

export async function generateMetadata(): Promise<Metadata> {

  // Notion からpostsデータを取り出す
  const data = await getAllPageContents();

  // Propertiesに入れているslugはURLのベースになるので、このリストを生成する
  const current_post_data = data.map((item: { id: string, title: string, date: string, tags: string[], excerpt: string, slug: string }) => {
    return {
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug
    }
  });

  return {
    title: current_post_data[0].title + " | Blog Title",
    description: current_post_data[0].excerpt,
    openGraph: {
      title: current_post_data[0].title + " | Blog Title",
      description: current_post_data[0].excerpt
    }
  }

}


export default async function Page({ params }: { params: { slug: string } }) {

  const post_data = await getPageContentBySlug(params.slug);

  return (
    <div>
      <div className="container max-w-full bg-white shadow shadow-2xl rounded-lg mb-5 opacity-95">
        <h1 className="p-5 text-2xl font-extrabold">{post_data.title}</h1>
        <div className="p-5">
          {post_data.contents.map((content: { type: string, blockId: string, parent: string, children: [] }, index: number) => {
            const formattedMarkdown = content.parent.replace(/\n/g, '  \n');
            return (
              <div className="pt-3" key={index}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    ol: ({ ...props }) => <ol className="list-decimal list-inside pb-2" {...props} />,
                    li: ({ children }) => (<li className="ml-5 list-disc">{children}</li>),
                    h2: ({ children }) => (<h4 className="text-xl font-bold">{children}</h4>)
                  }}
                >
                  {formattedMarkdown}
                </ReactMarkdown>
              </div>
            )
          })}
        </div>
      </div >
    </div >
  )
}