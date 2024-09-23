import { notion, getAllPageContents, getPageContent } from '../../../lib/notion/notion';

export default async function NotionList() {

  const data = await getAllPageContents();

  // console.log(data);

  return (
    <>
      {data.map((content: any, index: any) => {
        console.log(content.id);
        return (
          <div className="p-5">
            <ul>
              <li>{content.id}</li>
              <li>{content.title}</li>
              <li>{content.date}</li>
              <li>{content.types}</li>
              <li>{content.excerpt}</li>
              <li>{content.slug}</li>
            </ul>
          </div>
        )
      })}
    </>
  )

}
