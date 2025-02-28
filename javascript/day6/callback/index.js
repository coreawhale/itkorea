// f(g(x)): 합성함수

// 콜백함수
const hello = (x) => {
  x();
  console.log("안녕하세요!");
};

const morning = () => {
  console.log("아침 커피!");
};

const lunch = () => {
  console.log("점심 샐러드!");
};

const dinner = () => {
  console.log("저녁 제육!");
};

hello(morning);
hello(lunch);
hello(dinner);
