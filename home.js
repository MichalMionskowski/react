var ref = require('http');
var url = require('url');
var mysql  = require("mysql");
var db = require('./dbserver.js');

exports.home=(res)=>{
    var con = db.connection();

    var output = "<table>";
    var sno= 1;
    output += "<tr><td>S.no</td><td>Registration No</td><td>Name</td><td>delete</td>"
    con.query("SELECT * from personal",function(err,result){
        result.forEach(function(record) {
            output += "<tr>";
            output += "<td>"+sno+"</td><td><a href='http://localhost:9090/consultant?regno=" + record.regno + "&name="+record.name+"'/a>"+record.regno+ "</td><td><a href='http://localhost:9090/consultant?name=" + record.name + "&regno="+record.regno+"'>"+record.name+  "</td><td><a href='http://localhost:9090/delete?regno=" + record.regno + "'/a>Delete</td>";
            output+="</tr>"
            sno ++;
            console.log("asdas");
        });
           output+= "</table>";
            con.end();  
            res.write(output); 
            res.end()
        });
         
}