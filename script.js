const colors = ["red", "blue", "green"]

function changeColor() {
    document.getElementById("colorChanger").style.color = colors[getRandomInt(0, 3)];
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}