const getFavoriteButtonElement = ({ book, user, renderPage }) => {
	const buttonElement = createElement("button", "favorite-button");
	const isFavorite = user.favorites.some((favorite) => favorite.id === book.id);
	buttonElement.innerText = isFavorite ? "Remove from Reading List" : "Add to Reading List";

	const onClick = () => {
		const config = {
			method: "PUT",
			body: JSON.stringify({
				favorites: {
					[isFavorite ? "disconnect" : "connect"]: [book.id],
				},
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		};
		fetch(`http://localhost:1337/api/users/${user.id}`, config).then(() => {
			renderPage();
		});
	};

	buttonElement.addEventListener("click", onClick);
	return buttonElement;
};
