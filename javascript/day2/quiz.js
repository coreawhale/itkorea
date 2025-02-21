// 10000자리 숫자에서 3번째 자리 구하기
const aaa = +window.prompt("10000자리 숫자 입력");
window.console.log(parseInt((aaa / 100) % 10));

const bbb = +window.prompt("몇년생?");
const bbb3 = bbb <= 2006 ? "성인" : "미성년자";
window.console.log(`${bbb3}입니다`);
