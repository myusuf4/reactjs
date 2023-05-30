import React,{useState,useEffect} from "react";

const Fetch=()=>{
    const [students, setStudents]=useState([]);
    const [id, setId]=useState([]);
    const getUsers=(id)=>{
    
        return fetch(`https://jsonplaceholder.typicode.com/users/${id?`/${id}`:""}`,{
            // method:"Post"
        })
        .then((res)=>res.json())
    };
    useEffect(()=>{
        getUsers().then((res)=>setStudents(res))
    },[])

    const getInfo=(id)=>{
        console.log(id);
        setId(id)
    }
    return(
        <div>
            <h1>Students List</h1>
            <div>
                {students.map((value)=>{
                return<h1 key={value.id}>
                    Name:{value.id} {value.name}
                    <button onClick={()=>getInfo(value.id)}>get info</button>
                    </h1>
                })}
            </div>
        </div>
    )
}
export default Fetch;