const mongoose=require('mongoose');

const Schema=mongoose.Schema;

var baseSchema=new Schema({
    data:String
})

module.exports=mongoose.model('Basemodel',baseSchema);