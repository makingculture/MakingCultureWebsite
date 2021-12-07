
const e = ( sketch ) => {

  let sourceText = "WE ARE MAKING CULTURE, AN ARCHITECTURE EDUCATION STUDIO";
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

    sketch.background(0);

    sketch.fill(255, 255, 255, 150);
    sketch.textFont('gothic-open-shaded');
    sketch.textSize(100);
    sketch.textStyle(sketch.REGULAR);
    sketch.textAlign(sketch.RIGHT);
    sketch.text(sourceText, sketch.windowWidth/2, 0, sketch.windowWidth/2, sketch.windowHeight);

  }
}

let p5Message = new p5(e, document.getElementById('backgroundCanvas'));


