import OPR from "./Componant/Landing"

function App() {
  return (
    <div className="grid justify-items-center content-center w-full h-[100vh] grid-rows-[85px,auto] gap-10 ">
      <div className="flex gap-7 justify-center text-xl ">
      <OPR op="+"></OPR>
      <OPR op="-"></OPR>
      <OPR op="X"></OPR>
      <OPR op="/"></OPR>
      </div>
      <div className="bg-black p-2 rounded-sm text-white text-center w-[100px] cursor-pointer ">Start Game</div>
         {/* <Landing></Landing> */}
    </div>
  )
}

export default App
