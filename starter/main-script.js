"use-strict";

//* Random Input Number Generator (Between 1 - 20)

const randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomSecretNumber;

let score = 20;

//* Clicking of Check Button & Input Number Storage

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber, typeof inputNumber);

  //todo: CASE 1) No presence of Input Number
  if (!inputNumber) {
    // inputNumber if nothing is inputted = 0 in console (0 is a falsy value).
    // Now in if-else, number -> boolean, inputNumber is falsy, in order to let "if statement" work, inputNumber should be truthy, so !inputNumber.
    document.querySelector(".message").textContent = "⛔ No Number";
  }

  //todo: CASE 2) Presence of Input Number & Equal to Random Number
  else if (inputNumber === randomSecretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(
      ".label-highscore"
    ).textContent = `🥇 Highscore: ${score}`;
  }

  //todo: CASE 2) Presence of Input Number & Not Equal to Random Number
  else if (inputNumber !== randomSecretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      //? If Input Number > Random Number
      if (inputNumber > randomSecretNumber) {
        document.querySelector(".message").textContent = "📈 Too high!";
      }

      //? If Input Number < Random Number
      else if (inputNumber < randomSecretNumber) {
        document.querySelector(".message").textContent = "📉 Too low!";
      }
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // let i = 1;
  // while (inputNumber !== randomSecretNumber) {
  //   const originalScore = (document.querySelector(".score").textContent = 20);
  //   if (inputNumber !== randomSecretNumber) {
  //     document.querySelector(".score").textContent = originalScore - i;
  //   }
  // }
});
