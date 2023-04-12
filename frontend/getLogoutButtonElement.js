const getLogoutButtonElement = (renderPage) => {
  const logoutButton = createElement("button", "logout-button");
  logoutButton.innerText = "Logout";
  logoutButton.addEventListener("click", () => {
    document.cookie = "auth={}";
    renderPage();
  });
  return logoutButton;
};
