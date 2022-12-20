import { useState } from "react";

interface props{
    op:string;
}
const OPR:React.FC<props> = (props) => {
    const [Clicked, setClicked] = useState(false)
    return ( 
        <div  className={`w-[80px] h-[85px] grid justify-center items-center border-2 border-solid cursor-pointer border-black
         ${Clicked && "bg-black text-white"} `}
         onClick={()=>setClicked(prev=>prev= !prev)}
         >
         {props.op}
        </div>
     );
}
 
export default OPR;
