let count = 0;

const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function updateUI() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

incBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decBtn.addEventListener("click", () => {
  count--;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});