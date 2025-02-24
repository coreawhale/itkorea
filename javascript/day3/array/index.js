const age = [21, 33, 32, 18, 32];
const coffee = ["아메", "라떼", "민트", "초코"];
const isMan = [true, true, false, false];
const list = [
  [1, 2, 3],
  [11, 12, 13],
];

window.console.log(coffee[0]); //아메
window.console.log(coffee[2]); //민트
window.console.log(list[0][2]); //3
window.console.log(list[1][0]); //11

const icecream = ["엄마는 외계인", "뉴욕 치즈케이크", "민트초코", "소금우유"];
const [a, b] = icecream; // "엄마는 외계인", "뉴욕 치즈케이크"

window.console.log(b); // "뉴욕 치즈케이크"

const bread = ["소금빵", "메론빵"];
bread[2]; // undefined
bread[2] = "소세지방"; // 세번째 추가됨
bread[3] = "소보로빵"; // 세번째 추가됨

window.console.log(bread); // "소금빵", "메론빵", "소세지방", "소보로빵"
delete bread[1]; // 메론빵 삭제 >> 예약어 const, let, var, delete
window.console.log(bread); // "소금빵", empty, "소세지방", "소보로빵"

const drinks = ["콜라", "사이다", "환타", "탄산수"];

// rest 연산자(나머니 연산자) [...]
// const [one, ...two] = drinks; // "콜라"
const [one, ...two] = drinks; // "사이다", "환타", "탄산수"

const color1 = ["빨", "주", "노"];
const color2 = ["초", "파", "남", "보"];

const [red, ...restColor1] = color1;
const [green, ...restColor2] = color2;

// destructuring 연산자
const newColor = [...restColor1, ...restColor2];
window.console.log(newColor); // ["주", "노", "파", "남", "보"]
