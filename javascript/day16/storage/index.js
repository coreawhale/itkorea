// localStorage.setItem("coffee", "value1");
// localStorage.setItem("cookie", "value2");
// localStorage.setItem("bread", ["salt", "melon"]);

// const a = localStorage.getItem("bread");
// console.log(a);

// // bread을 브라우저에 ul > li salt, li melon

// const storage = document.querySelector(".storage");
// storage.innerHTML = <li>${localStorage.getItem("bread")}     </li>;

// const a = localStorage.getItem("bread");
// const b = JSON.parse(a);
// const ul = document.createElement("ul");

// b.forEach((v) => {
//   const li = document.createElement("li");

//   li.appendChild(v);
// });

// document.appendChild(ul);

const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const { value } = input;
  localStorage.setItem("todo", JSON.stringify(value));
});
