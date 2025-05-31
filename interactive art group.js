let player;
let stars = [];
let powerUps = [];
let score = 0;
let gameOver = false;
let powerUpActive = false;
let powerUpTimer = 0;
let bgStars = [];

function setup() {
  createCanvas(800, 600);
  player = new Player();
  for (let i = 0; i < 5; i++) {
    stars.push(new Star());
  }
  for (let i = 0; i < 100; i++) {
    bgStars.push(new BackgroundStar());
  }
  textFont('Arial', 24);
}

function draw() {
  background(10, 10, 30);

  for (let star of bgStars) {
    star.update();
    star.display();
  }

  if (gameOver) {
    fill(255);
    textAlign(CENTER);
    textSize(48);
    text('Game Over', width / 2, height / 2);
    textSize(24);
    text('Score: ' + score, width / 2, height / 2 + 50);
    text('Press R to Restart', width / 2, height / 2 + 90);
    return;
  }

  if (powerUpActive) {
    powerUpTimer--;
    if (powerUpTimer <= 0) {
      powerUpActive = false;
      player.speed = 7;
    }
  }

  player.update();
  player.display();

  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].display();

    if (stars[i].offscreen()) {
      stars.splice(i, 1);
      gameOver = true;
    } else if (stars[i].hits(player)) {
      stars.splice(i, 1);
      stars.push(new Star());
      score++;
      if (random() < 0.1) {
        powerUps.push(new PowerUp());
      }
    }
  }

  for (let i = powerUps.length - 1; i >= 0; i--) {
    powerUps[i].update();
    powerUps[i].display();

    if (powerUps[i].offscreen()) {
      powerUps.splice(i, 1);
    } else if (powerUps[i].hits(player)) {
      powerUps.splice(i, 1);
      activatePowerUp();
    }
  }

  fill(255);
  textAlign(LEFT);
  textSize(24);
  text('Score: ' + score, 10, 30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1);
  } else if (key === 'r' || key === 'R') {
    restartGame();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    player.setDir(0);
  }
}

function activatePowerUp() {
  powerUpActive = true;
  powerUpTimer = 300;
  player.speed = 14;
}

function restartGame() {
  score = 0;
  gameOver = false;
  stars = [];
  powerUps = [];
  player = new Player();
  for (let i = 0; i < 5; i++) {
    stars.push(new Star());
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.dir = 0;
    this.size = 50;
    this.speed = 7;
  }

  setDir(dir) {
    this.dir = dir;
  }

  update() {
    this.x += this.dir * this.speed;
    this.x = constrain(this.x, 0, width - this.size);
  }

  display() {
    fill(50, 200, 255);
    stroke(255);
    strokeWeight(2);
    rect(this.x, this.y, this.size, 20, 10);
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 20;
    this.speed = random(2, 5);
    this.color = color(random(100, 255), random(100, 255), 0);
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
    fill(255, 255, 255, 100);
    ellipse(this.x, this.y, this.size / 2);
  }

  offscreen() {
    return this.y > height;
  }

  hits(player) {
    return (
      this.y + this.size / 2 > player.y &&
      this.y - this.size / 2 < player.y + 20 &&
      this.x > player.x &&
      this.x < player.x + player.size
    );
  }
}

class PowerUp {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 15;
    this.speed = 3;
    this.color = color(0, 255, 255);
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size, 5);
    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text('S', this.x + this.size / 2, this.y + this.size / 2);
  }

  offscreen() {
    return this.y > height;
  }

  hits(player) {
    return (
      this.y + this.size > player.y &&
      this.y < player.y + 20 &&
      this.x + this.size > player.x &&
      this.x < player.x + player.size
    );
  }
}

class BackgroundStar {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.speed = random(0.2, 0.7);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  display() {
    noStroke();
    fill(255, 255, 255, 150);
    ellipse(this.x, this.y, this.size);
  }
}