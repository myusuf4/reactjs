import React,{useState,useEffect} from "react";


const Hooks=(prop)=>  {
   const [count,setCount]=useState(prop.count);
   
useEffect(()=>{
    setCount(prop.count)
},[prop.count])
    return(
        <div style={{flex:1}}>
            <h1>Hello Hooks</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )

}
    
export default Hooks