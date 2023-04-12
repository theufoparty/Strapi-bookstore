const renderStartPage = async () => {
	const user = await fetchUser();
	const books = await fetchBooks();
	const theme = await fetchTheme();
	document.body.classList.add(theme);
	const authenticationElement = getAuthenticationElement({
		user,
		renderPage: renderStartPage,
		href: "/frontend/user.html",
	});
	const bookListElement = getBookListElement({
		books,
		user,
		renderPage: renderStartPage,
	});

	document.body.innerHTML = "";
	document.body.append(authenticationElement);
	document.body.append(bookListElement);
};
