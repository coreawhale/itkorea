// 9개의 버튼이 있음

// small, medium, large
// red, blue,, green
// square, ellipse, circle

// box 높이와 넓이
// small,medium, large
// 배경색상 바꾸기

// 0px, 10px, 9999px

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "#f2f2f2";
document.body.appendChild(box);

// 배열로 만들어서, foreach 돌려서 버튼과 이벤트 생성
const aaa = [
  { name: "small", size: "100px" },
  { name: "small", size: "100px" },
  { name: "small", size: "100px" },
];

const btn_small = document.createElement("button");
btn_small.innerText = "btn_small";
btn_small.addEventListener("click", () => {
  box.style.width = "100px";
});
document.body.appendChild(btn_small);

const btn_medium = document.createElement("button");
btn_medium.innerText = "btn_medium";
btn_medium.addEventListener("click", () => {
  box.style.width = "200px";
});
document.body.appendChild(btn_medium);

const btn_large = document.createElement("button");
btn_large.innerText = "btn_large";
btn_large.addEventListener("click", () => {
  box.style.width = "300px";
});
document.body.appendChild(btn_large);

const btn_red = document.createElement("button");
btn_red.innerText = "btn_red";
btn_red.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(btn_red);

const btn_green = document.createElement("button");
btn_green.innerText = "btn_green";
btn_green.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
document.body.appendChild(btn_green);

const btn_square = document.createElement("button");
btn_square.innerText = "btn_square";
btn_square.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
document.body.appendChild(btn_square);

const btn_ellipse = document.createElement("button");
btn_ellipse.innerText = "btn_ellipse";
btn_ellipse.addEventListener("click", () => {
  box.style.borderRadius = "10px";
});
document.body.appendChild(btn_ellipse);

const btn_circle = document.createElement("button");
btn_circle.innerText = "btn_circle";
btn_circle.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
document.body.appendChild(btn_circle);
