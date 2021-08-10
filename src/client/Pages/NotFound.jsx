import React from 'react';

const NotFound = ({ staticContext = {} }) => {
	staticContext.status = 404;
	return (
		<div className="standard-wrap txt-center">
			<p className="st-title mb20 mt80">404</p>
			<h1 className="st-title mb40">This page could not be found.</h1>
			<div className="st-column">
				<p>
					Take me back to
					<a className="st-link" href="/">
						Task 2
					</a>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
