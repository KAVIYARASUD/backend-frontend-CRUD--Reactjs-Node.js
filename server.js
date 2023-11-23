var express = require('express');
var mysql = require('mysql');
var db = require('./lib/db');
var cors = require('cors');
var app = express();


app.use(cors());
app.use(express.json());
const Port = 3001;



app.get('/data', function(req, res) {
 var sql="SELECT * FROM website ";
 db.query(sql,function(err,data){
  if(err){
    res.json(err)
    
 }else{
  res.json(data)
  
 }
 });
});


app.post('/Sign',function(req,res){
    var sql = "INSERT INTO website (NAME, MOBILE , GMAIL, PASS)VALUES (?,?,?,?) ";
    var values =[
        req.body.name,
        req.body.mobile,
        req.body.email,
        req.body.password
    ]
    db.query(sql,values,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows)
        }
    });
});

app.post('/delete', function (req, res) {
  var sql = "DELETE FROM website WHERE ID=?";
  db.query(sql, req.body.delete, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.post('/get', function(req, res) {
  var sql = 'SELECT * FROM website WHERE ID = ? ';
  
  db.query(sql,req.body.edit, function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data);
      console.log("success");
      console.log(data)
    }
  });
});
app.post('/update', function(req, res) {
  var sql = "UPDATE website SET NAME = ?, MOBILE = ?, GMAIL = ? WHERE ID = ?";
  var values = [
    req.body.name,
    req.body.mobile,
    req.body.gmail,
    req.body.ID
  ];
  db.query(sql, values, function(err, data) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log("Success");
      res.json(data);
    }
  });
});

app.post('/login',function(req,res){
  var sql = "SELECT * FROM website WHERE NAME = ? AND PASS = ?";
  var values=[
    req.body.user,
req.body.pass
]
db.query(sql,values,function(err,data){
  if(err){
    console.log(err);
    res.json(err);
  }else{
    console.log("success",data);
    res.json(data)
  }
})
})


app.post('/insert',function(req,res){
  var sql="INSERT INTO bio (NAME,GENDER ,AGE,MOBILE,GMAIL,ADDRESS,DISTRICT,STATE)VALUES(?,?,?,?,?,?,?,?)";
  var Values= [
      req.body.Name,
      req.body.Gender,
      req.body.Age,
      req.body.Mobile,
      req.body.Gmail,
      req.body.Address,
      req.body.District,
      req.body.State

  ]
  db.query(sql,Values,function(err,data){
      if(err){
          res.json({success:false,error:err})
           console.log("failed",err);
      }else{
          res.json({success:true,data})
          console.log("Success",data);
      }
  })
})

app.listen(Port, function(err) {
  if (err) {
    console.log('not running');
  } else {
    console.log('Server is running on Port ' + Port);
  }
});