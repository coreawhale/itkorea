// // 정수 구하기
const num1 = +window.prompt("아무숫자나 입력1");
const num2 = +window.prompt("아무숫자나 입력2");
window.console.log(
  `더하기: ${num1 + num2}, 빼기: ${num1 - num2}, 곱하기: ${num1 * num2}, 제곱:${
    num1 ** num2
  } 나누기 후 내림: ${parseInt(num1 + num2)}}`
);

// // 홀짝 확인하기
const num3 = +window.prompt("아무숫자나 입력3");
const result1 = num3 % 2 == 1 ? "홀수" : "짝수";
const result2 = num3 % 2 ? "홀수" : "짝수"; // 불린방식
window.console.log(`${num3}은 ${result1}`);
window.console.log(`${num3}은 ${result2}`);

// 양의 정수를 분:초 형태로 나타내기
//100/60=1.66666666666 앞의 숫자만 치면 됨
//100/60=1.66666666666 남은 수가 다음 단위의 시간이 됨
const timeNum = +window.prompt("아무숫자나 입력4");
const timeNumResult1 = parseInt(timeNum / 60);
const timeNumResult2 = timeNum % 60;

window.console.log(`${timeNumResult1}분 ${timeNumResult2}초`);
