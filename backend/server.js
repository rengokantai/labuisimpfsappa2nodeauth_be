var express = require('express');
var app = express();

var messages = [{text:'a',owner:'ke'},{text:'other',owner:'ma'}]

app.get('/',(req,res)=>{
    res.send('1')
    //res.json(messages)
})
app.get('/messages',(req,res)=>{
    //res.send('1')
    res.json(messages)
})

app.listen(1234);