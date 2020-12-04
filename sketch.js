

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  stroke(255, 255,255);
  strokeWeight(1);
  point(x, y);

  step();
}

function step(){
  xStep = random(-1,1);
  yStep = random(-1,1);

  x+= xStep;
  y+= yStep;
}