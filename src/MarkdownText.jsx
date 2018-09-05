import React, {Component} from 'react';
import getMarkdownToHtml from './markdown.js';

class MarkdownText extends Component {
	constructor(props) {
		super(props);

		this.randomFunction = this.randomFunction;
	}

	randomFunction = () => {
		document.getElementById('local-text').innerHtml = "";
	}

	render() {
		// this.randomFunction();
			
		let stuff = <div id="local-text"></div>;
		stuff.innerHtml = getMarkdownToHtml(this.props.user_text);
		return (
			stuff
		);
	}
}


export default MarkdownText;