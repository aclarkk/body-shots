//starting url
var url ='http://dribbble.com';

//path to local save folder
var savePath='exports/';

//use date in save string
var date = new Date();

//initial setup
var casper = require('casper').create({    
    viewportSize: {width: 1680, height: 1500},
    verbose: true,
    logLevel: "info"
});

//desktop capture
casper.start(url, function(){
	this.captureSelector( savePath + 'screengrab' + date +'.png', 'body');
});

//tablet capture
casper.then(function(){
	casper.log("grabbing the tablet", "info");

	casper.viewport(768, 1024);
	casper.userAgent('Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) version/4.0.4 Mobile/7B367 Safari/531.21.10');

    this.captureSelector( savePath + 'screengrab' + date +'-tablet.png', 'body');

});

//mobile capture
casper.then(function(){
	casper.log("grabbing the mobile", "info");

	casper.viewport(320, 1500);
	casper.userAgent('Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A522a Safari/419.3');

    this.captureSelector( savePath + 'screengrab' + date +'-mobile.png', 'body');

});

//run & done
casper.run(function() {
    this.echo('\n\n\n*********** Done ***********\n\n\n').exit();
});


