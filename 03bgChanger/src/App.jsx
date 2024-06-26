import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("purple");
  return (

    <div className='h-screen flex items-center justify-center' style={{backgroundColor : color}}>
      <button className='text-white border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "red"}} onClick={()=>(setcolor("red"))}>RED</button>
      <button className='text-white border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "pink"}} onClick={()=>(setcolor("pink"))}>PINK</button>
      <button className='text-white border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "black"}} onClick={()=>(setcolor("black"))}>BLACK</button>
      <button className='text-black border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "white"}} onClick={()=>(setcolor("white"))}>WHITE</button>
      <button className='text-black border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "yellow"}} onClick={()=>(setcolor("yellow"))}>YELLOW</button>
      <button className='text-black border-2 mx-5 p-5 rounded-xl' style={{backgroundColor: "lavender"}} onClick={()=>(setcolor("lavender"))}>LAVENDER</button>
    </div>
  )
}

export default App

