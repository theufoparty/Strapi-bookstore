const SORT_OPTION_KEY = "SORT_OPTION";

const SORT_OPTIONS = {
	RATING: "Rating",
	TITLE: "Title",
	AUTHOR: "Author",
};

const getSelectSortOption = () => {
	return window.localStorage.getItem(SORT_OPTION_KEY) || SORT_OPTIONS.RATING;
};

const setSortOption = (sortOption) => {
	window.localStorage.setItem(SORT_OPTION_KEY, sortOption);
};
