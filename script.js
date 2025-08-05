const headBtn = document.getElementById("headBtn");
const tailBtn = document.getElementById("tailBtn");
const resultBox = document.getElementById("resultBox");
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const resetBtn = document.getElementById("resetBtn");

let userScore = 0;
let compScore = 0;

function computerChoice() {
  return Math.random() < 0.5 ? "Hand" : "Tail";
}

function play(userPick) {
  const compPick = computerChoice();
  let message = `You chose <b>${userPick}</b>. Computer chose <b>${compPick}</b>. `;

  if (userPick === compPick) {
    message += "🤝 Try Again! It's a tie.";
    // Score nahi badhaya, game continue
  } else {
    // Different choice, decide winner randomly
    // For simplicity, user wins if userPick is 'Hand', else computer wins
    if (userPick === "Hand") {
      userScore++;
      message += "🎉 You Win!";
    } else {
      compScore++;
      message += "😞 Computer Wins!";
    }
  }

  resultBox.innerHTML = message;
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
}

headBtn.addEventListener("click", () => play("Hand"));
tailBtn.addEventListener("click", () => play("Tail"));

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
  resultBox.innerHTML = "<p>Make your choice to start the game.</p>";
});
