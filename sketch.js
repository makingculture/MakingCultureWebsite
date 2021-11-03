
let sourceText = "MAKING CULTURE";
let curIndex = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(220);
  frameRate(3);

  // textSize(50);
  // textAlign(CENTER);
  // text('COMING SOON', windowWidth/2, windowHeight/2);
  

}

function draw() {

  background(220);

  fill(255, 255, 255, 150);
  textSize(300);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(
    sourceText.substring(curIndex, curIndex+1),
    width/2, height/2);
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  fill(0);
  textSize(100);
  textStyle(NORMAL);
  textAlign(CENTER);
  text('COMING SOON', windowWidth/2, windowHeight/2);

}
