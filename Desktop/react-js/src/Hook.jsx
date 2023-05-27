import { StudentContext } from "./context"
import React,{useContext} from "react"

const Body=()=>  {
    const [students,setStudent]=useContext(StudentContext);
    const onDelete=(id)=>{
        let res=students.filter((st)=>st.id!==id)
        setStudent(res);
    }

    return(
        <div style={{background:"coral"}}>
            <h1 >Student {students.length}</h1>
                {students.map(student=>{
                    return <h1 key={student.id}>Name:{student.name} <button onClick={()=>onDelete(student.id)}>delete</button></h1>
                })}
        </div>
    )

}
    
export default Body