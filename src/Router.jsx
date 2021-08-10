import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

import ListGists from './client/Pages/ListGists';
import NotFound from './client/Pages/NotFound';

export const ROUTES = [
	{
		id: v4(),
		path: '/',
		link: '/',
		component: ListGists,
		exact: true,
		private: true,
	},
];

const Router = () => {
	return (
		<div className="backoffice-wrap">
			<BrowserRouter>
				<Switch>
					{ROUTES.map((r, id) => (
						<Route key={id} exact={r.exact} path={r.path} render={(routeProps) => <r.component {...routeProps} />} />
					))}
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Router;
