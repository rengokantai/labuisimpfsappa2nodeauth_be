var express = require('express');
var app = express();
var bodyParser=require('body-parser');

var messages = [{text:'a',owner:'ke'},{text:'other',owner:'ma'}]
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})

//app.get('/',(req,res)=>{
 //   res.send('1')
    //res.json(messages)
//})
app.get('/messages',(req,res)=>{
    //res.send('1')
    res.json(messages)
})

app.post('/message',(req,res)=>{
    //res.send('1')
    console.log(req.body);
    res.sendStatus(200);
})

app.listen(1234);