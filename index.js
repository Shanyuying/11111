var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
  
router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  res.resdFile("index.txt","utf-8",function(err,data){
  	   res.resdFile("index.txt","JAON",function(){  })	
  })
  
    res.send({ name:});
});



module.exports = router;
