const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const path=require('path');
const rutes=require('./rutes/rutes');
const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api',rutes);

module.exports=app;
