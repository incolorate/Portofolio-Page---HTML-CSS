let menu = document.querySelector("#hamburger-menu");
let navBar = document.querySelector(".nav-options");

menu.addEventListener("click", () => {
  if (navBar.style.display === "none") {
    navBar.style.display = "flex";
  } else {
    navBar.style.display = "none";
  }
});
