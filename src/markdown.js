function getMarkdownToHtml(text) {
	let converter = new window.showdown.Converter();
    return converter.makeHtml(text);
}

export default getMarkdownToHtml;