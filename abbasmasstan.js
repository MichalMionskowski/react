var http = require("http");
var mysql  = require("mysql");

function connection(){
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

var con=connection();
con.query("SELECT * from personal",function(err,result){
    result.forEach(function(record) {
        console.log("Persona id:"+record.regno);
        console.log("Name:"+record.name);
        console.log("your marks:" + record.marks + "\n");
        
    });
    con.end();
});