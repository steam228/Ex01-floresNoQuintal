function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  noStroke();
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY < height / 2) {
      fill(0, 0, 255);
    } else {
      fill(0);
    }
  }
  circle(mouseX, mouseY, 20);
}

function keyPressed() {
  if (key === "c") {
    background(255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
