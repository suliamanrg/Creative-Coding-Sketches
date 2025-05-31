let particles = [];

function setup() {
  createCanvas(400, 400);
  background(255); // Set background to white
}

function draw() {
  // Fading effect with semi-transparent white overlay
  fill(255, 255, 255, 25);
  noStroke();
  rect(0, 0, width, height);

  // Add a new particle at the mouse position
  particles.push(new Dot(mouseX, mouseY));

  // Loop through particles in reverse to safely remove faded ones
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.move();
    p.render();
    if (p.isGone()) {
      particles.splice(i, 1);
    }
  }
}

// Dot class (formerly Particle)
class Dot {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.alpha = 255;
    this.diameter = random(10, 20);
  }

  move() {
    // Slight random movement
    this.pos.x += random(-2, 2);
    this.pos.y += random(-2, 2);
    this.alpha -= 1; // Fade out gradually
  }

  render() {
    noFill();
    let hueRatio = map(this.pos.x, 0, width, 0, 1);
    let strokeCol = lerpColor(color(255, 0, 0, this.alpha), color(0, 0, 255, this.alpha), hueRatio);
    stroke(strokeCol);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.diameter);
  }

  isGone() {
    return this.alpha <= 0;
  }
}
