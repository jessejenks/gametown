import React, {Component} from 'react';

import Home from './HomeComponent';
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Games from './GamesComponent';

// import route Components here
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	// Redirect
} from 'react-router-dom'

import './nav.css';

class NavBar extends Component {
	render() {
		return (
			<Router>
				<div id="nav-bar">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/hello">Hello</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/books">Books</Link></li>
						<li><Link to="/games">Games</Link></li>
					</ul>
					<hr/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/hello" component={Hello} />
						<Route path="/books" component={Books} />
						<Route path="/games" component={Games} />
					</Switch>
				</div>
			</Router>
		);
	}
}


export default NavBar;