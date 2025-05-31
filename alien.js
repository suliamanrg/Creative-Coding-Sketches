function setup() {
  createCanvas(400, 500); // Increased height for the full body
  noLoop(); // Only draw once
}

function draw() {
  background(255); // White background

  // Alien Head
  fill(100, 180, 255); 
  ellipse(200, 180, 160, 200); 

  // Eyes
  fill(0); 
  ellipse(160, 170, 35, 60); 
  ellipse(240, 170, 35, 60); 

  // Pupils
  fill(100, 180, 255);
  beginShape();
  vertex(160, 170);
  vertex(165, 160);
  vertex(170, 170);
  vertex(165, 180);
  endShape(CLOSE);

  beginShape();
  vertex(240, 170);
  vertex(245, 160);
  vertex(250, 170);
  vertex(245, 180);
  endShape(CLOSE);

  // Mouth
  fill(50, 90, 200);
  arc(200, 230, 80, 40, 0, PI); 

  // Antennas
  stroke(100, 180, 255);
  strokeWeight(3);
  line(180, 100, 160, 50);
  line(220, 100, 240, 50);

  noStroke();
  fill(0);
  ellipse(160, 50, 10, 10);
  ellipse(240, 50, 10, 10);

  // Body
  fill(100, 180, 255);
  beginShape();
  vertex(150, 270);
  vertex(250, 270);
  vertex(280, 400);
  vertex(120, 400);
  endShape(CLOSE);

  // Arms
  fill(100, 180, 255);
  ellipse(100, 300, 30, 100); // Left arm
  ellipse(300, 300, 30, 100); // Right arm

  // Body Detail - Belly oval
  fill(80, 160, 240, 180);
  ellipse(200, 340, 60, 100);
}
