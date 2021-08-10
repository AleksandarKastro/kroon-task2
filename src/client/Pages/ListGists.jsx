import React, { useEffect, useState } from 'react';
import axios from '../../store/api/axios';
import Table from '../Common/Table';
import JsonApiPagination from '../Common/JsonApiPagination';
import util from '../util';
import param from 'jquery-param';
import { useLocation } from 'react-router-dom';
import merge from 'lodash/merge';
import has from 'lodash/has';
import isEmpty from 'lodash/isEmpty';

const createFilterFromQueryString = (queryString) => {
	let parsedQueryString = util.url.deparam(queryString);
	let filter = {};
	if (has(parsedQueryString, 'page') && parsedQueryString.page > 0) {
		filter = merge(filter, { page: parsedQueryString.page });
	}
	return filter;
};

const ListGists = (props) => {
	const [gists, setGists] = useState([]);
	const [loading, setLoading] = useState(1);
	const location = useLocation();

	const gistsListAction = (filter) => {
		setLoading(1);
		axios.get(`/gists/public?${param(filter)}`).then((response) => {
			setGists(response);
			setLoading(0);
			window.scrollTo(0, 0);
		});
	};

	useEffect(() => {
		
		gistsListAction(createFilterFromQueryString(util.url.extractQueryString(location.search)));
	}, [location.pathname, location.search]);

	let currentPage = createFilterFromQueryString(util.url.extractQueryString(location.search));
	currentPage = currentPage ? 1 : Number(currentPage.page);

	let gistsData;
	if (!isEmpty(gists)) {
		gistsData = gists.data.map((gist) => {
			let data = {
				avatar: gist.owner && gist.owner.avatar_url ? gist.owner.avatar_url : null,
				file:
					gist.files && gist.files[Object.keys(gist.files)[0]] && gist.files[Object.keys(gist.files)[0]].filename
						? gist.files[Object.keys(gist.files)[0]].filename
						: null,
				id: gist.id,
			};
			return data;
		});
	}

	const columns = [
		{ name: 'Gists', dataField: 'avatar', component: 'image' },
		{ name: ' ', dataField: 'file', component: 'text' },
	];

	let paginations = {
		first: 1,
		last: 37,
		current: currentPage,
		next: currentPage !== 37 ? currentPage + 1 : null,
		prev: currentPage > 1 || currentPage !== 37 ? currentPage - 1 : null,
	};

	return (
		<div className="content-wrap">
			<Table columns={columns} data={!loading ? (gistsData ? gistsData : null) : 'loading'} />
			<JsonApiPagination meta={paginations} queryString={util.url.extractQueryString(location.search)} title={false} />
		</div>
	);
};

export default ListGists;
