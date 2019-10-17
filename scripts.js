// const skillsLink = document.querySelector(".page-header li:nth-child(1) a");
const skillsLink = document.getElementById("skills");
const skillsClose = document.querySelector(".skills-close");
const windowOpened = "window-opened";
const closePage = document.getElementById("close");

skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(windowOpened);
});

skillsClose.addEventListener("click", () => {
  document.body.classList.toggle(windowOpened);
});

closePage.addEventListener("click", () => {
  document.close();
});
