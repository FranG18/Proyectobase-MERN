import User from '../models/User'

const controller={
    test:(req,res)=>res.status(200).send({message:'Prueba API'}),
    createUser:function(req,res){
        
        const data=req.body;
        const user=new User({
            userName:data.userName,
            description:data.description,
            sex:data.sex,
            email:data.email,
            password:data.password,
            profile:data.profile
        });

        user.save((err)=>{
            if(err) return res.send({error:err});

            return res.send({message:'Usuario creado exitosamente'})
        });
    },
    getUser:function(req,res){
        User.findById(req.params._id,(err,user)=>{
            if(err) return res.status(500).send({message:'Error al buscar el usuario',
                                                err:err});

            if(!user) return res.status(400).
            send({message:'El usuario no existe'});

            return res.status(200).send({user:user});
        })
    }
}

module.exports=controller;