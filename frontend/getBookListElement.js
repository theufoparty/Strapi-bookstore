const getBookListElement = ({ books, user, renderPage }) => {
  const bookListElement = createElement("div", "book-container");
  books.forEach((book) => {
    const bookElement = getBookElement({ book, user, renderPage });
    bookListElement.append(bookElement);
  });
  return bookListElement;
};
