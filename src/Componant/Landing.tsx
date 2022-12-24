import { useState } from "react";
import { useDispatch } from "react-redux";
import { Click } from "../feature/main/mainSlice";

interface props{
    op: string;
    id:number; 
    state:boolean
}
const OPR:React.FC<props> = (props) => {
const dispatch=useDispatch()
    return ( 
        <div  className={`w-[80px] h-[85px] grid justify-center items-center border-2 border-solid cursor-pointer border-black
         ${props.state && "bg-black text-white"} `}
         onClick={()=>dispatch(Click(props.id))}
         >
         {props.op}
        </div>
     );
}
 
export default OPR;
