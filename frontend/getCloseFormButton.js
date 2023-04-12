const getCloseFormButton = (renderPage) => {
	const closeFormButton = createElement("button", "close-form-button");
	closeFormButton.addEventListener("click", renderPage);
	closeFormButton.innerText = "Close Form";
	return closeFormButton;
};
