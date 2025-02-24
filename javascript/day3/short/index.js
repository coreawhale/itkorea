// 닉네임 받아서 알럿 띄우기
// const nickname = window.prompt("닉네임을 입력하세요");

// 닉네임 받아서 알럿 띄우기- 내가한 방식
// const result2 = nickname ? nickname : "Guest";
// window.alert(`${result2}님 환영합니다.`);

// 닉네임 받아서 알럿 띄우기- 강사님 방식
// window.alert(`${result2 || "Guest"}님 환영합니다.`);

// 비밀번호 맞추기
const passwordNum = +window.prompt("비밀번호 입력");

// 비밀번호 맞추기 - 내방식
passwordNum == 1024 ? window.alert(`화장실 열림.`) : "";

// 비밀번호 맞추기 - 강사님
passwordNum == 1024 && alert("화장실 열림.");
