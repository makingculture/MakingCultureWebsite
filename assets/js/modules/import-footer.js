const b = ( sketch ) => {

  // access setup json file
  let navDetails;

  sketch.preload = () => {

    let url = '/assets/json/setup.json';
    navDetails = sketch.loadJSON(url);

    }

  sketch.setup = () => {

    sketch.noCanvas();

    // sketch.print('Im working here!');

    // create header div
    var footer = sketch.createElement('footer-info');
    footer.id('footer-info');
    footer.class('footer-info');
    footer.parent('footer');

    // <a href="https://www.are.na/about" id="arena_about_link" target="_blank">made with Are.na</a>
    // Thanks to <a href="https://leuys.com" target="_blank">Benjamin Unterluggauer</a> for site inspiration <br> 
    // <a href="#top" id="top_button">top &uarr;</a>


  }
}

let myp5 = new p5(b, document.getElementById('footer'));