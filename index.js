const main = document.querySelector("main");
const btn = main.querySelector("button");

const colorStart = "palevioletred";
main.style.backgroundColor = colorStart;

btn.addEventListener("click", () => {
  const { backgroundColor } = main.style;
  if (backgroundColor !== "yellow")
    return (main.style.backgroundColor = "yellow");
  main.style.backgroundColor = colorStart;
});
