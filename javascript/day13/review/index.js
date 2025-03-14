const btn = document.querySelector(".btn--switch");

btn.addEventListener("click", () => {
  btn.classList.toggle("on");
});

// 강사님 버전
const switchBtn = document.querySelector(".switch");
const circle = document.querySelector(".circle");

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("offColor");
  switchBtn.classList.toggle("onColor");
  circle.classList.toggle("offPosition");
  circle.classList.toggle("onPosition");
});

// 체크박스
const checkbox = document.querySelector(".checkbox");
const checkboxWrap = document.querySelector(".checkbox-wrap");

checkboxWrap.addEventListener("click", () => {
  checkbox.classList.toggle("onChecked");
  checkbox.classList.toggle("offChecked");
});
