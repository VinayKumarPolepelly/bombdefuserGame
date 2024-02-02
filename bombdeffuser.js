let input = document.getElementById("defuser");
let timer = document.getElementById("timer");
let count = 30;
timer.textContent = count;
let x = setInterval(function () {
  if (count === 0) {
    timer.textContent = "BOOM";
    clearInterval(x);
  } else {
    count = count - 1;
    timer.textContent = count;
  }
}, 1000);

function defuse(event) {
  if (event.key === "Enter") {
    if (input.value === "defuse" && count > 0) {
      clearInterval(x);
      timer.textContent = "You Did it!";
    }
  }
}
input.addEventListener("keydown", defuse);
