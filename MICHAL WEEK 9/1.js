var phy =70;
var che =70;
var mat =70;


var total = phy+che+mat;
var per = total*100/300;

console.log("total:"+ total)
console.log("percentage:"+ per + "%")


if(per>= 60){
    console.log("Pass");
}else{
    console.log("Fail");  
}