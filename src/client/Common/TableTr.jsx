import React, { useState } from 'react';
import get from 'lodash/get';
import { v4 } from 'uuid';

const TableTr = ({ columns, data, renderField }) => {
	const [activeId, setActiveId] = useState();

	// const showImg = () =>
	// 	setTimeout(
	// 		() => (
	// 			<div className="showImage" key={data.id}>
	// 				<img src={data.avatar} className="avatar" />
	// 			</div>
	// 		),
	// 		1000
	// 	);

	return (
		<React.Fragment>
			<tr className={activeId === data.id ? 'tb-row active' : 'tb-row'} key={data.id} onClick={() => setActiveId(data.id)}>
				{columns.map((c) => (
					<td key={v4()}>{renderField(c, data, get(data, c.dataField, ''))}</td>
				))}
				{/* {activeId == data.id ? showImg : null} */}
			</tr>
		</React.Fragment>
	);
};

export default TableTr;
