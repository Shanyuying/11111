var express = require('express');
var router = express.Router();
var fs = require('fs')
 

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('','utf-8',function(err,data){
		res.render();
		fs.writeFile()
	})
 
}); 
 
module.exports = router;