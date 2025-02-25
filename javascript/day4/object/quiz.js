// 영화 티켓 예매 시스템

const movie = +prompt("영화 종류 정수 1~3 입력");
const age = +prompt("나이 입력");

const movieObj = [
  { type: "action", price: 10000 },
  { type: "romantic", price: 8000 },
  { type: "horror", price: 9000 },
];

if (age < 13) {
  console.log(
    `영화: ${movieObj[movie].type}, 할인적용요금: ${
      movieObj[movie].price * 0.5
    }원`
  );
} else if (60 < age) {
  console.log(
    `영화: ${movieObj[movie].type}, 할인적용요금: ${
      movieObj[movie].price * 0.7
    }원`
  );
} else {
  console.log(
    `영화: ${movieObj[movie].type}, 할인적용요금: ${movieObj[movie].price}원`
  );
}
