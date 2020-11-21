import React from 'react'

// function Greet()
// {
//    return<h2>Hello Janusha!!!</h2>
// }

const Greet = props => {
  return (
    <h1>{props.name} initial {props.initial} </h1>
  )
}
export default Greet