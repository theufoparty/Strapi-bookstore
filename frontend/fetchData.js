const fetchData = (contentType, id, jwt) => {
	return fetch(`http://localhost:1337/api/${contentType}/${id ?? ""}?populate=*`, {
		headers: {
			"Content-Type": "application/json",
			...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
		},
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			console.error(response);
		}
	});
};
