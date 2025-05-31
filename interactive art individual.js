let words = [
  { word: "HANGMAN", hint: "A classic word guessing game" },
  { word: "JAVASCRIPT", hint: "A popular web programming language" },
  { word: "COMPUTER", hint: "An electronic device for processing data" },
  { word: "PUZZLE", hint: "A game to test problem-solving skills" },
  { word: "CREATIVE", hint: "Using imagination or original ideas" },
  { word: "DESIGN", hint: "A plan or drawing to show look/function" },
  { word: "PROGRAM", hint: "Set of instructions for a computer" }
];

let wordData;
let word = "";
let hint = "";
let guessed = [];
let wrong = [];
let maxWrong = 6;
let gameOver = false;
let gameStarted = false;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textFont('Times New Roman');
  textSize(36);
}

function draw() {
  background(255);

  if (!gameStarted) {
    drawStartScreen();
    return;
  }

  // Hint in darker green
  fill('#2E7D32');  // dark green
  textSize(24);
  textFont('Times New Roman');
  noStroke();
  text("Hint: " + hint, width / 2, 40);

  // Display guessed word in dark charcoal
  let display = "";
  for (let i = 0; i < word.length; i++) {
    display += guessed.includes(word[i]) ? word[i] + " " : "_ ";
  }

  fill('#212121');  // dark charcoal
  textSize(40);
  textFont('Times New Roman');
  text(display, width / 2, 310);

  // Wrong guesses in deep red
  textSize(22);
  fill('#C62828');  // dark red
  textFont('Times New Roman');
  text("Wrong: " + wrong.join(" "), width / 2, 360);

  // Draw the hangman
  drawHangman(wrong.length);

  // Draw Restart button at bottom left
  drawButton(20, height - 60, 120, 40, "Restart");

  // Win or lose messages
  if (!display.includes("_")) {
    fill('#388E3C');  // rich green
    textSize(40);
    textFont('Times New Roman');
    text("You Win!", width / 2, 120);
    showRestartMessage();
    gameOver = true;
  } else if (wrong.length >= maxWrong) {
    fill('#B71C1C');  // strong red
    textSize(40);
    textFont('Times New Roman');
    text("Game Over!", width / 2, 120);
    text("Word was: " + word, width / 2, 160);
    showRestartMessage();
    gameOver = true;
  }
}

function keyPressed() {
  if (!gameStarted || gameOver) return;

  let letter = key.toUpperCase();
  if (/^[A-Z]$/.test(letter)) {
    if (!guessed.includes(letter) && !wrong.includes(letter)) {
      if (word.includes(letter)) {
        guessed.push(letter);
      } else {
        wrong.push(letter);
      }
    }
  }
}

function mousePressed() {
  if (!gameStarted) {
    // Check if Play button clicked
    if (isMouseInRect(width/2 - 70, height/2 - 30, 140, 60)) {
      gameStarted = true;
      startNewGame();
    }
    return;
  }

  // Check if Restart button clicked (bottom left)
  if (isMouseInRect(20, height - 60, 120, 40)) {
    startNewGame();
    return;
  }

  if (gameOver) {
    startNewGame();
  }
}

function startNewGame() {
  wordData = random(words);
  word = wordData.word;
  hint = wordData.hint;
  guessed = [];
  wrong = [];
  gameOver = false;
  loop();
}

function showRestartMessage() {
  textSize(26);
  fill('#FBC02D');  // bright yellow
  textFont('Times New Roman');
  text("Click the mouse or Restart button to play again", width / 2, 220);
  noLoop();
}

function drawHangman(stage) {
  stroke('#616161');  // medium gray
  strokeWeight(4);
  noFill();

  // Gallows
  line(100, 350, 200, 350);
  line(150, 350, 150, 100);
  line(150, 100, 250, 100);
  line(250, 100, 250, 130);

  // Body parts
  if (stage > 0) ellipse(250, 150, 40);
  if (stage > 1) line(250, 170, 250, 230);
  if (stage > 2) line(250, 180, 220, 210);
  if (stage > 3) line(250, 180, 280, 210);
  if (stage > 4) line(250, 230, 220, 270);
  if (stage > 5) line(250, 230, 280, 270);
}

function drawStartScreen() {
  fill('#333');
  textSize(48);
  textFont('Times New Roman');
  text("Hangman Game", width / 2, height / 3);

  drawButton(width / 2 - 70, height / 2 - 30, 140, 60, "Play");
}

function drawButton(x, y, w, h, label) {
  fill('#1976D2');  // Blue button color
  rect(x, y, w, h, 10);

  fill(255);
  textSize(24);
  textFont('Times New Roman');
  text(label, x + w/2, y + h/2 + 8);
}

function isMouseInRect(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}
