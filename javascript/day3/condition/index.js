// condition(조건)
// 조건문 문법: if, swich, 삼항(?)

const num = +window.prompt("숫자입력");
if (num > 0) {
  window.console.log("양수!");
} else if (num == 0) {
  window.console.log("0!");
} else {
  window.console.log("음수!");
}
window.console.log("끝!");
