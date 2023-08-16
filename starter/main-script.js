"use-strict";

document.querySelector(".check").addEventListener("click", function () {
  const inputValue = Number(document.querySelector(".guess").value);
  console.log(inputValue, typeof inputValue);

  if (!inputValue) {
    // inputValue if nothing is inputted = 0 in console (0 is a falsy value).
    // Now in if-else, number -> boolean, inputValue is falsy, in order to let "if statement" work, inputValue should be truthy, so !inputValue.
    document.querySelector(".message").textContent = "⛔ No Number";
  }
});
