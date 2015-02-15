var express = require('express'); 
var router = express.Router(); 
var multer = require('multer');

router.use(multer({dest:"./upload/", 
	rename: function (fieldname, filename) {
		return Date.now()
	}
}));

module.exports = router;