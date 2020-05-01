import React,{useEffect,useState} from 'react'
import './App.css';
import {getUsers} from './services/apiServices';
import regeneratorRuntime from "regenerator-runtime";

const App=()=>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const getUsersForApi=async ()=>{
            const {data}=await getUsers();
            console.log(data.users);
            setUsers(data.users);
        }
        getUsersForApi();
    },[]);

    return(
        <div>
            {/*<div>
                {users && users.map((user)=>(
                    <div key={user._id}>{user.email}</div>
                ))}
            </div>*/}
             <h1>Stack Mern</h1>
        </div>
    )
}

export default App;