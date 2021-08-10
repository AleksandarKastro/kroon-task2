import React from 'react';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import { v4 } from 'uuid';
import TableTr from './TableTr';

const Table = ({ columns, data }) => {

	const renderField = (column, data, value) => {
		if (column.render && typeof column.render === 'function') {
			return column.render(column, data, value);
		}
		switch (column.component) {
			case 'text': {
				return <span>{value}</span>;
			}
			case 'image': {
				return <img alt={value} src={value} className="avatar" />;
			}
			default: {
				return null;
			}
		}
	};

	return (
		<div className="st-table-wrap">
			<table className="st-table">
				<thead>
					<tr className="tb-row first" key={v4()}>
						{columns.map((c) => (
							<th key={v4()}>{c.name}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{isArray(data) &&
						!isEmpty(data) &&
						data.map((d) => {
						return	<TableTr columns={columns} data={d} renderField={renderField} key={d.id}/>;
						})}

					{data === 'loading' && (
						<tr className="tb-row" key={v4()}>
							<td colSpan={columns.length} style={{ textAlign: 'center' }} key={v4()}>
								<div className="loading">
									<span>Loading ...</span>
								</div>
							</td>
						</tr>
					)}
					{isEmpty(data) && (
						<tr className="tb-row" key={v4()}>
							<td colSpan={columns.length} style={{ textAlign: 'center' }} key={v4()}>
								<div className="loading">
									<span>Unknown error occured.</span>
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
