// import React, { useState } from "react"
import Die from "./Die"
import React from "react"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function generateValues(id) {
   const values = []
   for (let i = 0; i < 10; i++) {
      values.push({
         value:(Math.floor(Math.random() * 6) + 1),
         isHeld:false,
         id:i
   })}
   return values
}

export default function App() { 
   

function Win(){
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

   function newGame(){
      setValues(()=>generateValues())
   }
   const [values, setValues] =React.useState(() => generateValues())

   function handleNewGame() {
      setValues(prev=>prev.map(diee=>diee.isHeld===false?{...diee,value:(Math.floor(Math.random() * 6) + 1)}:diee))
   }
   function toggle(id){
      setValues(prev=>prev.map(diee=>diee.id===id?{...diee,isHeld:!diee.isHeld}:diee))
   }
   const gameWon=((values.every(diee=>diee.isHeld)&&values.every(diee=>diee.value===values[0].value)))
   

   return (
      <main>
         <h1 id="mainHead">Tenzie game</h1>
         <p className="para">Roll until all dice have same value. freeze the dice having same values</p>

         <div className="dies">
            {values.map((v) => (
               <Die key={v.id} value={v.value} isHeld={v.isHeld} toggle={toggle} id={v.id}/>
            ))}
         </div>

         <div className="newGame">
            <button onClick={gameWon? newGame:handleNewGame}>{gameWon?"New Game":"Roll"}</button>
         </div>
         <div className="win">{gameWon&&<Win/>}</div>
      </main>
   )
}
/**
     * Challenge part 2:
     * 1. Create a new `gameWon` variable.
     * 2. If `gameWon` is true, change the button text to
     *    "New Game" instead of "Roll"
     */
    
  