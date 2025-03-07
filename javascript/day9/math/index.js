// arr, set, obj, date, math, window, document

// Math.abs(-10); // 10
// Math.min(a,b,c)
// Math.max(a,b,c): 최댓값
// Math.ceil;(x): 올림
// Math.floor(x): 내림
// Math.round: 반올림
// Math.random() // 0 ~ 1

// min~max 정수 랜덤하게 뽑는 함수

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
