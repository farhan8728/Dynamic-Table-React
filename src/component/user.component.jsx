import React from 'react'
import axios from 'axios';

import { useState,useEffect } from 'react'

import Table from './table.component';

export default function User() {
    const [user,setUser] = useState([])

    useEffect(()=>{
        async function getUsers(){
            try{
                const res = await axios.get("https://dummyjson.com/users");
                setUser(res.data.users)
            }catch(err){
                console.log(err);
            }
            
        }
        getUsers()
    },[])
  return (
    <>
        <Table 
            items={user}
            columns={[{name:"Id",paths:"id"},
            {name:"firstName",paths:"firstName"},
            {name:"lastName",paths:"lastName"},
            {name:"age",paths:"age"},
            {
                name:"Hair Color",
                getContent:(user,id)=>{
                    return <td key={`col-${id}`}>{user.hair.color}</td>
                }
            }
        
        ]}
        />
    </>
  )
}
