let x, y; // text x and y
let baseY; // original y position
let textColor; // for storing text color
let floatOffset = 0; // used to float

function setup() {
  createCanvas(windowWidth, windowHeight); // full screen
  x = width / 2;
  baseY = height / 2; // base y to float around
  y = baseY;
  textAlign(CENTER, CENTER);
  textSize(64);
  textColor = color(0, 0, 139); // dark blue
}

function draw() {
  background(255, 165, 0); // orange bg

  // floating effect
  floatOffset += 0.05;
  y = baseY + sin(floatOffset) * 20; // y up and down

  // if mouse hover
  if (
    mouseX > x - textWidth("Bathspa University") / 2 &&
    mouseX < x + textWidth("Bathspa University") / 2 &&
    mouseY > y - 32 &&
    mouseY < y + 32
  ) {
    textColor = color(255, 215, 0); // gold hover
  } else {
    textColor = color(0, 0, 139); // dark blue default
  }

  fill(textColor);
  text("Bathspa University", x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // resize window
}
