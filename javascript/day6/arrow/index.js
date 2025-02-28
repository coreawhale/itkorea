// 일반 함수
function hello(x) {
  return x + " 안녕";
}

// 화살표(람다) 함수
const hello1 = (x) => {
  return x + " 안녕";
};

// 더하기
const add = (x, y) => {
  return x + y;
};

// 홀짝
const oddEven = (x) => {
  return x % 2 ? "홀" : "짝";
};

// 글자 바꾸기(10글 이상 대문자, 아니면 소문자)
const changeWord = (x) => {
  return x.length > 10 ? x.toUpperCase() : x.toLowercase();
};
