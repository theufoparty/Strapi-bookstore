const getAuthenticationElement = ({ user, href, renderPage }) => {
	const authenticationElement = createElement("div", "auth");

	if (user) {
		const username = getUsernameElement(user, href);
		const logoutButton = getLogoutButtonElement(renderPage);
		authenticationElement.append(username);
		authenticationElement.append(logoutButton);
	} else {
		const loginButton = getLoginButtonElement(renderPage);
		const createButton = getCreateUserButton(renderPage);
		authenticationElement.append(loginButton);
		authenticationElement.append(createButton);
	}

	return authenticationElement;
};
