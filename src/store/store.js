// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// Redux router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';

// Reducer imports
// import routerReducer, { reducerName as routerReducerName } from './pages/router/routerReducer';
import gistsReducer, {reducerName as gistsReducer} from './pages/gists/gistsReducer';

// Middlewares
import errorReporterMiddleware from './middlewares/errorReporterMiddleware';
import axiosSettingsSetterMiddleware from './middlewares/axiosSettingsSetterMiddleware';

// Axios
import axios from './api/axios';

// Persistence
import merge from 'lodash/merge';
import LocalStorage from './localStorageStore';

// Util
import util from '../client/util';

// Compose enhancers
const composeEnhancers =
	process.env.NODE_ENV === 'production'
		? null || compose
		: (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const history =  createBrowserHistory();

// Root reducer
const rootReducer = combineReducers({
	router: connectRouter(history),
	form: formReducer,
	// [routerReducerName]: routerReducer,
	[gistsReducerName]: gistsReducer,
});

// Use preloaded state from ssr
// let preloadedState = {};
// if (!util.isServer()) {
// 	const serverPreloadedState = window.__PRELOADED_STATE__;
// 	delete window.__PRELOADED_STATE__;
// 	preloadedState = merge(LocalStorage.getReduxState(), serverPreloadedState);
// }

// Middlewares
const middleware = [
	thunk.withExtraArgument({ api: axios }),
	routerMiddleware(history),
	errorReporterMiddleware,
	axiosSettingsSetterMiddleware,
];

// Store creator
const store = () => createStore(rootReducer, null, composeEnhancers(applyMiddleware(...middleware)));

export { history, store };
