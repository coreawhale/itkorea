// const btn = document.createElement("button");
// btn.innerHTML = "네이버";
// btn.style.backgroundColor = "green"
// // btn.style.setProperty = ("backgroundColor", "green") //

// document.body.appendChild(btn)

// 유저에게 원하는 버튼 배경색과 글씨색을 내용 동시에 받고(띄어쓰기)
// 화면에 버튼 만들어주기

// const user_q1 = prompt("버튼 배경색과 글씨색을 내용 입력(띄어쓰기)").split(" ");

// const btn1 = document.createElement("button");
// btn1.style.backgroundColor = user_q1[0];
// btn1.style.color = user_q1[1];
// btn1.innerHTML = user_q1[2];

// document.body.appendChild(btn1);

// 위의 내용 더 깊은 방식

const [backgroundColor, color, text] = prompt(
  "버튼 배경색과 글씨색을 내용 입력(띄어쓰기)"
).split(" ");

const btn1 = document.createElement("button");
btn1.style.backgroundColor = backgroundColor;
btn1.style.color = color;
btn1.innerHTML = text;

document.body.appendChild(btn1);
