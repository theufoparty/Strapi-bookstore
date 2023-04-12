const fetchTheme = async () => {
	const data = await fetchData("page-theme");
	return data.data.attributes.theme;
};

fetchTheme();
