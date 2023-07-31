import React from 'react'

export default function Algebric() {
    let x = 30 ;
    let y = 20 ;
  return (
    <div>
       <h1 style={{color: "blue" , "background-color": "yellow"}}>Evaluate Expression</h1>
       <h3>{x} {'>'} {y} : {x > y ? "True" : "False"} </h3>
    </div>
  )
}
