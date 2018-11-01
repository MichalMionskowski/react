var ref = require('http');
var url = require('url');
var mysql  = require("mysql");
var home = require('./home.js');
var consultant = require('./consultant.js');
var dbserver = require('./dbserver.js')


var server= ref.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var myurl = url.parse(req.url, true);
    var mydata = myurl.query;

    if(myurl.pathname=="/"){
            home.home(res);
    }else if(myurl.pathname=="/consultant"){
            consultant.consultant(res,mydata);


    }else if(myurl.pathname=="/delete"){
        var regno = mydata.regno;
        var con = dbserver.connection();
        var sql = "DELETE FROM personal WHERE regno = " + regno;
        con.query(sql,function(err,result){
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });

        var sql = "DELETE FROM results WHERE regno = " + regno;
        con.query(sql,function(err,result){
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });

        var sql = "DELETE FROM salary WHERE regno = " + regno;
        con.query(sql,function(err,result){
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
    }

}).listen(9090);

exports.connection = function (){
    var con=mysql.createConnection(
        {
            host:"localhost",
            user:"root",
            password:"root",
            database:"qa"
        }
    );
    
    con.connect(function(err){
        if(err){
            console.log(err);
            console.log("Error connection!!");
        }else{
            console.log("Connected!!");
        }
    });
    return con;
}

