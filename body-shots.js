var casper = require('casper').create();

//starting url
var url = casper.cli.args[0];

//path to local save folder
var savePath='screengrabs/';

var date = new Date();

// Set a delay to account for page load animations
var delay = 100;

// Add your sizes here
viewportSizes=[
  [1650, 1080],
  [720, 1024],
  [320, 700]
]


casper.start();

casper.each(viewportSizes, function(self, viewportSize, i){
  var width = viewportSize[0],
  height = viewportSize[1];

  casper.wait(delay, function() {

    this.viewport(width, height);

    casper.thenOpen(url, function() {
      this.viewport(width, height);
      this.captureSelector(savePath + 'GP' + width + height + '.png','body');

      this.echo('screenshot taken at ' + width + 'x' + height);
    });

  });
});


//run & done
casper.run(function() {
  this.echo('\n\n\n*********** Done ***********\n\n\n').exit();
});


