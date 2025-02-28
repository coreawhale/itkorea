// object paradigm
// 기본: str, num, bool, un, null
// 참조: arr, obj, func, window

const menu = ["americano", "latte", "mint"];

menu.push("cocoa"); // 역활: 맨뒤 추가하기
menu.pop(); // 역활: 맨뒤 삭제하기
menu.slice(0, 2); //역활: 0~1까지 배열 잘라서 돌려줌

const num = [2, 4, 6, 8, 10];
const double = (x) => {
  return x * 2;
};

const plus10 = (x) => {
  return x + 10;
};

const a1 = num.map(double); // map 역확 : 안의 요소들을 바꿔주기 ,map은 배열을 순회하여 모든 요소를 각각으로 보고 있음
const a2 = num.map(plus10);
// 10보다 작으면 *2 10보다 크면 *3 해서 바꾸기!
const a3 = num.map((x) => {
  return x < 10 ? x * 2 : x * 3;
});

const a4 = num.filter((x) => {
  //filter 역활: 조건에 부합하는 요소만 살리기
  return 5 < x;
});

// 변형 > 필터로 거른다음 살아있는 요소에 10 더하기
const a5 = num
  .filter((x) => {
    return 5 < x;
  })
  .map((x) => {
    return x + 10;
  });
