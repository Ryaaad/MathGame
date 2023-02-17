import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import OPR from "./Componant/Landing"
import Playground from "./Componant/Playground";
import { Begin, time } from "./feature/main/mainSlice";

function App() {
 const main=useSelector((state :any )=>state.main)
 
const dispatch=useDispatch();
useEffect(() => {
  main.Begin &&
  setInterval(() => {
    dispatch(time())
     }, 50); 
}, [main.Begin])


  return (
    <>
     { !main.Begin  && <div className="grid justify-items-center content-center w-full h-[100vh] grid-rows-[85px,auto] gap-10 ">
      <div className="flex gap-7 justify-center text-xl ">
        {main.OPR.map((O: { op: string; id:number; state:boolean })=>{
          return <OPR key={O.id}{...O}></OPR>
        })}
    
      </div>
      <div className={` p-2 rounded-sm text-center w-[110px] ${main.Start ? 'bg-black font-bold  text-white cursor-pointer':
      'bg-[#eee] text-[#c2c2c2] ' } `}
       onClick={()=>main.Start? dispatch(Begin()) : '' }
       >Start Game</div>
    </div>}
    {main.Begin && <Playground></Playground>  }
    </>
   
  )
}

export default App
