//String, number
// const arr = ["a", "b", "c"].fillter((x, i) => 1 % 2)
// const a = new Array(100).fill(1).map((x, i) => i + 10);
// console.log(a);

//1. 0~100 배열 만들고, 5의 배수는 '🎃' 나머지는 숫자
// const q1 = new Array(100).fill(1).map((x, i) => ((i + 1) % 5 ? "🎃" : i)); // 내 버전
const q1 = new Array(101).fill(0).map((x, i) => ((i + 1) % 5 ? "🎃" : i)); // 강사님 버전
console.log(q1);

//2. 0~100 배열 만들고, 3의 배수 또는 7의 배수는 문자열로 나머지 숫자
// const q2 = new Array(100)
//   .fill(1)
//   .map((x, i) => ((i + 1) % 3 == 0 || (i + 1) % 7 == 0 ? String(i) : i));

const q2 = new Array(101)
  .fill(0)
  .map((x, i) => (i % 3 == 0 || i % 7 == 0 ? String(i) : i));
console.log(q2);

//3. 0부터 100까지의 총합 구하기
const q3 = new Array(101)
  .fill(0)
  .map((x, i) => i)
  .reduce((a, c) => a + c);
console.log(q3);

//4. 0~100까지 3,6,9 들어가면 '🧤'
// const q4 = new Array(101)
//   .fill(0)
//   .map((x, i) =>
//     i % 3 == 0 ||
//     i % 6 == 0 ||
//     i % 9 == 0 ||
//     i.startsWith(3) ||
//     i.startsWith(6) ||
//     i.startsWith(9)
//       ? "🧤"
//       : i
//   );

const q4 = new Array(101)
  .fill(0)
  .map((x, i) =>
    String(i).includes("3") ||
    String(i).includes("6") ||
    String(i).includes("9")
      ? "🧤"
      : Number(i)
  );
console.log(q4);
