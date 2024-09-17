export default function Grid(){
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="grid-item col-span-2">アイテム1</div>
        <div className="grid-item">アイテム2</div>
        <div className="grid-item">アイテム3</div>
        <div className="grid-item">アイテム4</div>
        <div className="grid-item col-span-3">アイテム5(3列)</div>
        <div className="grid-item">アイテム6</div>
        <div className="grid-item row-span-2">アイテム7(2行)</div>
        <div className="grid-item">アイテム8</div>
        <div className="grid-item">アイテム10</div>
        <div className="grid-item">アイテム11</div>
        <div className="grid-item">アイテム12</div>
        <div className="grid-item col-span-3"><button className="btn btn-primary">ぼたん</button></div>
      </div>
      
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
						{/* row 2 */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
						{/* row 3 */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
      </div>
    </div>
  )
}