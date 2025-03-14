const essentialCheck = document.querySelectorAll(".essential");
const btn = document.querySelector(".btn");

essentialCheck.forEach((x) => {
  x.addEventListener("click", () => {
    x.classList.toggle("checked");

    const essentialChecked = document.querySelectorAll(".checked");

    essentialChecked.length == essentialCheck.length
      ? btn.classList.add("on")
      : btn.classList.remove("on");
  });
});
