const calculateRating = (ratingList) => {
	if (!ratingList.length) {
		return 0;
	}
	return Math.round(ratingList.reduce((sum, current) => sum + current, 0) / ratingList.length);
};

const getRatingElement = ({ book, user, renderPage }) => {
	const ratingElement = createElement("div", "book-rating-buttons");

	const userRating = user?.ratings.find((rating) => rating.book.id === book.id);

	const ratingNumber = calculateRating(book.ratings.map(({ rating }) => rating));

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

	[1, 2, 3, 4, 5].forEach((starNumber) => {
		const star = createElement("button", ratingNumber >= starNumber ? "filled-star" : "empty-star");
		star.addEventListener("click", () => addRating(starNumber));
		ratingElement.append(star);
	});

	return ratingElement;
};
