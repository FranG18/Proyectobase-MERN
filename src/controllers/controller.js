const Basemodel=require('../models/basemodel');

const controller={
    test:(req,res)=>res.status(200).send({message:'Prueba API'})
}

module.exports=controller;