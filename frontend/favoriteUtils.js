const getFavorites = () => {
	let favorites = [];

	try {
		favorites = JSON.parse(window.localStorage.getItem("favorites")) || [];
	} catch (error) {
		console.log(error);
		favorites = [];
	}

	return favorites;
};

const addFavorite = (newFavorite) => {
	const favorites = getFavorites();
	const newFavorites = [...favorites, newFavorite];
	window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

const removeFavorite = (titleToRemeove) => {
	const favorites = getFavorites();
	const newFavorites = favorites.filter((favorite) => favorite.title !== titleToRemeove);
	window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

const isFavorite = (title) => {
	const favorites = getFavorites();
	return favorites.some((favorite) => favorite.title === title);
};
