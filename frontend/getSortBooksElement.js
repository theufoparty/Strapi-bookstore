const getSortBooksElement = (renderPage) => {
	const selectedSortOption = getSelectSortOption();
	const selectElement = createElement("select", "sort-books-select");
	Object.values(SORT_OPTIONS).forEach((option) => {
		const optionElement = createElement("option");
		optionElement.value = option;
		optionElement.innerText = option;
		if (option === selectedSortOption) {
			optionElement.selected = "selected";
		}
		selectElement.append(optionElement);
	});
	selectElement.addEventListener("change", () => {
		setSortOption(selectElement.value);
		renderPage();
	});

	return selectElement;
};
