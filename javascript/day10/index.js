// 퀴즈
//1. 유저에게 좋아하는 아이돌 그룹 멤버들을 입력받고, 아이들 멤버의 버튼만큼 화면에 만들기
const idols = prompt("유저에게 좋아하는 아이돌 그룹 멤버들을 입력").slice(" ");
idols.forEach((X) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  document.body.appendChild(btn);
});

//2. 유저에게 좋아하는 색상 5가지 영어로 입력 받고, 그 색상을 가진 버튼들을 화면에 만들기
const colors = prompt("좋아하는 색상 5가지 영어로 입력").slice(" ");
colors.forEach((X) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = x;
  btn.innerText = "버튼";
  document.body.appendChild(btn);
});
