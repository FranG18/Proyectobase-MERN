const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    userName:String,
    description:String,
    sex:String,
    email:String,
    password:String,
    profile:String
})

const model=mongoose.model('User',userSchema);

module.exports=model;