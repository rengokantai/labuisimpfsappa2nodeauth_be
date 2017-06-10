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

var api = express.Router();

//app.get('/',(req,res)=>{
 //   res.send('1')
    //res.json(messages)
//})
api.get('/messages',(req,res)=>{
    //res.send('1')
    res.json(messages)
})

api.post('/messages',(req,res)=>{
    //res.send('1')
    //console.log(req.body);
    messages.push(req.body);
    res.json(req.body);
})

app.use('/api',api);

app.listen(60000);