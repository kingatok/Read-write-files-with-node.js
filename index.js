var fs = require('fs');
var path = require('path');

var myPath = './'
fs.readdir(myPath, 'utf-8', function (err, files) {
	if (err) {
		throw err;	
	} 

	fs.writeFile('./tekst.txt', files, function(err) {
		if (err) throw err;
		console.log('Created new file with content of a directory');
	}); 
})