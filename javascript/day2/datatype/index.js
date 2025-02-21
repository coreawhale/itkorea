// 정사각형의 총 둘레와 넓이 구하기
const squareWidth = window.prompt("한변의 길이를 입력하세요");
// const squareWidthNum = Number(squareWidth);
window.console.log(
  `${squareWidth}길이는 둘레: ${squareWidth * 4} 넓이: ${
    squareWidth * squareWidth
  }제곱미터 입니다`
);

// 달러를 원화로 변환하기(100$로 입력하기)
const dollar = window.prompt("달러를 입력하세요");
const dollarNum = parseInt(dollar);
window.console.log(`${dollarNum}달러는 ${dollarNum * 1432.64}원입니다.`);

// 출생년도로 나이 측정하기(00년생으로 입력하기)
const birthYear = window.prompt("출생년도를 입력하세요");
const parsedBirthYear = parseInt(birthYear);
window.console.log(
  `${parsedBirthYear}년생은 ${2026 - parsedBirthYear}살입니다. `
);

// 숫자 예시1
const first1 = window.prompt("첫번째 숫자 입력");
const second1 = window.prompt("첫번째 숫자 입력");
const parsedNum1 = Number(first1);
const parsedNum2 = Number(second1);
window.console.log(`합:${parsedNum1 + parsedNum2}`);

// 숫자 예시2
const first2 = window.prompt("첫번째 숫자 입력");
const second2 = window.prompt("첫번째 숫자 입력");
const numberfirst2 = +first2;
const numbersecond2 = +second2;
window.console.log(`합:${numberfirst2 + numbersecond2}`);

// 숫자 예시3
const first3 = +window.prompt("첫번째 숫자 입력");
const second3 = +window.prompt("첫번째 숫자 입력");
window.console.log(`합:${first3 + second3}`);
