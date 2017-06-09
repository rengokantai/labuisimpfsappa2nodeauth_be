var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('1')
})

app.listen(1234)