const getBookElement = ({ book, user, renderPage }) => {
  const container = createElement("div", "book");

  const thumbnail = createElement("img", "thumbnail");
  thumbnail.src = book.images?.thumbnail;
  container.append(thumbnail);

  const infobox = createElement("div", "book-infobox");
  infobox.classList.add("book-infobox");

  const title = createElement("p", "book-title");
  title.innerText = `${book.title}`;

  const author = createElement("p", "book-author");
  author.innerText = `By ${book.author}`;

  const pages = createElement("p", "book-pages");
  pages.innerText = `Pages: ${book.pages}`;

  const published = createElement("p", "book-published");
  published.innerText = `Published: ${book.published}`;

  infobox.append(title);
  infobox.append(author);
  infobox.append(pages);
  infobox.append(published);
  container.append(infobox);

  const userbox = createElement("div", "book-userbox");
  const ratingElement = getRatingElement({ book, user, renderPage });
  userbox.append(ratingElement);
  if (user) {
    const yourRatingElement = getYourRatingElement(book, user);
    userbox.append(yourRatingElement);
    const favoriteButtonElement = getFavoriteButtonElement({
      book,
      user,
      renderPage,
    });
    userbox.append(favoriteButtonElement);
  }

  container.append(userbox);

  return container;
};
