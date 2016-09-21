var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Path de los CSS que utilizarán para el estilo de la página
app.use("/css", express.static(__dirname + '/css'));

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})



app.post('/process_post', urlencodedParser, function (req, res) {

  
 // Prepare output in JSON format
response = {
name:req.body.name,
codigo:req.body.codigo,
autor:req.body.autor,
value:req.body.value

   };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
