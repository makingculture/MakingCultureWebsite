const s = ( sketch ) => {

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
    var navbar = sketch.createElement('nav');
    navbar.id('nav-bar');
    navbar.class('navbar');
    navbar.parent('navDiv');

    let navList = sketch.createElement('ul');
    navList.parent('nav-bar');
    navList.id('nav-list');
    navList.class('nav-list');

    let logo = sketch.createElement('li','<a href="/"><img src="/assets/img/' + navDetails.siteLogo + '" alt="logo" />');
    logo.parent('nav-list');
    logo.class('nav-item');

    // let navlink1 = sketch.createElement('li','<a href="/studio.html">Studio</a>');
    // navlink1.parent('nav-list');
    // navlink1.class('nav-item');

    // let navlink2 = sketch.createElement('li','<a href="/projects.html">Projects</a>');
    // navlink2.parent('nav-list');
    // navlink2.class('nav-item');

    // let navlink3 = sketch.createElement('li','<a href="/writing.html">Writing</a>');
    // navlink3.parent('nav-list');
    // navlink3.class('nav-item');

  }
}

let myp5 = new p5(s, document.getElementById('navDiv'));