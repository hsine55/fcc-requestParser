//
// # request reader parser
//
// this is the second backend project in freecode camp
//

var express = require('express');

var accepts = require('accepts');
var UAParser = require('ua-parser-js');

var app = express();

app.use(function(req, res){
    var dataObject = {};
    dataObject["ipaddress"] = getIp(req);
    dataObject["language"] = getLanguage(req);
    dataObject["Os"] = getOs(req);
    
    res.send(dataObject);
});


function getIp(req) {
    return (req.ip);
}

function getLanguage(req) {
    return (accepts(req).language()[0]);
}

function getOs(req) {
    var parser = new UAParser();
    var ua = req.headers['user-agent'];
    console.log(parser.setUA(ua))
    return parser.setUA(ua).getOS();
}

app.listen(process.env.PORT);