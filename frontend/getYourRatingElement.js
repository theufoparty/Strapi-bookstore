const getYourRatingElement = (book, user) => {
	const yourRatingElement = createElement("div", "book-rating-buttons");
	const userRating = user?.ratings.find((rating) => rating.book.id === book.id);

	const title = createElement("p");

	if (userRating) {
		title.innerText = "Your Rating:";
		yourRatingElement.append(title);
		[1, 2, 3, 4, 5].forEach((starNumber) => {
			const star = createElement(
				"button",
				userRating.rating >= starNumber ? "filled-star-unresponsive" : "empty-star-unresponsive"
			);
			yourRatingElement.append(star);
		});
	} else {
		title.innerText = "Not rated yet";
		yourRatingElement.append(title);
	}

	return yourRatingElement;
};
