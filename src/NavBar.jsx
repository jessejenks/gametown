import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/games">Games</Link>
				</li>
				<li>
					<Link to="/signin">Sign In</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/games" component={Games} />
			<Route path="/signin" component={SignIn} />
		</div>
	</Router>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const SignIn = () => (
	<div>
		<h2>Sign In</h2>
	</div>
);

const Games = ({ match }) => (
	<div>
		<h2>Play some games</h2>
		<ul>
			<li>
				<Link to={`${match.url}/go`}>Go</Link>
			</li>
			<li>
				<Link to={`${match.url}/chess`}>Chess</Link>
			</li>
			<li>
				<Link to={`${match.url}/tic-tac-toe`}>Tic-Tac-Toe</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:gameName`} component={Game} />
		<Route
			exact
			path={match.url}
			render={() => <h3>Please select a game.</h3>}
		/>
	</div>
);

const Game = ({ match }) => (
	<div>
		<h3>{match.params.gameName}</h3>
	</div>
);

export default NavBar;