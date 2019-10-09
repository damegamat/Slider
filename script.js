//Parameters
let activeElement = 0;
const timeChange = 4000;
// Finding elements
const colorImgHtml = document.querySelector(".color");
const grayImgHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");

//Tables with elements to switch
const colorImages = ["img/hero1.png", "img/hero2.png", "img/hero3.png"];
const grayImages = ["img/hero1a.png", "img/hero2a.png", "img/hero3a.png"];
const names = ["Goku", "Vegeta", "Piccolo"];
const professions = ["Saiyan", "Saiyan", "Namekian"];

function changeElement() {
  console.log("automatyczne wwywołanie");
  activeElement++;
  if (activeElement == colorImages.length) {
    activeElement = 0;
  }
  colorImgHtml.src = colorImages[activeElement];
  grayImgHtml.src = grayImages[activeElement];
  h1Html.textContent = names[activeElement];
  h2Html.textContent = professions[activeElement];
}

setInterval(changeElement, timeChange);
