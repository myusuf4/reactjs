import React,{createContext,useState} from "react";


export const StudentContext=createContext();

const StudetList=({children})=>{
    const [student,setStudent]=useState(
        [
            {id:1,name:"Muhammad",surname:"Nurmirzayev"},
            {id:2,name:"Abdulloh",surname:"Davronov"},
            {id:3,name:"AbduKarim",surname:"Muhammadov"},
            {id:4,name:"AbduJalil",surname:"Muhiddinov"},
            {id:5,name:"AbduQodir",surname:"Akbarov"},
            {id:6,name:"Abdulloh",surname:"AbduKarimov"},
            {id:7,name:"Kozim",surname:"Mannopov"},
        ]
    );
    return(
        <StudentContext.Provider value={[student,setStudent]}>
            {children}
        </StudentContext.Provider>
    )
}
export default StudetList;