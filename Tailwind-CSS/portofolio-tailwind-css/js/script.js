// navbar-fixed -> window.onscroll akan menjalankan function ketika window atau layar browser kita scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; // jarak dari posisi header terhadap topnya, harusnya saat tampilan berada dipaling atas windownya itu posisinya 0, dan akan bertambah seiring kita scroll windownya.
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
