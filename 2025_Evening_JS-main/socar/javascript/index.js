const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const upbar = document.querySelector(".upBar");
const downbar = document.querySelector(".downBar");
const download = document.querySelector(".download");

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  if (scrollY > 0) {
    logo.src = "https://www.socar.kr/images/logo-blue.svg";
    header.classList.add("act");
    upbar.classList.add("blue");
    downbar.classList.add("blue");
    upbar.classList.remove("white");
    downbar.classList.remove("white");
  } else {
    logo.src = "https://www.socar.kr/images/logo-w.svg";
    header.classList.remove("act");
    upbar.classList.add("white");
    downbar.classList.add("white");
    upbar.classList.remove("blue");
    downbar.classList.remove("blue");
  }
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  upbar.classList.toggle("upbarX");
  downbar.classList.toggle("downbarX");
});

window.addEventListener("wheel", (e) => {
  const { deltaY } = e;
  if (deltaY > 0) {
    header.classList.add("onHidden");
    header.classList.remove("onShow");
  } else {
    header.classList.add("onShow");
    header.classList.remove("onHidden");
  }
});

const conceptCard = document.querySelectorAll(".concept__card");
const ob = new IntersectionObserver(
  (entries) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        v.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

conceptCard.forEach((v) => ob.observe(v)); // 기능을 만들고 돌려도 됨!!!

const banner = document.querySelector(".banner");
ob.observe(banner);
