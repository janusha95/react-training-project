import React, {useState} from 'react'

function HooksCounterThree() {
    const [name, setname] = useState({firstName: "", lastName: ""})
    return (
        <form>
            <input type = "text"
            value = {name.firstName}
            onChange = {e => setname({ ...name , firstName : e.target.value})}
            />
            <input type = "text"
            value = {name.lastName}
            onChange = {e => setname({ ...name ,lastName : e.target.value})}
            />
            <h3>firstname: {name.firstName} lastname: {name.lastName}</h3>
        </form>
    )
      
}

export default HooksCounterThree
