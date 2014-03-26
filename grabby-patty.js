//starting url
var url ='http://dribbble.com';

//path to local save folder
var savePath='screengrabs/';

var date = new Date();

var delay = 100;

var selector

viewportSizes=[
  [1650, 1080],
  [720, 1024],
  [320, 700]
]

var casper = require('casper').create();

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


