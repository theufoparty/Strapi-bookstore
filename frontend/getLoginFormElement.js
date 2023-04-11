const getLoginFormElement = (renderPage) => {
	const loginFormElement = createElement("form", "login");
	const usernameInput = getInputElement("Username:", "username", "text");
	const passwordInput = getInputElement("Password:", "password", "password");
	const submitButton = createElement("button", "submit-button");
	submitButton.innerText = "Login";
	loginFormElement.append(usernameInput);
	loginFormElement.append(passwordInput);
	loginFormElement.append(submitButton);

	const login = (event) => {
		event.preventDefault();

		fetch("http://localhost:1337/api/auth/local", {
			method: "POST",
			body: JSON.stringify({
				identifier: getInputValue(usernameInput),
				password: getInputValue(passwordInput),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.ok && res.json())
			.then((data) => {
				if (data) {
					const userString = JSON.stringify(data);
					document.cookie = `auth=${userString}`;
					renderPage();
				}
			});
	};
	loginFormElement.addEventListener("submit", login);
	return loginFormElement;
};
