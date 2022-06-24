import axios from 'axios';
import React,{useEffect, useState} from 'react'


export const UserList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res => {
           console.log(res.data);
           setUsers(res.data);
           setIsLoading(false)
        })
      }, []);
  return (
    isLoading ? (<h1>Loading...</h1>) 
    
    : users.map(user => 
        <div className="col-4 my-3 rounded-pill bg-primary text-white" key={user.id}>
            <h5>{user.name} <br/> {user.email} <br/> {user.company.name}</h5>
        </div>
        )
    
  )
}
