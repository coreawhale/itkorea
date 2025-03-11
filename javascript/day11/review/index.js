const data = [
  { color: "#1E2C35", name: "Cool Grey 90" },
  { color: "#37434C", name: "Cool Grey 80" },
  { color: "#505B62", name: "Cool Grey 70" },
  { color: "#697279", name: "Cool Grey 60" },
  { color: "#82898F", name: "Cool Grey 50" },
  { color: "#9BA1A5", name: "Cool Grey 40" },
  { color: "#B4B9BC", name: "Cool Grey 30" },
  { color: "#CDD0D2", name: "Cool Grey 20" },
  { color: "#E6E7E9", name: "Cool Grey 10" },
  { color: "#F2F4F6", name: "Cool Grey 5" },
];

const makeCard = (color, name) => {
  return `
        <article class="items">
            <div class="background-area" style="background-color: ${color}"></div>
            <div class="text-area">
                <span class="color-name">${name}</span>
                <code class="color-color">${color}</code>
            </div>
        </article>
    `;
};

data.forEach((x) => {
  document.body.insertAdjacentHTML("beforeend", makeCard(x.color, x.name));
});
