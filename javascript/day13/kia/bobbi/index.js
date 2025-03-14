const essentialCheck = document.querySelectorAll(".essential");
// const feild = document.querySelectorAll(".feild");

// const essentialChecked = document.querySelectorAll(".checked");

const btn = document.querySelector(".btn");

// const essentialCheckLength = essentialCheck.length; //필수 갯수 확인
// const essentialCheckLength = essentialCheck.length; //필수 갯수 확인

// console.log(aaa);

essentialCheck.forEach((x) => {
  x.addEventListener("click", () => {
    x.classList.toggle("checked");

    const essentialChecked = document.querySelectorAll(".checked");
    console.log(essentialChecked.length);

    essentialChecked.length == essentialCheck.length
      ? btn.classList.add("on")
      : btn.classList.remove("on");
    // essentialChecked.forEach((x) => {
    //   console.log(x.length);
    // });

    // if ((essentialCheck.length = essentialChecked.length)) {
    //   //   btn.classList("on");
    //   // alert("동일해")
    //   console.log(essentialChecked.length);
    // } else {
    //   //   btn.classList("off");
    //   console.log(essentialChecked.length);
    // }
  });
});

// essentialCheckLength;
