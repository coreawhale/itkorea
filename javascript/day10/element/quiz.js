// 1. box(1px solid red) 클래스명을 가진 div에 세로로 유저에게 입력 받은 숫자만큼, 넓이 100%, 높이50px, 테두리 1px solid blakc 을 가진 미니 박스 만들어서 넣기
const box_count = +prompt("숫자입력");

const box = document.createElement("div");
box.className = "box";

Array(box_count)
  .fill(0)
  .forEach((x) => {
    const innderdiv = document.createElement("div");
    innderdiv.className = "innerbox";
    box.appendChild(innderdiv);
  });

document.body.appendChild(box);

// 2.
