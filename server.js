var express = require('express');
var app = express();
var fs = require("fs");

app.all('*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "*");

    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Methods","*");

    res.header("X-Powered-By",' 3.2.1')

    res.header("Content-Type", "application/json;charset=utf-8");

    next();

});

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/doubanInfo', function (req, res) {
   fs.readFile( __dirname + "/" + "doubanInfo.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/listUsers2', function (req, res, next) {
   var data = {
	   "code" : 200,
	   "msg" : "success",
	   "result" : [
			{
			  "name" : "wang",
			  "password" : "hyacinth",
			  "profession" : "chong",
			  "id": 15
			}, {
			  "name" : "chong",
			  "password" : "lalala",
			  "profession" : "bulou",
			  "id": 16
			}, {
			  "name" : "qy",
			  "password" : "password3",
			  "profession" : "clerk",
			  "id": 17
		   }
	   ]
	}
	res.end(JSON.stringify(data));
	next()
})

app.get('/listUsers3', function (req, res, next) {
   var data = {
	   "code" : 200,
	   "msg" : "success",
	   "result" : [
			{
			  "name" : "wang1111111111",
			  "password" : "hyacinth11111111",
			  "profession" : "chong111111",
			  "id": 33
			}, {
			  "name" : "chong22222222",
			  "password" : "lalala2222222222",
			  "profession" : "bulou22222222",
			  "id": 55
			}
	   ]
	}
	res.end(JSON.stringify(data));
	next()
})

app.post('/postListUsers', function (req, res, next) {
   var data = {
	   "code" : 200,
	   "msg" : "success",
	   "result" : [
			{
			  "name" : "SUCCESS01",
			  "password" : "hyacinth",
			  "profession" : "chong",
			  "id": 101
			}, {
			  "name" : "SUCCESS02",
			  "password" : "lalala",
			  "profession" : "bulou",
			  "id": 202
			}, {
			  "name" : "SUCCESS03",
			  "password" : "password3",
			  "profession" : "clerk",
			  "id": 303
		   }
	   ]
	}
	res.json({msg: '发送成功'})
	// res.end(JSON.stringify(data));
	// next()
})

var server = app.listen(8099, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
