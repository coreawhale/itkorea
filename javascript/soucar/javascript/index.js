const header = document.querySelector("header");
const btnNav = document.querySelector(".btn--nav");
const lnb = document.querySelector(".lnb");
const logoImg = document.querySelector(".logo_img");

let scrollYPositonEnd;
window.addEventListener("scroll", () => {
  const scrollYPositon = window.scrollY;

  if (scrollYPositon == 0) {
    header.classList.add("noBackground");
    header.classList.add("slideUp");
    header.classList.remove("slideDown");
    header.classList.remove("hasBackground");
    logoImg.src = "https://www.socar.kr/images/logo-w.svg";
  } else if (scrollYPositonEnd < scrollYPositon) {
    header.classList.remove("slideDown");
    header.classList.add("slideUp");
  } else {
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
    header.classList.remove("noBackground");
    header.classList.add("hasBackground");
    logoImg.src = "https://www.socar.kr/images/logo-blue.svg";
  }

  // scrollYPositonEnd < scrollYPositon || scrollYPositon == 0
  //   ? header.classList.add("noBackground").remove("hasBackground")
  //   : header.classList.remove("noBackground").add("hasBackground");

  scrollYPositonEnd = scrollYPositon;
});

btnNav.addEventListener("click", () => {
  lnb.classList.toggle("active");
});
