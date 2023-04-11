const getInputElement = (labelText, className, type) => {
	const labelElement = createElement("label");
	labelElement.innerText = labelText;
	const inputElement = createElement("input", className);
	inputElement.type = type;
	labelElement.append(inputElement);
	return labelElement;
};
