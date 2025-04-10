// 시간제어, 서버 데이터 가져오기, 데임터 임시 저장하기, 현재위치 알려주기
// setTimeout(() => {
//   console.log("aaa");
// }, 1000);
// setInterval(() => {
//   console.log("bbb");
// }, 5000);

const div = document.querySelector(".countUp");
setInterval(() => {
  div.innerText = +div.innerText + 1;
}, 1000);

const time = document.querySelector(".time");
setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
