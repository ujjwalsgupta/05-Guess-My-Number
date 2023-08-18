"use-strict";

//* Random Input Number Generator (Between 1 - 20)

let randomSecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

//* Clicking of Check Button & Input Number Storage

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber, typeof inputNumber);

  //todo: CASE 1) When there is No Input Number but still the "Check" button is clicked.
  if (!inputNumber) {
    // inputNumber if nothing is inputted = 0 in console (0 is a falsy value).
    // Now in if-else, number -> boolean, inputNumber is falsy, in order to let "if statement" work, inputNumber should be truthy, so !inputNumber.
    document.querySelector(".message").textContent = "⛔ No Number";
  }

  //todo: CASE 2) When Player's Input Number is equals to the Random Number. (Player Wins)
  else if (inputNumber === randomSecretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    // const highScore = (document.querySelector(
    //   ".label-highscore"
    // ).textContent = `🥇 Highscore: ${score}`);

    let highScore = 0;

    if (score > highScore) {
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${score}`;
    } else if (score === highScore) {
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${score}`;
    } else {
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${highScore}`;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = randomSecretNumber;
  }

  //todo: CASE 3) When Player's Input Number is NOT equals to the Random Number. (Player Loses)
  else if (inputNumber !== randomSecretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      //? SUBCASE 1) When Player's Input Number is too higher than Random Number.
      if (inputNumber > randomSecretNumber) {
        document.querySelector(".message").textContent = "📈 Too high!";
      }

      //? SUBCASE 2) When Player's Input Number is too lower than Random Number.
      else if (inputNumber < randomSecretNumber) {
        document.querySelector(".message").textContent = "📉 Too low!";
      }
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".label-highscore").textContent = `${highScore}`;
});
