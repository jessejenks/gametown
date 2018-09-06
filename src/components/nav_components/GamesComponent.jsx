import React from 'react';

import Go from '../games_components/Go';

import {
	// BrowserRouter as Router,
	Route,
	Link,
	// Switch,
	// Redirect
} from 'react-router-dom';
const Games = ({match}) => {
	return (
		<div>
			<h1>Games</h1>

			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<ul>
							<li><Link to={`${match.url}/html`}>HTML</Link></li>
							<li><Link to={`${match.url}/css`}>CSS</Link></li>
							<li><Link to={`${match.url}/react`}>React</Link></li>
							<li><Link to={`${match.url}/go`}>Go</Link></li>
						</ul>
					</div>
					<div className="col-md-9">
						<Route path={`${match.path}/html`} render={() => { return <h1>HTML by Ducket book</h1> }}/>
						<Route path={`${match.path}/css`} render={() => { return <h1>CSS by Racheal Andrews</h1> }}/>
						<Route path={`${match.path}/react`} render={() => { return <h1>React by Fullstack.io book</h1> }}/>
						<Route path={`${match.path}/go`} component={Go}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Games;