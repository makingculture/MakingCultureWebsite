
const e = ( sketch ) => {

  let sourceText = "MAKING CULTURE";
  let curIndex = 0;

  sketch.setup = () => {

    var canvasDiv = document.getElementById('backgroundCanvas');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = sketch.createCanvas(width, height);
    sketchCanvas.parent("backgroundCanvas");
    sketch.frameRate(3);

  }

  sketch.draw = () => {

    sketch.background(220);

    sketch.fill(255, 255, 255, 150);
    sketch.textSize(300);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textStyle(sketch.BOLD);

    sketch.text(
      sourceText.substring(curIndex, curIndex+1),
      sketch.width/2, sketch.height/2);
    curIndex++;
    if (curIndex > sourceText.length) {
      curIndex = 0;
    }

    sketch.fill(0);
    sketch.textSize(100);
    sketch.textStyle(sketch.NORMAL);
    sketch.textAlign(sketch.CENTER);
    sketch.text('COMING SOON', sketch.windowWidth/2, sketch.windowHeight/2);

  }













}

let p5Message = new p5(e, document.getElementById('backgroundCanvas'));




// function setup() {

//   print('Im working here!');

//   var canvasDiv = document.getElementById('backgroundCanvas');
//   var width = canvasDiv.offsetWidth;
//   var height = canvasDiv.offsetHeight;
//   var sketchCanvas = createCanvas(width, height);
//   sketchCanvas.parent("backgroundCanvas");
//   frameRate(3);
// }

// function draw() {

//   background(220);

//   fill(255, 255, 255, 150);
//   textSize(300);
//   textAlign(CENTER, CENTER);
//   textStyle(BOLD);
//   text(
//     sourceText.substring(curIndex, curIndex+1),
//     width/2, height/2);
//   curIndex++;
//   if (curIndex > sourceText.length) {
//     curIndex = 0;
//   }

//   fill(0);
//   textSize(100);
//   textStyle(NORMAL);
//   textAlign(CENTER);
//   text('COMING SOON', windowWidth/2, windowHeight/2);

// }
