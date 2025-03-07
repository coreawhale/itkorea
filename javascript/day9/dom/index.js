// 내장 오브젝트: arr, obj, date, window, ...
// js: 브라우저를 조작하는 언어
// document: html을 관여하는 타입
// element(tag) 타입
// const btn = document.createElement("div");

// btn.innerText = "<button>짱짱버튼</button>";
// btn.innerHtml = "<button>짱짱버튼</button>";
// // btn.textContent("")
// document.body.appendChild(btn);

// ------------------------------------------------

// 유저에게 만들고 싶은 태그 물어보고,
// 유저에게 안에 넣고 싶은 내용 물어보고,
// html에 유저가 원하는대로 태그 만들기!

// const tag = prompt("태그");
// const text = prompt("글자");

// const tagResurt = document.createElement(tag);
// tagResurt.innerHTML = text;

// document.body.appendChild(tagResurt);

// ------------------------------------------------

// 순회(정찰)
// [1, 2, 3, 4, 5].forEach((x) => {});

// 유저에게 원하는 버튼 갯수를 물어보고, 버튼 안의 내용도 물어보고,
// 갯수만큼 버튼 만들기!

const user_button_length = +prompt("버튼 갯수 입력");
const user_button_text = prompt("글자 입력");

const makeBtn = (user_button_length) => {
  const buttons = document.createElement("button");
  buttons.innerHTML = user_button_text;
  document.body.appendChild(buttons);
};
Array(user_button_length)
  .fill(0)
  .forEach((v) => {
    makeBtn(user_button_length);
  });
