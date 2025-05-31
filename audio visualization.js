let sound, fft;
let playButton;

function preload() {
  // Preload the audio file (ensure file name matches)
  sound = loadSound('bgm audio visulatization.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();

  fft = new p5.FFT();

  // Create a play/pause button
  playButton = createButton("Play / Pause");
  playButton.position(20, 20);
  playButton.mousePressed(togglePlay);
}

function draw() {
  background(10); // Dark background
  translate(width / 2, height / 2); // Move origin to center

  let spectrum = fft.analyze();

  strokeWeight(2);
  beginShape();
  for (let angle = 0; angle < 360; angle += 3) {
    let index = floor(map(angle, 0, 360, 0, spectrum.length));
    let amp = spectrum[index];
    let radius = map(amp, 0, 255, 100, 300); // Frequency amplitude to radius

    let x = radius * cos(angle);
    let y = radius * sin(angle);

    stroke(map(amp, 0, 255, 0, 255), 100, 255); // Dynamic color
    vertex(x, y);
  }
  endShape(CLOSE);

  // Optional: central pulse
  let vol = sound.getLevel();
  let pulse = map(vol, 0, 1, 50, 150);
  stroke(255, 100);
  ellipse(0, 0, pulse);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
