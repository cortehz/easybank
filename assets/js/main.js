const navSLide = () => {
  const menu = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar-ul");

  const hamImg = document.querySelector("#hamburger-toggle");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // setInterval(() => {
    nav.classList.contains("nav-active")
      ? (hamImg.src = "assets/images/icon-close.svg")
      : (hamImg.src = "assets/images/icon-hamburger.svg");
    // }, 1500);
  });
};

navSLide();
