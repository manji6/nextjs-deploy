import { getAllPageContents } from '../../../lib/notion/notion';
import Link from 'next/link'

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
              <li><Link href={`/notion/post/${content.slug}`}>/notion/post/{content.slug}</Link></li>
            </ul>
          </div>
        )
      })}
    </>
  )

}
