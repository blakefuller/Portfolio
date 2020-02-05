// const skillsLink = document.getElementById("skills");
// const skillsClose = document.querySelector(".skills-close");
// const windowOpened = "window-opened";
// const closePage = document.getElementById("close");

// skillsLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.body.classList.toggle(windowOpened);
// });

// skillsClose.addEventListener("click", () => {
//   document.body.classList.toggle(windowOpened);
// });

// closePage.addEventListener("click", () => {
//   document.close();
// });

//cursor animation
var cursor = document.getElementById('cursor');
var visible = true;
var speed = 600;

setInterval(() => {
  if(visible) {
    cursor.style.opacity = 0;
    visible = false;

  }
  else {
    cursor.style.opacity = 1;
    visible = true;
  }
}, speed);
