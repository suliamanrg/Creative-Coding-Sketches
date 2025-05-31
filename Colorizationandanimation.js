function setup() {
  createCanvas(700, 400);
  noLoop();
}

function draw() {
  background(30); // dark gray background
  
  noStroke();
  
  // Define colors
  let black = color(30);
  let blue = color(141, 180, 173);
  let orange = color(242, 174, 92);
  let red = color(204, 75, 39);

  // Left triangles and quadrants
  fill(blue);
  triangle(0, 0, 175, 0, 175, 100);
  triangle(0, 400, 175, 400, 175, 300);

  fill(black);
  triangle(0, 0, 175, 100, 0, 200);
  triangle(0, 400, 175, 300, 0, 200);

  fill(orange);
  triangle(175, 100, 350, 200, 175, 300);
  triangle(525, 100, 350, 200, 525, 300);

  fill(red);
  triangle(175, 0, 175, 100, 350, 0);
  triangle(175, 400, 175, 300, 350, 400);

  fill(black);
  triangle(175, 0, 350, 0, 350, 200);
  triangle(175, 400, 350, 400, 350, 200);
  triangle(350, 0, 525, 100, 350, 200);
  triangle(350, 400, 525, 300, 350, 200);
  triangle(525, 100, 700, 0, 700, 200);
  triangle(525, 300, 700, 400, 700, 200);

  fill(blue);
  triangle(525, 300, 700, 400, 525, 400);
  triangle(525, 100, 700, 0, 525, 0);

  fill(orange);
  triangle(525, 0, 700, 0, 700, 200);
  triangle(525, 400, 700, 400, 700, 200);
}
