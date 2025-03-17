//내가 만든 소스

// const essentialCheck = document.querySelectorAll(".essential");
// const btn = document.querySelector(".btn");

// essentialCheck.forEach((x) => {
//   x.addEventListener("click", () => {
//     x.classList.toggle("checked");

//     const essentialChecked = document.querySelectorAll(".checked");

//     essentialChecked.length == essentialCheck.length
//       ? btn.classList.add("on")
//       : btn.classList.remove("on");
//   });
// });

// 강사님 소스를 봐야됨, 생각해보니 ui만 맞는 소스임, 체크된 값을 배열에서 넣어주면 프론트 엔드나 백단에서 작업할때 엄청 편할 듯
// 강사님 소스
const allCheckList = document.querySelectorAll(".checker");
const button = document.querySelector("button");
const essentialList = [false, false, false, false];

allCheckList.forEach((v, i) => {
  v.addEventListener("click", () => {
    v.classList.toggle("checked");
    v.classList.toggle("unchecked");

    if (essentialList.length > i)
      essentialList[i] = v.classList.contains("checked");

    if (essentialList.every((v) => v)) {
      //some과 every함수에 callback함수를 인자로 주면 some은 각 요소들 중 하나라도 true를 리턴하면 값은 true이며, every의 경우 하나라도 false를 리턴할 경우 false
      button.classList.add("confirm");
      button.classList.remove("unconfirm");
    } else {
      button.classList.add("unconfirm");
      button.classList.remove("confirm");
    }
  });
});
