import React, {useState} from 'react'

function HookCounterFour() {
    const [items, setitems] = useState([])

   const additems = () => {
        setitems([...items , {
            id : items.length,
            value : Math.floor(Math.random()*10 +1)}])
        }

    return (
        <div>
            <button onClick = {additems}>Add number to list</button>
           <ul>Items in list{items.map(item => (<li key = {item.id}>{item.value}</li>))}
           </ul> 
        </div>
    )
}

export default HookCounterFour
