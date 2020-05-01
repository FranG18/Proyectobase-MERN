import User from '../models/User'
import regeneratorRuntime from "regenerator-runtime";

export const resolvers={
    Query:{
        hello:()=>{
            return 'Hello Word with graphqlssss'
        },
        greet:(root,{name})=>{
          return `Hola ${name}`
        },
        users: async (_,args,con)=>{
            console.log(con);
            try{
                const users=await User.find({});
                return users;
            }catch(err){
                console.log(err);
            }   
        },
    },
    Mutation:{
        createUser: async(_,{input})=>{
            const user=await User.create(input);
            return user;
        }
    }
};