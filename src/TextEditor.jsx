import React, {Component} from 'react';
// import MarkdownText from './MarkdownText';
// import getMarkdownToHtml from './markdown.js';
//  dangerouslySetInnerHTML={this.getMarkDown()}>
import './texteditor.css';



class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: '',
			buttons: [

				"thing 1",
				"thing 2",
				"thing 3",
				"thing 4"
				// "\\(\\int_{a}^{b}\\)",
				// "\\(\\sum_{k=1}^{\\infty}\\)",
				// "\\(\\frac{p}{q}\\)"
			]
		};

		this.handleChange = this.handleChange;
		this.handleButton = this.handleButton;
		this.handleSubmit = this.handleSubmit;
	}

	handleChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		// let val = e.target.value;


		// if (name === "text") {
		// 	document.getElementById('actual-text').innerHTML = getMarkdownToHtml(this.state.text);

		// // 	val = getMarkdownToHtml(val);
		// // // 	window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,"actual-text"]);
		// }



		this.setState({
			[name]: e.target.value
		});
	}

	handleButton = (e) => {
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.value);
		// document.getElementById('texteditor-text').value += e.target.value;
		const stuff = e.target.value;
		this.setState((oldState, props) => ({
					text: oldState.text + stuff
				}));
		// document.getElementById('texteditor-text').focus();
	}

	handleSubmit = (e) => {
		alert(this.state.text);
	}

	// getMarkDown = () => {
	// 	return {__html:""+getMarkdownToHtml(this.state.text)};
	// }

	// componentDidMount = () => {
	// 	// document.getElementById('texteditor-text').focus();
	// 	document.getElementById('texteditor-title').focus();
	// }

	render() {
		const butts = this.state.buttons.map(b => <button key={b} value={b+' '} className="tex-button" onClick={this.handleButton}>{b}</button>);
		return (
			<div>
				<div id="texteditor-container">
					<div className="option">
						<label htmlFor="texteditor-title">Title:</label>
						<input
							id="texteditor-title"
							name="title"
							type="text"
							value={this.state.title}
							onChange={this.handleChange}
							placeholder="My Greate Project"/>
					</div>
					<div className="option">
						<textarea
							id="texteditor-text"
							name="text"
							value={this.state.text}
							onChange={this.handleChange}
							placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" />
					</div>
					<div>{butts}</div>
					<button id="save-entry" onClick={this.handleSubmit}>Save</button>
				</div>

				<div id="on-the-side" className={(this.state.title === '' && this.state.text === '')?"":"grey-bg"}>
					<h2>{this.state.title}</h2>
					{(this.state.title !== '') && <hr />}
					<div id="actual-text">
						{this.state.text}
					</div>
				</div>
				<br />
				
			</div>
		);
	}
}


export default TextEditor;