let cols, rows;
let spacing = 30;

function setup() {
  createCanvas(600, 600);
  cols = width / spacing;
  rows = height / spacing;
  stroke(255);
  strokeWeight(1.5);
  background(0);
}

function draw() {
  background(0, 15); // Fades old frames slowly

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let centerX = x * spacing + spacing / 2;
      let centerY = y * spacing + spacing / 2;

      let angle = noise(x * 0.1, y * 0.1, frameCount * 0.01) * TWO_PI * 2;

      push();
      translate(centerX, centerY);
      rotate(angle);
      line(-spacing / 2, 0, spacing / 2, 0);
      pop();
    }
  }
}
