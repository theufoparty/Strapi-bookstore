const getBookRatingFromApiObjekt = (apiRating) => {
  const id = apiRating.id;
  const rating = apiRating.attributes.rating;
  return { id, rating };
};

const getBookFromApiObject = (apiBook) => {
  const id = apiBook.id;
  const { author, title, published, pages, ratings, cover } = (apiBook =
    apiBook.attributes);

  const images = Object.entries(cover.data.attributes.formats).reduce(
    (imageObject, [key, value]) => {
      return {
        ...imageObject,
        [key]: `http://localhost:1337${value.url}`,
      };
    },
    {}
  );
  return {
    id,
    author,
    title,
    published,
    pages,
    ratings: ratings?.data.map(getBookRatingFromApiObjekt) || [],
    images,
  };
};

const fetchBooks = async () => {
  const booksFromApi = await fetchData("books");
  const books = booksFromApi.data.map(getBookFromApiObject);
  return books;
};

fetchBooks();
