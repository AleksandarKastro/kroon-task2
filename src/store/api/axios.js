import axios from 'axios';
import assign from 'lodash/assign';

const a = (settings = {}) =>
	axios.create(
		assign(
			{
				baseURL: 'https://api.github.com',
				timeout: 3000,
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json',
				},
			},
			settings
		)
	);

export default a();
