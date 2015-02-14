var formidable = require('formidable');
var express = require('express'); 
var router = express.Router(); 
var util = require("util"); 
var fs = require("fs"); 

router.post('/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // console.log(util.inspect({
        //     fields: fields,
        //     files: files
        // }));
 
        fs.readFile(files.RemoteFile.path, function(err, data) {
        	// save file from temp dir to new dir
            var newPath = __dirname + "/upload/" + files.RemoteFile.name;
            fs.writeFile(newPath, data, function(err) {
            	if (err) throw err;
            	console.log('file saved');	
                res.end();
            });
        });
    });
});

module.exports = router;