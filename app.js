let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  //console.log(guess);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "blue");
    //alert(`Please enter a number between ${min} and ${max}`);
    //guessInput.value='';
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct... You Win!!!`);
  } else {
    guessLeft -= 1;

    if (guessLeft === 0) {
      gameOver(false, `You Lost. The correct number was ${winningNum}`);
    } else {
      guessInput.value = "";
      setMessage(`${guess} is not correct. Guesses Left = ${guessLeft}`, `red`);
      guessInput.style.borderColor = "red";
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  //play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min)+min);
}
