import React from 'react';
import { Link } from 'react-router-dom';
import RcPagination from 'rc-pagination';
import util from '../util';

const JsonApiPagination = (props) => {
	const { queryString, meta, itemsPerPage = 30 } = props;
	const parsedQueryString = queryString ? util.url.deparam(queryString, true) : null;

	let currentPage = parsedQueryString ? parsedQueryString[Object.keys(parsedQueryString)[0]] : 1;

	const itemRender = (current, type, element) => {

		switch (type) {
			case 'jump-next': {
				return <span>...</span>;
			}
			case 'jump-prev': {
				return <span>...</span>;
			}
			case 'next': {
				if (current > meta.last) {
					return (
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="15.414" viewBox="0 0 8.414 15.414">
								<g id="Group_2853" data-name="Group 2853" transform="translate(-46.793 -6565.793)">
									<line
										id="Line_242"
										data-name="Line 242"
										x2="7"
										y2="7"
										transform="translate(47.5 6566.5)"
										fill="none"
										stroke="#797c80"
										strokeLinecap="round"
										strokeWidth="1"
									/>
									<line
										id="Line_243"
										data-name="Line 243"
										y1="7"
										x2="7"
										transform="translate(47.5 6573.5)"
										fill="none"
										stroke="#797c80"
										strokeLinecap="round"
										strokeWidth="1"
									/>
								</g>
							</svg>
						</span>
					);
				}

				return (
					<Link to={`?page=${meta.next}`} role="button" tabIndex="0">
						<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="15.414" viewBox="0 0 8.414 15.414">
							<g id="Group_2853" data-name="Group 2853" transform="translate(-46.793 -6565.793)">
								<line
									id="Line_242"
									data-name="Line 242"
									x2="7"
									y2="7"
									transform="translate(47.5 6566.5)"
									fill="none"
									stroke="#797c80"
									strokeLinecap="round"
									strokeWidth="1"
								/>
								<line
									id="Line_243"
									data-name="Line 243"
									y1="7"
									x2="7"
									transform="translate(47.5 6573.5)"
									fill="none"
									stroke="#797c80"
									strokeLinecap="round"
									strokeWidth="1"
								/>
							</g>
						</svg>
					</Link>
				);
			}
			case 'prev': {
				if (current < meta.first || current <= 0) {
					return (
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="15.414" viewBox="0 0 8.414 15.414">
								<g id="Group_2852" data-name="Group 2852" transform="translate(-57.793 -6565.793)">
									<line
										id="Line_244"
										data-name="Line 244"
										x1="7"
										y1="7"
										transform="translate(58.5 6573.5)"
										fill="none"
										stroke="#797c80"
										strokeLinecap="round"
										strokeWidth="1"
									/>
									<line
										id="Line_245"
										data-name="Line 245"
										x1="7"
										y2="7"
										transform="translate(58.5 6566.5)"
										fill="none"
										stroke="#797c80"
										strokeLinecap="round"
										strokeWidth="1"
									/>
								</g>
							</svg>
						</span>
					);
				}
				return (
					<Link to={`?page=${current - 1}`} role="button" tabIndex="0">
						<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="15.414" viewBox="0 0 8.414 15.414">
							<g id="Group_2852" data-name="Group 2852" transform="translate(-57.793 -6565.793)">
								<line
									id="Line_244"
									data-name="Line 244"
									x1="7"
									y1="7"
									transform="translate(58.5 6573.5)"
									fill="none"
									stroke="#797c80"
									strokeLinecap="round"
									strokeWidth="1"
								/>
								<line
									id="Line_245"
									data-name="Line 245"
									x1="7"
									y2="7"
									transform="translate(58.5 6566.5)"
									fill="none"
									stroke="#797c80"
									strokeLinecap="round"
									strokeWidth="1"
								/>
							</g>
						</svg>
					</Link>
				);
			}
			case 'page': {
				return <Link to={`?page=${current}`}>{current}</Link>;
			}

			default:
				return element;
		}
	};


	return (
		<RcPagination
			className="st-pagination light mt40"
			onChange={(current, pageSize) => {}}
			current={currentPage}
			total={1110}
			pageSize={itemsPerPage}
			itemRender={itemRender}
		/>
	);
};

export default JsonApiPagination;
