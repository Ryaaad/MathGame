import { useSelector } from "react-redux";

const Playground = () => {
      const main=useSelector((state :any )=>state.main)
     const Operation=()=>{
        let Op:number[]=[];
        main.OPR.forEach((element:any) => {
            if(element.state==true) Op.push(element.id)
        });
        console.log(Op);
       let x=Random(Op);
       
      return x;
     }
   
    return ( 
        <div className="grid justify-items-center content-center text-2xl gap-10 h-[100vh] ">
            <div className="w-[90vw] bg-[#ddd] h-[4px] rounded-md " >
            <div className="w-[90vw] bg-[#ac1e1e] h-[4px] rounded-md " ></div>
            </div>
            <div className="flex justify-center item-center gap-10">
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  > {main.Val1}</div>
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  > {Operation()}</div>
            <div  className={`w-[150px] h-[90px] grid justify-center items-center border-2 border-solid border-black `}  >  {main.Val2}</div>
            
            </div>
            <div className="flex justify-center item-center gap-10">
            <div style={{boxShadow:'0 4px 8px -2px rgb(0 0 0 / 20%), 0 8px 10px 0 rgb(0 0 0 / 14%), 0 2px 20px 0 rgb(0 0 0 / 12%)'}}
              className={`w-[150px] h-[90px] grid justify-center items-center bg- bg-[#000000e0] text-white border-2 border-solid
               cursor-pointer border-black hover:bg-black `}  > 8</div>
            <div  className={`w-[150px] h-[90px] grid justify-center items-center bg-[#000000e0] text-white border-2 border-solid 
            cursor-pointer border-black hover:bg-black `}  > 21</div>
            
            </div>
           <div className="rounded-full w-[80px] h-[85px] grid justify-center items-center border-2 border-solid border-black  " >{main.Score}</div>

        </div>
     );
}
 
export default Playground;

function Random(Op: number[]) {
   return Op[Math.floor(Math.random()*Op.length)];
}
