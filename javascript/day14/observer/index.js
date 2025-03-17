const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

const action = (x) => {
  x.forEach((y) => {
    if (y.isIntersecting) console.log("하이");
  });
};

const ovserver = new IntersectionObserver(action, {
  threshold: 1,
});

ovserver.observe(box);
const ovserver1 = new IntersectionObserver((x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      y.target.classList.add("active");
    }
  });
});
ovserver1.observe(circle);
