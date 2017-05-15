//var HappyX = 795
//var SadX = 68
//var CalmX = 414
//var EnergizedX = 609
//var HeroismX = 250

//var HappyY = 614
//var SadY = 420
//var CalmY = 549
//var EnergizedY = 248
//var HeroismY = 200

//var timeCounter

function preload() {
  Happy = loadSound("assets/Happy.mp3")
  Sadness = loadSound("assets/Sadness.mp3")
  Calm = loadSound("assets/Calm.mp3")
  Energized = loadSound("assets/Energized.mp3")
  Heroism = loadSound("assets/Heroism.mp3")
  
}

function setup() {
  createCanvas (1000,700)
  frameRate(15)
  
  //Colors
  CHeroism = color(0,0,255,75)
  CCalm = color(0,255,0,75)
  CHappy = color(255,255,0,75)
  CSadness = color(65,118,204,75)
  CEnergized = color(77,9,140,75)
  
  
  

}

function draw() {
  background(255)
  //timeCounter = timeCounter + timeCounter
  noStroke()
  fill (CSadness)
  ellipse(68,420,50)
  //if timeCounter%2
  //SadX=SadX+random(-15,15)
  //SadY=SadY+random(-15,15)
  fill (CCalm)
  ellipse(414,549,50)
  fill (CHappy)
  ellipse(795,614,50)
  fill (CEnergized)
  ellipse(609,248,50)
  fill (CHeroism)
  ellipse(250,200,50)
  
  fill(150)
  textSize(25)
  text("P to pause",50, 50)

}

function mouseClicked() {
  if(dist(mouseX,mouseY,68,420) <= 25) {
    Sadness.play()
  }else if(dist(mouseX,mouseY,414,549) <= 25) {
    Calm.play()
  }else if(dist(mouseX,mouseY,795,614) <= 25) {
    Happy.play()
  }else if(dist(mouseX,mouseY,609,248) <= 25) {
    Heroism.play()
  }else if(dist(mouseX,mouseY,250,200) <= 25) {
    Energized.play()
  }
}
function keyPressed() {
  if (keyCode === 80) {
  Sadness.stop()
  Happy.stop()
  Energized.stop()
  Heroism.stop()
  Calm.stop()
  }
}