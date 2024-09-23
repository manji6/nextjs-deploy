import { getAllPageContents } from '../../../lib/notion/notion';

export default async function NotionList() {

  const data = await getAllPageContents();

  return (
    <>
      {data.map((content: { id: string, title: string, date: string, tags: string[], excerpt: string, slug: string }, index: number) => {
        return (
          <div className="p-5" key={index}>
            <ul >
              <li>{index}</li>
              <li>{content.id}</li>
              <li>{content.title}</li>
              <li>{content.date}</li>
              <li>{content.tags}</li>
              <li>{content.excerpt}</li>
              <li>{content.slug}</li>
            </ul>
          </div>
        )
      })}
    </>
  )

}
