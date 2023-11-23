var mysql= require('mysql');

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data"
});
con.connect(function(err){
    if(err){
        console.log("Not connected");
    }else{
        console.log("Database Connected Successfully.. !");
    }
})
module.exports = con ;