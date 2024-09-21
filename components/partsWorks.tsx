import works_data from './works.json';
import nl2br from "react-nl2br";

export default function PartsWorks(props: any) {

  const getElementList = (tree, targetKey, searchValue, childrenKey) => {
    let array = [];
    const GetElement = (tree, targetKey, searchValue, childrenKey) => {
      for (const i in tree) {
        if (tree[i][targetKey] == searchValue) {
          array.push(tree[i]);
        }
        if (tree[i][childrenKey]) {
          GetElement(tree[i][childrenKey], targetKey, searchValue, childrenKey);
        }
      }
    }
    GetElement(tree, targetKey, searchValue, childrenKey)
    return array;
  }

  const output_data = getElementList(works_data, "category", props["category"], "");

  return (
    <>
      <div className="p-5">
        <h3 className="text-xl font-extrabold">{output_data[0]["category_name"]}</h3>
      </div>
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {output_data.map((value) => (
                <tr>
                  <th className="p-0 max-w-80">{nl2br(value.title)}</th>
                  <td>{value.year}</td>
                  <td>{nl2br(value.role)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

