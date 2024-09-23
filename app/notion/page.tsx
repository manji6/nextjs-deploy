import { notion, getAllPageContents, getPageContent } from '../../lib/notion/notion';
import ReactMarkdown from 'react-markdown';

export default async function Notion() {

  const data = await getAllPageContents();

  console.log(data);

  const pageContents = await getPageContent("34569729-da36-479e-8390-81c76dfd9570");
  console.log(pageContents);


  // 参考
  // https://zenn.dev/jinku/articles/722e8f93e87111

  return (
    <>
      {pageContents.map((content: any, index: any) => {
        const formattedMarkdown = content.parent.replace(/\n/g, '  \n');
        return (
          <div className="pt-3 list-decimal" key={index}>
            <ReactMarkdown
              components={{
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside pb-2" {...props} />,
                li: ({ node, ...props }) => <li {...props} />
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