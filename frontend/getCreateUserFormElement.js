const getCreateUserFormElement = (renderPage) => {
	const createUserFormElement = createElement("form", "create");
	const usernameInput = getInputElement("Username:", "username", "text");
	const passwordInput = getInputElement("Password:", "password", "password");
	const emailInput = getInputElement("Email:", "email", "email");
	const submitButton = createElement("button", "submit-button");
	submitButton.innerText = "Create User";
	createUserFormElement.append(usernameInput);
	createUserFormElement.append(passwordInput);
	createUserFormElement.append(emailInput);
	createUserFormElement.append(submitButton);

	const create = (event) => {
		event.preventDefault();
		fetch("http://localhost:1337/api/auth/local/register", {
			method: "POST",
			body: JSON.stringify({
				username: getInputValue(usernameInput),
				password: getInputValue(passwordInput),
				email: getInputValue(emailInput),
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

	createUserFormElement.addEventListener("submit", create);
	return createUserFormElement;
};
