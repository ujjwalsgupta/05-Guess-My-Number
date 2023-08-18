"use-strict";

let score = 20;
let highScore = 0;

//* Short-hand Functions

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const hiddenNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const displayScore = function (text) {
  document.querySelector(".score").textContent = text;
};

const bgColor = function (bg) {
  document.querySelector("body").style.backgroundColor = bg;
};

//* Random Input Number Generator (Between 1 - 20)

let randomSecretNumber = Math.trunc(Math.random() * 20) + 1;

//* Clicking of Check Button & Input Number Storage

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber, typeof inputNumber);

  //todo: CASE 1) When there is No Input Number but still the "Check" button is clicked.
  if (!inputNumber) {
    // inputNumber if nothing is inputted = 0 in console (0 is a falsy value).
    // Now in if-else, number -> boolean, inputNumber is falsy, in order to let "if statement" work, inputNumber should be truthy, so !inputNumber.
    displayMessage("⛔ No Number");
  }

  //todo: CASE 2) When Player's Input Number is equals to the Random Number. (Player Wins)
  else if (inputNumber === randomSecretNumber) {
    displayMessage("🎉 Correct Number!");

    // const highScore = (document.querySelector(
    //   ".label-highscore"
    // ).textContent = `🥇 Highscore: ${score}`);

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    bgColor("#60b347");
    hiddenNumberWidth("30rem");
    hiddenNumberWidth(randomSecretNumber);
  }

  //todo: CASE 3) When Player's Input Number is NOT equals to the Random Number. (Player Loses)
  else if (inputNumber !== randomSecretNumber) {
    if (score > 1) {
      score--;
      displayScore(score);

      //? SUBCASE 1) When Player's Input Number is too higher than Random Number.
      // if (inputNumber > randomSecretNumber) {
      //   document.querySelector(".message").textContent = "📈 Too high!";
      // }

      //? SUBCASE 2) When Player's Input Number is too lower than Random Number.
      // else if (inputNumber < randomSecretNumber) {
      //   document.querySelector(".message").textContent = "📉 Too low!";
      // }

      //? By using ternary operator
      displayMessage(
        inputNumber > randomSecretNumber ? "📈 Too high!" : "📉 Too low!"
      );
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayScore(20);
  hiddenNumberWidth("15rem");
  displayMessage("Start guessing...");
  bgColor("#222");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
});
