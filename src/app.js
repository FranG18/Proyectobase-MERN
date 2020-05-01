import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import rutes from './rutes/rutes'
import graphqlHTTP from 'express-graphql'
import {buildSchema} from 'graphql'
import schema from './graphql/schema'

const app=express();

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    context:{
        message:'Mensaje desde el context'
    }
}));

app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan('dev'));



app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api',rutes);

export default app;
