var express = require('express');
var router = express()
var morgan = require('morgan')
var path = require('path');
var _ = require('underscore');
router.use(morgan(':method :url in :response-time ms status :status'));


var routes = require('./server/routes/index')(router);

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://clan-site-dskoda1.c9users.io');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

router.get('/api',function(req,res) {
	res.send('Working');
});

router.listen(8081);

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
//   var addr = server.address();
//   console.log("Clash analytics server listening at: ", addr.address + ":" + addr.port);
// });
  