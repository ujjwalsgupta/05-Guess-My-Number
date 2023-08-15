"use-strict";

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  document.querySelector(".message").textContent = "🎉 Correct Number!";
});
