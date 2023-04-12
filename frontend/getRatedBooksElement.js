const getRatedBooksElement = ({ books, user, renderPage }) => {
	const ratedBooksElement = createElement("div", "rated-books");
	const title = createElement("h2", "rated-books-title");
	title.innerText = "Rated books:";
	ratedBooksElement.append(title);
	const sortBooksElement = getSortBooksElement(renderPage);

	ratedBooksElement.append(sortBooksElement);

	const ratedBooks = books.filter((book) =>
		user.ratings.some((rating) => rating.book.id === book.id)
	);

	const sortedRatedBooks = getSortedBooks(ratedBooks);

	sortedRatedBooks.forEach((book) => {
		const ratedBookElement = getRatedBookElement({ user, book, renderPage });
		ratedBooksElement.append(ratedBookElement);
	});
	if (!sortedRatedBooks.length) {
		const fallbackText = createElement("p", "rated-books-fallback-text");
		fallbackText.innerText = "You have not rated any books yet.";
		ratedBooksElement.append(fallbackText);
	}
	return ratedBooksElement;
};
