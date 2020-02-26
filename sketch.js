function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(29, 33, 110);
  
print(pmouseX + ', ' + pmouseY)

  rect(0, 400, 1000, 100) 
  
  fill(184, 179, 160)
  rect(200, 250, 600, 200);  //Building
  fill(145, 133, 86)
  rect(480, 370, 40, 80); //door
  fill(145, 133, 86)
  triangle(200, 250, 500, 200, 800, 250) //roof
  fill(99, 80, 2)
  ellipse(500, 300, 50, 50); //middle window
  fill(45, 110, 112)
  ellipse(500, 300, 40, 40);
  fill(99, 80, 2)
  ellipse(350, 300, 50, 50); //left window
  fill(45, 110, 112)
  ellipse(350, 300, 40, 40);
  fill(99, 80, 2)
  ellipse(650, 300, 50, 50); //right window
  fill(45, 110, 112)
  ellipse(650, 300, 40, 40);
  
}