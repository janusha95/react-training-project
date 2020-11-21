import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('How are you?')}>Call Parent</button>
        </div>
    )
}

export default ChildComp
