// makeFood라는 함수를 만들고
// 요리준비
// 요리함수실행!
// 요리끝!

const makeFood = (x) => {
  console.log("요리준비!");
  x();
  console.log("요리끝!");
};

// makeTaco
// 1. 또띠아 준비
// 2. 야채넣기
// 3. 고기넣기
// 4. 말기

const makeTaco = (x) => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채넣기");
  console.log(`3. ${x} 넣기`);
  console.log("4.말기");
};

// makeRamen
// 1. 물끓이기
// 2. 스프넣기
// 3. 면넣기
// 4. 계란넣기

const makeRamen = () => {
  console.log("1. 물끓이기\n2. 스프넣기\n3. 면넣기\n4. 계란넣기");
};

makeFood(makeTaco);
// makeFood(makeTaco()); >> makeTaco부터 실행됨, undefined와 같은 의미
makeFood(makeRamen);

const makeKimchRice = () => {
  console.log("1. 밥 볶기\n2. 김치 넣기\n3. 참기름\n4. 섞기");
};
makeFood(makeKimchRice);

// 익명함수(1회성)
// 그냥 콜백하면 매개변수를 바꿀 수 없으니까 기존 함수는 유지하면서 매개변수를 넣고 싶으면 익명함수로 실행하고
// 불러올 함수에 매개변수 넣으면 됨
makeFood(() => {
  makeTaco("새우");
});
