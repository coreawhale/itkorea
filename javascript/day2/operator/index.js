// 산출 연산자(Operator)
const a1 = 1 + 2;
const a2 = 1 - 2;
const a3 = 1 * 3;
const a4 = 2 ** 2; //제곱 > 8
const a5 = 3 / 2; //나누기 > 1.5
const a6 = 1 % 2; //나머지 연산자 > 1

//대입 연산자 (=)
const b = 10;

//비교 연산자 (<, >, <=, >=, ==, !=)
const c = 5 < 3; //false (불리언 암묵적 타입변환)
const c1 = 5 > 3; //true (불리언 암묵적 타입변환)
const c2 = 5 <= 3; //false (불리언 암묵적 타입변환)
const c3 = 5 >= 3; //true (불리언 암묵적 타입변환)
const c4 = 10 == 9; //false (불리언 암묵적 타입변환)
const c5 = 10 != 9; //true (불리언 암묵적 타입변환)
const c6 = 10 === 10; //true (불리언 암묵적 타입변환, 타입까지 체크)
const c7 = 10 === "10"; //false (불리언 암묵적 타입변환, 타입까지 체크)

//논리 연산자(and &&, or ||, not !)
// and: 하나라도 false면 false <-> 모두 true이면 true
const d1 = 5 > 3 && 5 > 6; //false

// or: 하나라도 true면 true <-> 모두 false이면 false
const d2 = 5 > 3 || 5 > 6 || 5 < 1; //true

// not:
const d3 = !(5 > 3); //false
const d4 = 5 <= 3; //false
const d5 = 5 > 3 && 7 > 3; //true
const d6 = !(5 <= 3) || !(7 <= 3); //드모르간법칙 , d5와 같은말

//삼항 연산자
//조건 ? 참: 거짓
const e = 5 < 3 ? "떡볶이" : "마라탕"; //마라탕
const e1 = 10 === 10 ? "떡볶이" : "마라탕"; //떡볶이
const e2 = 10 === "10" ? "떡볶이" : "마라탕"; //마라탕
