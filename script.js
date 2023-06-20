let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "A WEB DEVELOPER",
    "A MATHEMATICIAN",
    "AN EDUCATIONAL CONTENT CREATOR",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 100,
  loop: true,
});

const typed2 = new Typed(".multiple-text2", {
  strings: [
    "WEB DEVELOPER",
    "MATHEMATICIAN",
    "EDUCATIONAL CONTENT CREATOR",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 100,
  loop: true,
});
