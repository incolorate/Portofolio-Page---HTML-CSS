let menu = document.querySelector("#hamburger-menu");
let navBar = document.querySelector(".nav-options");

menu.addEventListener("click", () => {
  if (navBar.style.display === "none") {
    navBar.style.display = "flex";
  } else {
    navBar.style.display = "none";
  }
});

let toggleProjects = document.querySelector("#toggle-projects");

toggleProjects.onclick = () => {
  document.querySelector("#more-projects").style.display = "initial";
};
