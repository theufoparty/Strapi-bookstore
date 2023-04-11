const getRatingBookFromApiObject = (apiBook) => {
	const id = apiBook.data.id;
	const { author, title, published, pages } = (apiBook = apiBook.data.attributes);
	return { id, author, title, published, pages };
};

const getRatingFromApiObject = (apiRating) => {
	const id = apiRating.data.id;
	const rating = apiRating.data.attributes.rating;
	const book = getRatingBookFromApiObject(apiRating.data.attributes.book);
	return { id, rating, book };
};

const fetchUser = async () => {
	const { user, jwt } = getAuthData();
	if (!user || !jwt) {
		return undefined;
	}
	const userData = await fetchData("users", user.id, jwt);

	const ratingsFromApi = await Promise.all(
		userData.ratings.map((rating) => fetchData("ratings", rating.id, jwt))
	);

	const ratings = ratingsFromApi.map(getRatingFromApiObject);

	return {
		id: userData.id,
		username: userData.username,
		ratings,
		token: jwt,
	};
};
