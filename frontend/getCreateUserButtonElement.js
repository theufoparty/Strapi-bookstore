const getCreateUserButton = (renderPage) => {
	const createButton = createElement("button", "create-button");
	createButton.innerText = "Create User";
	createButton.addEventListener("click", () => {
		const createUserFormElement = getCreateUserFormElement(renderPage);
		document.body.innerHTML = "";
		document.body.append(createUserFormElement);
		const closeFormButton = getCloseFormButton(renderPage);
		document.body.append(closeFormButton);
	});

	return createButton;
};
