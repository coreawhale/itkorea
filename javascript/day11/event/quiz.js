// w: 300, h: 300 box가 있습니다.
// 빨강버튼, 파랑버튼, 노랑버튼
// 각각의 버튼을 누르면 box의 배경색이 해당 버튼의 색깔로 바뀌

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
document.body.appendChild(box);

const btnRed = document.createElement("button");
btnRed.innerText = "빨강버튼";
btnRed.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(btnRed);

const btnBlue = document.createElement("button");
btnBlue.innerText = "파랑버튼";
btnBlue.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
document.body.appendChild(btnBlue);

const btnYellow = document.createElement("button");
btnYellow.innerText = "노랑버튼";
btnYellow.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});
document.body.appendChild(btnYellow);
