const num = [3, 9, 15, 23, 40];
const a = num.some((x) => {
  return x < 5;
});

console.log(a); //true

const b = num.every((x) => {
  return x % 2;
});

console.log(a); //true

// const menu = ["바닐라", "녹차", "요거트", "딸기"];

// const c = menu.find((x) => {
//   return x == "요거트";
// });

// console.log(c);

const menu = [
  { name: "망고", price: 3500 },
  { name: "딸기", price: 4000 },
  { name: "요거트", price: 4500 },
  { name: "사과", price: 5000 },
];

const c = menu.find((x) => {
  return x.price == 4000 || x.price == 4500;
});

console.log(c);

const num1 = [3, 6, 9, 12, 15];

// reduce 누적시키기
// accumulator >> 누적값
// current

const num1Result = num1.reduce((acc, cur) => {
  return acc + cur;
});

console.log(num1Result);
