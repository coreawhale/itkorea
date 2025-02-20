// 데이터 타입 종류
// 문자: "", ``, ''
// 숫자: 아라비아 숫자

// 더하기에 문자 타입이 들어가면 모두 문자 취급함
const name = "홍길동";
const age = 22;
const birth = 3000;
const coffee = "아메";
const age1 = "19";
const age2 = "17";

// prompt는 문자취급
const testNumber = window.prompt("숫자입력");
const numberAge = number(testNumber);
window.console.log(`${numberAge}의 10을 더한 값은: ${numberAge + 10}`);
