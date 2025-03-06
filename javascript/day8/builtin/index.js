// 컴퓨터: 휴지통, 내 PC, 계산기
// 아이폰: 설정, ...등등
// built-i object: Number, String, Boolean, Array, Object, Date, Set
// Date, Set 는 앞에 new 붙임

const a = new Date();
const b = [...new Set("아이스아메리카노")]; //문자열에서 중복을 제거 후 다시 배열로 만드는 방법
const c = new Set([1, 2, 3, 34, 4, 5, 6, 67, 7, 87, 8, 8, 5, 3, 42, 4]); //배열이라도 Set 함수에 들어가면 오브젝트 타입으로 변환됨
const d = [...new Set([1, 2, 3, 34, 4, 5, 6, 67, 7, 87, 8, 8, 5, 3, 42, 4])]; //오브젝트 타입으로 변환될건 다시 배열 함수로 바꾸는 방법

console.log(c);
