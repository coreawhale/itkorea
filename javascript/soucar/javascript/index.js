const header = document.querySelector("header");
const btnNav = document.querySelector(".btn--nav");
const lnb = document.querySelector(".lnb");

let scrollYPositonEnd;
window.addEventListener("scroll", () => {
  const scrollYPositon = window.scrollY;

  if (scrollYPositonEnd < scrollYPositon || scrollYPositon == 0) {
    header.classList.add("noBackground");
    header.classList.remove("hasBackground");
  } else {
    header.classList.remove("noBackground");
    header.classList.add("hasBackground");
  }

  // scrollYPositonEnd < scrollYPositon || scrollYPositon == 0
  //   ? header.classList.add("noBackground").remove("hasBackground")
  //   : header.classList.remove("noBackground").add("hasBackground");

  scrollYPositonEnd = scrollYPositon;
});

btnNav.addEventListener("click", () => {
  lnb.classList.toggle("active");
});
