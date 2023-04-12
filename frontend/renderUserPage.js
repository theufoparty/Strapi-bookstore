const renderUserPage = async () => {
	const user = await fetchUser();
	if (!user) {
		window.location.href = "/frontend/index.html";
	}
	const books = await fetchBooks();
	const theme = await fetchTheme();
	document.body.classList.add(theme);
	const authenticationElement = getAuthenticationElement({
		user,
		renderPage: renderStartPage,
	});
	const favoriteBooksElement = getFavoriteBooksElement({ user, books, renderPage: renderUserPage });

	const ratedBooksElement = getRatedBooksElement({ user, books, renderPage: renderUserPage });

	const backToStartPageElement = getBackToStartPageButtonElement();

	document.body.innerHTML = "";
	document.body.append(authenticationElement);

	document.body.append(favoriteBooksElement);
	document.body.append(ratedBooksElement);
	document.body.append(backToStartPageElement);
};
