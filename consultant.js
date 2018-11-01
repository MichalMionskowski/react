var ref = require('http');
var url = require('url');
var mysql  = require("mysql");
var db = require('./dbserver.js');

exports.consultant=(res,mydata)=>{
    
        var regno = mydata.regno;
        var name = mydata.name;
        var con = db.connection();
        var output = "";
        var sno= 1;
        output+="Consultant:" + name + "      <a href='http://localhost:9090/'>HOME</a></br>";
        output+="Results</br>";
        output += "<table><tr><th>S.no</th><th>Subject</th><th>Marks</th><th>Percentage</th>"
        con.query("SELECT * from results",function(err,result){
        result.forEach(function(record) {
            if(regno==record.regno){
                var per = record.marks/150;
                output += "<tr>";
                output += "<td>"+sno+"</td><td>"+record.subject+"</td><td>"+record.marks+"</td><td>"+per+"</td>";
                output += "</tr>"
                sno ++;
            }

        });
        output+= "</table>";
        res.write(output);
        

    
    });
        var output2 = "Accounts</br>";
        output2 += "<table><tr><th>S.no</th><th>Date</th><th>Salary</th>";
        con.query("SELECT * from salary",function(err,result){
            result.forEach(function(record) {
                if(regno==record.regno){
                    output2 += "<tr>";
                    output2 += "<td>"+sno+"</td><td>"+record.date+"</td><td>"+record.salary+"</td>";
                    output2+="</tr>"
                    sno ++;
                }

            });
            output2+= "</table>";
            res.write(output2);
            res.end();
            con.end();
        });
         
}