import { getAllPageContents, getPageContentBySlug } from '../../../../lib/notion/notion';
import ReactMarkdown from 'react-markdown';

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

  //  console.dir(slug_list, { depth: null });
  return slug_list;
}

export default async function Page({ params }: { params: { slug: string } }) {



  const pageContents = await getPageContentBySlug(params.slug);

  console.log(pageContents);

  return (
    <>
      <h1>Page: {params.slug}</h1>
      {pageContents.map((content: { type: string, blockId: string, parent: string, children: [] }, index: number) => {
        const formattedMarkdown = content.parent.replace(/\n/g, '  \n');
        return (
          <div className="pt-3 list-decimal" key={index}>
            <ReactMarkdown
              components={{
                ol: ({ ...props }) => <ol className="list-decimal list-inside pb-2" {...props} />,
                li: ({ ...props }) => <li {...props} />
              }}
            >
              {formattedMarkdown}
            </ReactMarkdown>
          </div>
        )
      })}
    </>
  )
}