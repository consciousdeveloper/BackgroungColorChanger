


const hex = [ "A", "B", "C", "D", "E", "F",0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("spin");
const color = document.querySelector("#color");


function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);

    color.textContent = hexColor;
    color.style.color = hexColor;
    document.body.style.backgroundColor = color.textContent;
});
