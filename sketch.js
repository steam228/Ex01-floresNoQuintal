let divs;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  frameRate(4);
}

function draw() {
  background(0);

  divs = map(mouseY, 0, height, 30, 10);

  for (let i = 1; i < divs; i++) {
    for (let j = 1; j < divs; j++) {
      let rad = random(20, 60);
      noStroke();
      circle((i * width) / divs, (j * height) / divs, rad);
      stroke(70, 180);
      strokeWeight(3);
      arc(
        (i * width) / divs,
        (j * height) / divs,
        rad * 0.65,
        rad * 0.65,
        HALF_PI,
        PI,
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
