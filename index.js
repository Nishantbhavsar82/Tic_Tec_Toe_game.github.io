//All control store in viriable
let box = document.querySelectorAll(".box");
let turn = 1;
let row = document.querySelector(".row");
let winner = document.querySelector("h1");
let relodeBtn = document.querySelector("#relodeBtn"); //onclick relode

// let startGame = document.querySelector("#startGame"); //button for start the game
// let player1Name = document.querySelector("#player1Name");
// let player2Name = document.querySelector("#player2Name");
// let mainContainer = document.querySelector(".main-container");
//function for start the game
// startGame.addEventListener("click", () => {
//   player1Name = player1Name.value;
//   player2Name = player2Name.value;
//   console.log(player1Name, player2Name);
//   mainContainer.style.display = "block";
//   localStorage.setItem("player1name", player1Name);
//   localStorage.setItem("player2name", player2Name);
// });

//onclick check which div was clicked in game
for (let i = 0; i < box.length; i++) {
  box[i].onclick = function () {
    if (turn % 2 != 0) {
      box[i].innerHTML = "O";
      box[i].style.color = "blue";
      box[i].style.pointerEvents = "none";
      box[i].style.backgroundColor = "rgba(162, 162, 255, 0.77)";

      turn++;
      whoseTurn(turn);
      checkdrow(turn);
      checkWinner(i);
    } else {
      box[i].innerHTML = "X";
      box[i].style.color = "red";
      box[i].style.pointerEvents = "none";
      box[i].style.backgroundColor = "rgba(255, 131, 131, 0.504)";
      turn++;
      whoseTurn(turn);
      checkdrow(turn);
      checkWinner(i);
    }
  };
}
//function for cheking winner
function checkWinner() {
  for (let i = 0; i <= box.length; i++) {
    if (
      box[0].innerHTML == box[1].innerHTML &&
      box[1].innerHTML == box[2].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.transform = "rotate(90deg)";
        row.style.top = "-33%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.transform = "rotate(90deg)";
        row.style.top = "-33%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[3].innerHTML == box[4].innerHTML &&
      box[3].innerHTML == box[5].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.transform = "rotate(90deg)";
        row.style.top = "0%";
        row.style.left = "50%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.top = "0%";
        row.style.left = "50%";
        row.style.transform = "rotate(90deg) ";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[3].innerHTML == box[0].innerHTML &&
      box[3].innerHTML == box[6].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.left = "15%";
        row.style.top = "-50%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.left = "15%";
        row.style.top = "-50%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[1].innerHTML == box[4].innerHTML &&
      box[7].innerHTML == box[4].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.display = "block";
        row.style.top = "-50%";
        row.style.left = "48%";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.display = "block";
        row.style.top = "-50%";
        row.style.left = "48%";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[6].innerHTML == box[7].innerHTML &&
      box[8].innerHTML == box[6].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.transform = "rotate(90deg)translate(-50% ,-50%)";
        row.style.left = "0";
        row.style.top = "33%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.transform = "rotate(90deg)translate(-50% ,-50%)";
        row.style.left = "0";
        row.style.top = "33%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[2].innerHTML == box[5].innerHTML &&
      box[8].innerHTML == box[2].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.left = "82%";
        row.style.top = "-50%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.left = "82%";
        row.style.top = "-50%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[0].innerHTML == box[4].innerHTML &&
      box[8].innerHTML == box[0].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.transform = "rotate(-45deg) translate(50% ,-70%)";
        row.style.display = "block";
        row.style.left = "98%";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.transform = "rotate(-45deg) translate(50% ,-70%)";
        row.style.display = "block";
        row.style.left = "98%";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
    if (
      box[2].innerHTML == box[4].innerHTML &&
      box[6].innerHTML == box[2].innerHTML
    ) {
      if (turn % 2 != 0) {
        winner.innerText = "player two won the match";
        winner.style.color = "red";
        row.style.transform = "rotate(45deg)translate(-50% ,-50%)";
        row.style.left = "15%";
        row.style.top = "35%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      } else {
        winner.innerText = "player one won the match";
        winner.style.color = "blue";
        row.style.transform = "rotate(45deg)translate(-50% ,-50%)";
        row.style.left = "15%";
        row.style.top = "35%";
        row.style.display = "block";
        relodePage();
        DisablePointerEvent();
        break;
      }
    }
  }
}
//function to relode game after win by any player
function relodePage() {
  setTimeout(() => {
    document.location.reload();
  }, 3000);
}
//function for display winner name
function whoseTurn(turn) {
  if (turn % 2 != 0) {
    winner.innerText = "player 1 trun";
  } else {
    winner.innerText = "player 2 trun";
  }
}
//function for check if match is drow return to start
function checkdrow(turn) {
  if (turn > 9) {
    winner.innerText = "MATCH DRAW";
    relodePage();
  }
}

//disable pointer event after winning from any player
function DisablePointerEvent() {
  box.forEach((ele) => {
    ele.classList.add("disable");
  });
}

//click reload button for restart the game
relodeBtn.addEventListener("click", () => {
  document.location.reload();
});
