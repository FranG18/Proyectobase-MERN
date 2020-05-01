import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
const apiUrl='http://localhost:4000/graphql';

const queries={
    getUsers:`query{
        users{
          _id
          userName
          profile
          email
        }
      }`,
    getUsersEmails:`{
        users{
        _id
        email
        }
    }`
};

export const getUsers=async()=>{
    try{
        const {data}=await axios.post(apiUrl,{
            query:queries.getUsers
        });
        return data;
    }catch(err){
        console.log(err)
        return [];
    }
   
}



