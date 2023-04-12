const getBackToStartPageButtonElement = (renderPage) => {
	const backToStartPageButtonElement = createElement("button", "back-button");
	backToStartPageButtonElement.addEventListener("click", () => {
		window.location.href = "/frontend/index.html";
	});
	backToStartPageButtonElement.innerText = "Return to Startpage";
	return backToStartPageButtonElement;
};
