let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let Oname = document.querySelector("#O");
let Xname = document.querySelector("#X");
let count = 0;
let turnO = true;
let gameWon = false;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  gameWon = false;
  count = 0;
  enable();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameWon) {
      if (turnO) {
        box.innerText = "O";
      } else {
        box.innerText = "X";
      }
      turnO = !turnO;
      box.disabled = true;
      count++;

      chechWinner();
    }
  });
});

const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const displayWinner = (winname) => {
  msg.innerText = `Congratulation, Winnner is ${winname} 😉🎉`;
  msgContainer.classList.remove("hide");
  disable();
};

const draw = () => {
  msg.innerText = `Game is Draw :(`;
  msgContainer.classList.remove("hide");
  disable();
};

const chechWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
      gameWon = true;
      if (pos1val == "O") {
        displayWinner(Oname.value);
      } else {
        displayWinner(Xname.value);
      }
      break;
    } else if (count === 9) {
      draw();
      break;
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
