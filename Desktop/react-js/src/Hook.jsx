import React,{useState} from "react";


const Hooks=()=>  {
   const [count,setCount]=useState(0);
   
    return(
        <div style={{flex:1}}>
            <h1>Hello Hooks</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+5)}>+5</button>
            <button onClick={()=>setCount(count-5)}>-5</button>
        </div>
    )

}
    
export default Hooks