const getSortedBooks = (books) => {
	const selectedSortOption = getSelectSortOption();
	switch (selectedSortOption) {
		case SORT_OPTIONS.AUTHOR:
			return [...books].sort((a, b) => a.author.localeCompare(b.author));
		case SORT_OPTIONS.TITLE:
			return [...books].sort((a, b) => a.title.localeCompare(b.title));
		case SORT_OPTIONS.RATING:
			return [...books].sort((a, b) => getBookRating(b) - getBookRating(a));
	}
	return books;
};
