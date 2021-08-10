import * as types from './actions/userActionTypes';
import merge from 'lodash/merge';
import assign from 'lodash/assign';

const initialState = {
	gists: {},
};

const reducer = (state = initialState, { type: actionType, payload: actionPayload }) => {
	switch (actionType) {
		case types.GISTS_ARE_LOADED: {
			return setGistsAreLoaded(state, actionPayload);
		}
		// case types.GISTS_FAILED_TO_LOAD: {
		// 	return setRocketAreLoading(state, actionPayload);
		// }


		default:
			return { ...state };
	}
};

const setGistsAreLoaded = (state, gists) => {
	return merge({}, state, { gists });
};


export const reducerName = 'gistsReducer';
export default reducer;
