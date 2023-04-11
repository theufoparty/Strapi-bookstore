const renderStartPage = async () => {
	const user = await fetchUser();
	const books = await fetchBooks();
	const bookListElement = getBookListElement({ books, user, renderPage: renderStartPage });
	const authenticationElement = getAuthenticationElement({
		user,
		renderPage: renderStartPage,
		href: "/frontend/user.html",
	});

	document.body.innerHTML = "";
	document.body.append(authenticationElement);
	document.body.append(bookListElement);
};
