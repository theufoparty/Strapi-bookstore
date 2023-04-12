const getUsernameElement = (user, href) => {
	const usernameElement = createElement(href ? "a" : "h1", "username");
	if (href) {
		usernameElement.href = href;
	}
	usernameElement.innerText = user.username;
	return usernameElement;
};
