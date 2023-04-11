const createElement = (tagName, className) => {
	const element = document.createElement(tagName);
	if (className) {
		element.classList.add(className);
	}
	return element;
};
