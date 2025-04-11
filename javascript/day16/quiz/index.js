const input = document.querySelector(".input");
const button = document.querySelector(".button");
const array = JSON.parse(localStorage.getItem("todolist")) || [];

button.addEventListener("click", () => {
  const { value } = input;
  if (value.length > 0) {
    array.push(value);
  }
  localStorage.setItem("todolist", JSON.stringify(array));
});
