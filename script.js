const tetris = document.createElement("div");
tetris.classList.add("tetris");

for (let i = 1; i < 181; i++) {
  const excel = document.createElement("div");

  excel.classList.add("excel");
  tetris.appendChild(excel);
}

const main = document.querySelector(".main");
main.appendChild(tetris);

const excel = document.getElementsByClassName("excel");
let i = 0;

for (let y = 18; y > 0; y--) {
  for (let x = 1; x < 11; x++) {
    excel[i].setAttribute("posX", x);
    excel[i].setAttribute("posY", y);
    i++;
  }
}

const x = 5,
  y = 10;

const mainArr = [[[0, 1], [0, 2], [0, 3]], [[1, 0], [0, 1], [1, 1]]];

let currentFigure = 0;
let figureBody = 0;

function create() {
  function getRandom() {
    return Math.round(Math.random() * (mainArr.length - 1));
  }

  currentFigure = getRandom();

  figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(
      `[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y +
        mainArr[currentFigure][0][1]}"]`
    ),
    document.querySelector(
      `[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y +
        mainArr[currentFigure][1][1]}"]`
    ),
    document.querySelector(
      `[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y +
        mainArr[currentFigure][2][1]}"]`
    )
  ];

  for (let i = 0; i < figureBody.length; i++) {
    figureBody[i].classList.add("figure");
  }
}

create();
