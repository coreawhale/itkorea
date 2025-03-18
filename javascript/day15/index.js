const input = document.querySelector(".input");
const eye = document.querySelector(".eye");
const digit = document.querySelector(".digit");
const special = document.querySelector(".special");
const length = document.querySelector(".length");

eye.addEventListener("click", () => {
  const { type } = input;
  const { innerText } = eye;

  input.type = type == "text" ? "password" : "text";
  eye.innerText = innerText == "눈" ? "감음" : "눈";
});

const hasNumber = (value) => [..."1234567890"].some((v) => value.includes(v));
const hasSpecial = (value) => [..."!@#%^*_+~"].some((v) => value.includes(v));
const isLengthValid = (value) => 8 <= value.length && value.length <= 20;

input.addEventListener("input", () => {
  const { value } = input;

  if (hasNumber(value)) {
    digit.classList.add("pass");
  } else {
    digit.classList.remove("pass");
  }

  if (hasSpecial(value)) {
    special.classList.add("pass");
  } else {
    special.classList.remove("pass");
  }

  if (isLengthValid(value)) {
    length.classList.add("pass");
  } else {
    length.classList.remove("pass");
  }
});
