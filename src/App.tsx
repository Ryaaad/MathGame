import { useDispatch, useSelector } from "react-redux"
import OPR from "./Componant/Landing"
import Playground from "./Componant/Playground";
import { Begin } from "./feature/main/mainSlice";

function App() {
 const main=useSelector((state :any )=>state.main)
 
const dispatch=useDispatch();


  return (
    <>
     { !main.Begin  && <div className="grid justify-items-center content-center w-full h-[100vh] grid-rows-[85px,auto] gap-10 ">
      <div className="flex gap-7 justify-center text-xl ">
        {main.OPR.map((O: { op: string; id:number; state:boolean })=>{
          return <OPR key={O.id}{...O}></OPR>
        })}
    
      </div>
      <div className={` p-2 rounded-sm text-center w-[100px]
       ${main.Start ? ' bg-black text-white cursor-pointer' : 'bg-[#eee] text-[#ddd] ' } `}
       onClick={()=>main.Start? dispatch(Begin()) : '' }
       >Start Game</div>
    </div>}
    {main.Begin && <Playground></Playground>  }
    </>
   
  )
}

export default App
