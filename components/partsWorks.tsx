import works_data from './works.json';
import nl2br from "react-nl2br";

export default function PartsWorks(props: any) {

  return (
    <>
      <div className="p-5">
        <h3 className="text-xl font-extrabold">{works_data[props["category"]][0]["category"]}</h3>
      </div>
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {works_data[props["category"]].map((value) => (
                <tr>
                  <th>{nl2br(value.title)}</th>
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

