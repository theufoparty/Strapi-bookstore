const favoriteContainer = document.querySelector(".favorite-container");

const drawFavorites = () => {
	const favoriteHeading = document.createElement("h1");
	favoriteHeading.innerText = "Favorites:";
	favoriteContainer.innerHTML = "";
	favoriteContainer.append(favoriteHeading);
	const favorites = getFavorites();
	favorites.forEach((favorite) => {
		const titleContainer = document.createElement("div");
		titleContainer.classList.add("favorite-title-container");
		const title = document.createElement("p");
		title.innerText = favorite.title;

		const image = document.createElement("img");
		image.src = favorite.imageUrl;

		const removeButton = document.createElement("button");
		removeButton.classList.add("remove-favorite-button");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => {
			removeFavorite(favorite.title);
			drawFavorites();
		});

		titleContainer.append(title);
		titleContainer.append(image);
		titleContainer.append(removeButton);
		favoriteContainer.append(titleContainer);
	});
};

const redirecToStartPage = () => {
	window.location.href = "http://localhost:5500/frontend/index.html";
};

const onPageLoad = () => {
	const authData = getAuthData();
	if (!authData.user) {
		redirecToStartPage();
	}
	const authenticationContainer = document.querySelector(".auth-container");
	authenticationContainer.innerHTML = "";
	const authenticationElement = getAuthenticationElement({
		authData,
		href: "/frontend/index.html",
		onLogout: redirecToStartPage,
	});

	authenticationContainer.append(authenticationElement);

	drawFavorites();
};

onPageLoad();
