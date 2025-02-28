const numArray = [3, 12, 21, 30, 45];
const strArray = ["americano", "latte", "mint", "cocoa", "lemonade"];

// 1. numArray에서 홀수면 '계란' 짝수면 '사과'로 바꾸기
// 2. numArray에서 5의 배수면 "5의배수!" 아니면 그대로 냅두기
// 3. numArray에서 20보다 작으면 0으로 바꾸고 아니면 50으로 바꾸기

// const aaa = (x) => {
//   return x % 2 ? "계란" : "사과";
// };
// 강사님 소스
const q1 = numArray.map((x) => {
  return x % 5 == 0 ? "5의배수" : x;
});

const bbb = (x) => {
  return x % 5 == 0 ? "5의배수" : x;
};

const ccc = (x) => {
  return x < 20 ? 0 : 50;
};

console.log(numArray.map(aaa));
console.log(numArray.map(bbb));
console.log(numArray.map(ccc));

// 4. strArray에서 문자의 길이가 홀수이면 '노란하트' 짝수이면 '키위'로 바꾸기
// 5. strArray 문자에서 'a','e'가 포함되면 대문자화 아니면 그대로 냅두기
// 6. strArray 문자에서 'l'로 시작하면 문자의 길이로 바꾸고 아니면 대문자화로 하기

const ddd = (x) => {
  return x.length % 2 ? "노란하트" : "키위";
};

const eee = (x) => {
  return x.includes("a") || x.includes("e") ? x.toUpperCase() : x;
};

const fff = (x) => {
  return x.slice(0).includes("l") ? x.length : x.toUpperCase();
};

console.log(strArray.map(ddd));
console.log(strArray.map(eee));
console.log(strArray.map(fff));
