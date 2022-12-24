import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Result, Try } from "../feature/main/mainSlice";

const Playground = () => {
      const main=useSelector((state :any )=>state.main)
      const dispatch =useDispatch();
    
    useEffect(() => {
        //
Operation();
     },[main.changed])
     const Operation=()=>{
        let Op:number[]=[];
        main.OPR.forEach((element:any) => {
            if(element.state==true) Op.push(element.id)
        });
       let x=Random(Op);
       let rest1=Math.floor(Math.random() * (1000 - -1000 + 1) + -1000);
       let rest2;
       let calc;
       switch (x) {
        case 0:
            calc='+';
            rest2=main.Val1+main.Val2; 
            break;
        case 1:
            calc='-';
            rest2=main.Val1-main.Val2;
           
            break;
        case 2:
            calc='X';
            rest2=main.Val1*main.Val2;
        
            break;
        case 3:
            calc='/';
            rest2=main.Val1/main.Val2;
          
            break; }
        let random=Math.random()
let output={OP:calc,res1: random < 0.5 ? [  rest1,false] : [rest2,false] , res2:random > 0.5 ? [  rest1,false] : [rest2,false] }
console.log("res : ",rest2);

if(output.res1[0]==rest2)  output.res1[1]=true
else  output.res2[1]=true
console.log(output);

 dispatch(Result(output))
     }
    return ( 
        <div className="grid justify-items-center content-center text-2xl gap-10 h-[100vh] ">
            <div className="w-[90vw] bg-[#ddd] h-[4px] rounded-md " >
            <div className="w-[90vw] bg-[#ac1e1e] h-[4px] rounded-md " ></div>
            </div>
            <div className="flex justify-center item-center gap-10">
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  > {main.Val1}</div>
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  > {main.output.OP}</div>
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  >  {main.Val2}</div>
            
            </div>
            <div className="flex justify-center item-center gap-10">
          {!main.lose && <>
            <button  style={{boxShadow:'0 4px 8px -2px rgb(0 0 0 / 20%), 0 8px 10px 0 rgb(0 0 0 / 14%), 0 2px 20px 0 rgb(0 0 0 / 12%)'}}
              className={`w-[150px] h-[90px] grid justify-center items-center bg- bg-[#000000e0] text-white border-2 border-solid
               cursor-pointer border-black hover:bg-black `} 
               onClick={()=>{dispatch(Try(main.output.res1[1]));}}
               >  {main.output.res1[0]}</button>
                 <button  className={`w-[150px] h-[90px] grid justify-center items-center bg-[#000000e0] text-white border-2 border-solid 
            cursor-pointer border-black hover:bg-black `}  
            onClick={()=>{dispatch(Try(main.output.res2[1])); }} >  {main.output.res2[0]}</button>
          </>
           } 
               {main.lose && <>
                <button  style={{boxShadow:'0 4px 8px -2px rgb(0 0 0 / 20%), 0 8px 10px 0 rgb(0 0 0 / 14%), 0 2px 20px 0 rgb(0 0 0 / 12%)'}}
              className={`w-[150px] h-[90px] grid justify-center items-center bg- bg-[#000000e0] text-white border-2 border-solid
               cursor-pointer border-black hover:bg-black `}>  {main.output.res1[0]}</button>
                <button  style={{boxShadow:'0 4px 8px -2px rgb(0 0 0 / 20%), 0 8px 10px 0 rgb(0 0 0 / 14%), 0 2px 20px 0 rgb(0 0 0 / 12%)'}}
              className={`w-[150px] h-[90px] grid justify-center items-center bg- bg-[#000000e0] text-white border-2 border-solid
               cursor-pointer border-black hover:bg-black `} >  {main.output.res1[0]}</button>
               </> 
                 }  
          
            
            </div>
           <div className="rounded-full w-[80px] h-[85px] grid justify-center items-center border-2 border-solid border-black" >{main.Score}</div>
         { main.lose &&  <div className={` p-2 px-3 rounded-sm text-center text-xl w-[100px] bg-black text-white cursor-pointer `}
       onClick={()=>{location.reload()}}>Restart</div>}
        </div>
     );
}
 
export default Playground;

function Random(Op: number[]) {
   return Op[Math.floor(Math.random()*Op.length)];
}
