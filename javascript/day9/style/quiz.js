// 유저에게 버튼 만들기 횟수를 물어보고,
//
// 횟수만큼
// 빨강, 주항, 노랑, 초록, 파랑, 보라, 남 내용과 글씨색이 일치

const count = +prompt("버튼 갯수 입력"); // 갯수를 물어보면 무조건 배열로 바꾸고 보기

const colorList = [
  { name: "빨강", color: "red" },
  { name: "주항", color: "orange" },
  { name: "노랑", color: "yellow" },
  { name: "초록", color: "green" },
  { name: "파랑", color: "blue" },
  { name: "남", color: "indigo" },
  { name: "보라", color: "purple" },
];

Array(count)
  .fill(0)
  .forEach((v) => {
    colorList.forEach((i) => {
      const btn = document.createElement("button");
      btn.style.backgroundColor = i.color;
      btn.style.color = i.color;
      btn.innerHTML = i.color;
      document.body.appendChild(btn);
    });
  });
