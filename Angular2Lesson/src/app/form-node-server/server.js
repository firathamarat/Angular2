
var http = require('http');
var formidable = require('formidable');


var server = http.createServer(function (req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, X-Request-With");

    console.log(req.method);

    processForm(req, res);

});


function processForm(req, res) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        fields.id = 123;

        res.writeHead(200, { 'content-type': 'text/plain' });

        var data = JSON.stringify({ data: fields });
        res.end(data);

        console.log('Gelen paket: \n');
        console.log(data);
    })
}


var port = 1453;

server.listen(port);
console.log("Server: " + port + " portundan dinlemeye başladı")
