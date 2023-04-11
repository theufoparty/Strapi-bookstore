const getUsernameElement = (user, href) => {
	const usernameElement = createElement("a", "username");
	usernameElement.href = href;
	usernameElement.innerText = user.username;
	return usernameElement;
};
