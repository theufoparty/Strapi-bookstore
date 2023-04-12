const getFavoriteBooksElement = ({ user, books, renderPage }) => {
	const favoriteBooksElement = createElement("div", "favorite-books");
	const title = createElement("h2", "favorite-books-title");
	title.innerText = "Reading List:";
	favoriteBooksElement.append(title);
	const favorites = books.filter((book) =>
		user.favorites.some((favorite) => favorite.id === book.id)
	);
	favorites.forEach((book) => {
		const favoriteBookElement = getFavoriteBookElement({ user, book, renderPage });
		favoriteBooksElement.append(favoriteBookElement);
	});
	if (!favorites.length) {
		const fallbackText = createElement("p", "favorite-books-fallback-text");
		fallbackText.innerText = "You have not added any books to your reading list.";
		favoriteBooksElement.append(fallbackText);
	}

	return favoriteBooksElement;
};
