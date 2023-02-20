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
  let arrowUp = `<span class="fa-solid fa-angles-up"></span>`;
  let arrowDown = `<span class="fa-solid fa-angles-down"></span>`;
  if (toggleProjects.innerHTML == arrowUp) {
    console.log("hello");
    document.querySelector("#more-projects").style.display = "none";
    toggleProjects.innerHTML = arrowDown;
  } else {
    document.querySelector("#more-projects").style.display = "initial";
    toggleProjects.innerHTML = arrowUp;
  }
};
