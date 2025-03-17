// const input = document.querySelector(".input");
// const textLength = document.querySelector(".textLength");
// const condition = document.querySelector(".condition");

import { hasSpecialChar, lengthValid } from "./func.js";

// input.addEventListener("input", () => {
//   textLength.innerText = input.value.length;
//   textLength.style.color = input.value.length > 10 ? "red" : "black";

//   //   const text = input.value;
//   //   text.split("").forEach((x) => {
//   //     condition.style.color =
//   //       x == "!" || x == "@" || x == "#" ? "green" : "black";
//   //   });
//   condition.style.color = ["!", "@", "#"].some((x) => input.value.includes(x)) //some: 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트, includes: 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환
//     ? "green"
//     : "black";
// });

// 1. 숫자 10글자 넘으면 빨간색 아니면 검은색
// 2. 조건의 글씨색이 합당하면 초록색 아니면 검은색

// 타다문구점 회원가입

// 위 내용 함수화

const input = document.querySelector(".input");
const textNum = document.querySelector(".textNum");
const condition = document.querySelector(".condition");

input.addEventListener("input", () => {
  const { length } = input.value;
  textNum.innerText = length;
  textNum.style.color = lengthValid(length);
  condition.style.color = hasSpecialChar(input.value, "!@#$%^");
});
