var ref = require('http');
var url = require('url');

var server= ref.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var myurl = url.parse(req.url, true);
    var mydata = myurl.query;
    console.log(myurl.pathname);
    console.log(myurl.path);
    if(myurl.pathname=="/"){
        res.write("<a href ='http://localhost:9120/times?T=1'>1</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=2'>2</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=3'>3</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=4'>4</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=5'>5</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=6'>6</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=7'>7</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=8'>8</a><br/>");
        res.write("<a href ='http://localhost:9120/times?T=9'>9</a><br/>");
    }
    res.end();
});

server.listen(9020);