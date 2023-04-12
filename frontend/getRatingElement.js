const getRatingElement = ({ book, user, renderPage }) => {
	const ratingContainer = createElement("div", "book-rating-container");
	const ratingElement = createElement("div", "book-rating-buttons");

	const userRating = user?.ratings.find((rating) => rating.book.id === book.id);

	const ratingNumber = getBookRating(book);

	const addRating = (newRating) => {
		if (userRating) {
			const config = {
				method: "PUT",
				body: JSON.stringify({
					data: {
						rating: newRating,
					},
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
			};
			fetch(`http://localhost:1337/api/ratings/${userRating.id}`, config).then(() => renderPage());
		} else {
			const config = {
				method: "POST",
				body: JSON.stringify({
					data: {
						book: book.id,
						users_permissions_user: user.id,
						rating: newRating,
					},
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
			};
			fetch(`http://localhost:1337/api/ratings`, config).then(() => renderPage());
		}
	};

	const ratingText = createElement("p", "rating-text");
	ratingText.innerText = "Rating:";

	ratingContainer.append(ratingText);

	[1, 2, 3, 4, 5].forEach((starNumber) => {
		const star = createElement(
			"button",
			ratingNumber >= starNumber
				? `filled-star${user ? "" : "-unresponsive"}`
				: `empty-star${user ? "" : "-unresponsive"}`
		);
		if (user) {
			star.addEventListener("click", () => addRating(starNumber));
		}
		ratingElement.append(star);
	});

	ratingContainer.append(ratingElement);

	return ratingContainer;
};
