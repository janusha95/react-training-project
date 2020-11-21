import React from 'react'

function Event() {
    function clickHandle() {
        console.log("clicked in func comp")
    }
    return (
        <div>
           <button onClick={clickHandle}>Click</button> 
        </div>
    )
}

export default Event
