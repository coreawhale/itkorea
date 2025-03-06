// 문자의 길이가 홀수면 사과 짝수면 당근
const aaa = prompt("단어를 입력하세요");
console.log(aaa.length % 2 ? "사과" : "당근");

// 글자 세개 잘라서 대문자 전환하고 나머지 같이 출력
const bbb = prompt("단어를 입력하세요");
console.log(bbb.slice(0, 3).toUpperCase() + bbb.slice(3, bbb.length));

// 공백을 기준으로 단어 분리(띄어쓰기 유의)
const ccc = prompt("단어를 입력하세요");
console.log(ccc.split(" "));

// 알파벳 a 포함 여부에 따라 출력
const ddd = prompt("단어를 입력하세요");
console.log(ddd.includes("a") ? "포함" : "미포함");

//문자의 길이가 10보다 적으로 3회 반복, 많으면 대문자화
const eee = prompt("단어를 입력하세요");
console.log(eee.length < 10 ? eee.repeat(3) : eee.toUpperCase());
