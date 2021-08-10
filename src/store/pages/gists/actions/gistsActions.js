import * as types from './userActionTypes';

import util from '../../../../client/util';
import get from 'lodash/get';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import head from 'lodash/head';

export const loadGists = (data) => (dispatch, getState, { api }) => {
	return api
		.get(`/gists/public`)
		.then((response) => {
			dispatch({ type: types.GISTS_ARE_LOADED, payload: { gists: response } });
			return response;
		})
		.catch((responseError) => {
			dispatch({ type: types.GISTS_FAILED_TO_LOAD, payload: responseError });
			// const handledErrors = util.axios.handleResponseError(responseError);
			// const errors = merge(
			// 	{ _error: 'Form submit error.' },
			// 	handledErrors.fieldErrors,
			// 	isEmpty(handledErrors.generalErrors) ? {} : { _error: head(handledErrors.generalErrors).detail }
			// );
		});
};


