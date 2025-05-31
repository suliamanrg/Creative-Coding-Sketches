function setup() {
  createCanvas(500, 300);
  noLoop();
}

function draw() {
  background(230); // Light grey background

  drawCar(100, 150);
}

function mouseClicked() {
  background(random(200, 255), random(200, 255), random(200, 255));
  drawCar(100, 150);
}

function drawCar(x, y) {
  // Shadow under the car
  noStroke();
  fill(100, 100, 100, 50);
  ellipse(x + 100, y + 40, 180, 20);

  // Car body - base (red color)
  fill(220, 20, 60); // Crimson Red
  rect(x, y, 200, 40, 10);

  // Car top / roof (darker red)
  fill(178, 0, 0); // Dark red
  beginShape();
  vertex(x + 40, y);
  vertex(x + 60, y - 30);
  vertex(x + 140, y - 30);
  vertex(x + 160, y);
  endShape(CLOSE);

  // Windows
  fill(200, 230, 255); // Light blue glass
  rect(x + 65, y - 25, 30, 25, 5);
  rect(x + 105, y - 25, 30, 25, 5);

  // Headlights
  fill(255, 255, 150); // Soft yellow
  ellipse(x + 5, y + 10, 10, 10);

  // Taillights
  fill(255, 160, 160); // Soft red
  ellipse(x + 195, y + 10, 10, 10);

  // Wheels
  fill(30); // Dark gray
  ellipse(x + 40, y + 40, 35, 35); // Front wheel
  ellipse(x + 160, y + 40, 35, 35); // Rear wheel

  // Wheel rims
  fill(180);
  ellipse(x + 40, y + 40, 15, 15);
  ellipse(x + 160, y + 40, 15, 15);
}
