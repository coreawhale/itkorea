// 유저에게 월[month]을 입력 받고
// 3,4,5를 입력받으면 봄!
// 6,7,8를 입력받으면 여름!
// 9,10,11를 입력받으면 가을!
// 12,1,2를 입력받으면 가을!

const monthNum = +window.prompt("월 입력 (숫자)");

if (monthNum > 2 && monthNum <= 5) {
  window.console.log("봄!");
} else if (monthNum > 5 && monthNum <= 8) {
  window.console.log("여름!");
} else if (monthNum > 8 && monthNum <= 11) {
  window.console.log("가을!");
  // } else if ((monthNum > 0 && monthNum <= 2) || monthNum == 12) { 내방식
} else if (monthNum == 0 || monthNum == 2 || monthNum == 12) {
  // 강사님 방식
  window.console.log("겨울!");
} else {
  window.console.log("그런계절 없음!");
}

// 유저에게 나이를 받고
// 7살 이하면 유치원생
// 8~13이면 초등학생!
// 14~19이면를 중고등학생!!
// 그 외는 성인
const userAge = +window.prompt("나이 입력 (숫자)");

if (userAge <= 7) {
  window.console.log("유치원생!");
} else if (userAge > 7 && userAge <= 13) {
  window.console.log("초등학생!");
} else if (userAge > 13 && userAge <= 19) {
  window.console.log("중고등학생");
} else {
  window.console.log("성인!");
}

// 유저에게 숫자를 입력 받고
//양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0
const num = +window.prompt("숫자입력");
const isPositive = num > 0;
const isNegative = num < 0;
const isOdd = num % 2 == 1;
const isEven = num % 2 == 0;

if (isPositive && isOdd) {
  window.console.log("양의 홀수");
} else if (isPositive && isEven) {
  window.console.log("양의 짝수");
} else if (isNegative && isOdd) {
  window.console.log("음의 홀수");
} else if (isNegative && isEven) {
  window.console.log("음의 짝수");
} else {
  window.console.log("0");
}
