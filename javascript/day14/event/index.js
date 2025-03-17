const btn = document.querySelector(".btn");
// const click = (x) => {
//   console.log(x.target.innerText);
// };

// btn.addEventListener("click", click);

const input = document.querySelector(".input");

// const change = () => {

// };

btn.addEventListener("click", () => {
  input.type = input.type == "text" ? "password" : "text"; // 인풋 타입의 정의를 내리고 삼항식으로 가면 깔끔한 소스가 완성됨
  btn.innerText = btn.innerText == "🔒" ? "🔑" : "🔒";
});
