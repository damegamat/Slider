const slideList = [
  {
    img: "img/hero1.png",
    imgGray: "img/hero1a.png",
    name: "Goku",
    profession: "Saiyan"
  },
  {
    img: "img/hero2.png",
    imgGray: "img/hero2a.png",
    name: "Vegeta",
    profession: "Saiyan"
  },
  {
    img: "img/hero3.png",
    imgGray: "img/hero3a.png",
    name: "Piccolo",
    profession: "Namekian"
  }
];

//Parameters
let active = 0;
const time = 4000;
let runAnimation = {};
// Finding elements
const colorImgHtml = document.querySelector(".color");
const grayImgHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");
const dots = [...document.querySelectorAll(".dots span")];
const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  colorImgHtml.src = slideList[active].img;
  grayImgHtml.src = slideList[active].imgGray;
  h1Html.textContent = slideList[active].name;
  h2Html.textContent = slideList[active].profession;
  changeDot();
};
let indexInterval = setInterval(changeSlide, time);

const refreshAnimation = (colorImgHtml, grayImgHtml, h1Html, h2Html) => {
  const elementsToRefresh = [colorImgHtml, grayImgHtml, h1Html, h2Html];
  const animationName = ["color", "gray", "text", "text"];
  elementsToRefresh.forEach((item, i) => {
    item.classList.remove(`run-animation-${animationName[i]}`);
    void item.offsetWidth;
    item.classList.add(`run-animation-${animationName[i]}`);
  });
};

const keyChangeSlide = e => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(indexInterval);
    e.keyCode === 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }

    colorImgHtml.src = slideList[active].img;
    grayImgHtml.src = slideList[active].imgGray;
    h1Html.textContent = slideList[active].name;
    h2Html.textContent = slideList[active].profession;
    refreshAnimation(colorImgHtml, grayImgHtml, h1Html, h2Html);

    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);
